import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, validateEmailJSConfig } from '../config/emailjs';

interface EmailData {
    from_name: string;
    from_email: string;
    subject: string;
    message: string;
    to_email?: string;
    [key: string]: string | undefined; // Permitir propiedades adicionales
}

interface UseEmailJSReturn {
    sendEmail: (data: EmailData) => Promise<void>;
    isLoading: boolean;
    error: string | null;
    success: boolean;
    reset: () => void;
}

export const useEmailJS = (): UseEmailJSReturn => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const sendEmail = async (data: EmailData): Promise<void> => {
        setIsLoading(true);
        setError(null);
        setSuccess(false);

        try {
            // Validar configuración
            const validation = validateEmailJSConfig();
            if (!validation.isValid) {
                throw new Error(`EmailJS no está configurado correctamente. Faltan variables: ${validation.missing.join(', ')}`);
            }

            // Enviar email
            const result = await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                data,
                EMAILJS_CONFIG.PUBLIC_KEY
            );

            if (result.text === 'OK') {
                setSuccess(true);
            } else {
                throw new Error('Error en el envío del email');
            }

        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
            setError(errorMessage);
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    const reset = () => {
        setError(null);
        setSuccess(false);
        setIsLoading(false);
    };

    return {
        sendEmail,
        isLoading,
        error,
        success,
        reset
    };
};