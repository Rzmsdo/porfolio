// Configuración de EmailJS desde variables de entorno
// Las variables deben estar definidas en el archivo .env
export const EMAILJS_CONFIG = {
    SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
    TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
    PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
    TO_EMAIL: import.meta.env.VITE_EMAILJS_TO_EMAIL || 'direzmas@gmail.com',
};

// Validación de configuración
export const validateEmailJSConfig = (): { isValid: boolean; missing: string[] } => {
    const missing: string[] = [];
    
    if (!EMAILJS_CONFIG.SERVICE_ID) missing.push('VITE_EMAILJS_SERVICE_ID');
    if (!EMAILJS_CONFIG.TEMPLATE_ID) missing.push('VITE_EMAILJS_TEMPLATE_ID');
    if (!EMAILJS_CONFIG.PUBLIC_KEY) missing.push('VITE_EMAILJS_PUBLIC_KEY');
    
    return {
        isValid: missing.length === 0,
        missing
    };
};

// Configuración del template de email
// Los parámetros que enviarás a EmailJS deben coincidir con los nombres en tu template
export interface EmailTemplateParams {
    from_name: string;
    from_email: string;
    subject: string;
    message: string;
    to_email?: string; // Email de destino (opcional si está configurado en el template)
}