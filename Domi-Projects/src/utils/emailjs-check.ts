import { validateEmailJSConfig } from '../config/emailjs';

// Script de verificación de configuración EmailJS
export const checkEmailJSSetup = () => {
    console.log('🔍 Verificando configuración de EmailJS...');
    
    const validation = validateEmailJSConfig();
    
    if (validation.isValid) {
        console.log('✅ EmailJS configurado correctamente');
        console.log('📧 Servicio listo para enviar emails');
        return true;
    } else {
        console.error('❌ EmailJS no está configurado correctamente');
        console.error('🔧 Variables faltantes:', validation.missing);
        console.log('💡 Revisa tu archivo .env y asegúrate de tener:');
        validation.missing.forEach(variable => {
            console.log(`   - ${variable}`);
        });
        return false;
    }
};

// Ejecutar verificación en desarrollo
if (import.meta.env.DEV) {
    checkEmailJSSetup();
}