import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contact.css';
import { EMAILJS_CONFIG, validateEmailJSConfig } from '../config/emailjs';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
}

export const Contact = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'El nombre es requerido';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'El email es requerido';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Email inválido';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'El asunto es requerido';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'El mensaje es requerido';
        } else if (formData.message.length < 10) {
            newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Limpiar error del campo al escribir
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateForm()) return;

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // Validar configuración de EmailJS
            const validation = validateEmailJSConfig();
            if (!validation.isValid) {
                throw new Error(`EmailJS no está configurado correctamente. Faltan variables: ${validation.missing.join(', ')}`);
            }

            // Preparar los parámetros para EmailJS
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message,
                to_email: EMAILJS_CONFIG.TO_EMAIL // Usar email desde .env
            };

            // Enviar email usando EmailJS
            const result = await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                templateParams,
                EMAILJS_CONFIG.PUBLIC_KEY
            );

            console.log('Email enviado exitosamente:', result.text);
            
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            
            // Limpiar mensaje de éxito después de 5 segundos
            setTimeout(() => setSubmitStatus('idle'), 5000);
            
        } catch (error) {
            console.error('Error al enviar el email:', error);
            setSubmitStatus('error');
            
            // Mostrar error específico en desarrollo
            if (import.meta.env.DEV) {
                console.error('Detalles del error:', error);
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <div className="section-header">
                    <h2 className="section-title">Hablemos</h2>
                    <p className="section-subtitle">
                        ¿Tienes un proyecto en mente? Me encantaría escucharte
                    </p>
                </div>

                <div className="contact-content">
                    {/* Imagen y datos de contacto */}
                    <div className="contact-info">
                        <div className="profile-image-container">
                            <div className="profile-image-wrapper">
                                <img 
                                    src="https://avatars.githubusercontent.com/u/128168900?v=4"
                                    alt="Domingo Ramírez"
                                    className="profile-image"
                                />
                                <div className="profile-glow"></div>
                            </div>
                        </div>

                        <div className="contact-details">
                            <h3>Domingo Ramírez</h3>
                            <p className="contact-role">Desarrollador Full Stack</p>

                            <div className="contact-methods">
                                <a href="mailto:tu-email@example.com" className="contact-method">
                                    <i className="fas fa-envelope"></i>
                                    <div>
                                        <span className="method-label">Email</span>
                                        <span className="method-value">direzmas@gmail.com</span>
                                    </div>
                                </a>

                                
                                <div className="contact-method">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div>
                                        <span className="method-label">Ubicación</span>
                                        <span className="method-value">Calpe, Alicante, España</span>
                                    </div>
                                </div>
                            </div>

                            <div className="social-links">
                                <a href="https://github.com/Rzmsdo" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/domirami" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="https://twitter.com/tu-usuario" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Formulario de contacto */}
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">
                                Nombre completo <span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={errors.name ? 'error' : ''}
                                placeholder="Tu nombre"
                            />
                            {errors.name && <span className="error-message">{errors.name}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">
                                Email <span className="required">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={errors.email ? 'error' : ''}
                                placeholder="tu@email.com"
                            />
                            {errors.email && <span className="error-message">{errors.email}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">
                                Asunto <span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className={errors.subject ? 'error' : ''}
                                placeholder="¿Sobre qué quieres hablar? Desarrollo web, app móvil..."
                            />
                            {errors.subject && <span className="error-message">{errors.subject}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">
                                Mensaje <span className="required">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className={errors.message ? 'error' : ''}
                                placeholder="Cuéntame sobre tu proyecto..."
                                rows={6}
                            />
                            {errors.message && <span className="error-message">{errors.message}</span>}
                        </div>

                        <button 
                            type="submit" 
                            className="submit-button"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <i className="fas fa-spinner fa-spin"></i>
                                    Enviando...
                                </>
                            ) : (
                                <>
                                    <i className="fas fa-paper-plane"></i>
                                    Enviar mensaje
                                </>
                            )}
                        </button>

                        {submitStatus === 'success' && (
                            <div className="form-message success">
                                <i className="fas fa-check-circle"></i>
                                ¡Mensaje enviado con éxito! Te responderé pronto.
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="form-message error">
                                <i className="fas fa-exclamation-circle"></i>
                                Hubo un error al enviar el mensaje. Intenta de nuevo.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};