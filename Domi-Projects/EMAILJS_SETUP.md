# Configuración de EmailJS

## Pasos para configurar EmailJS en tu proyecto

### 1. Crear cuenta en EmailJS
1. Ve a [EmailJS](https://www.emailjs.com/) y crea una cuenta gratuita
2. Confirma tu email

### 2. Configurar un servicio de email
1. En el dashboard, ve a "Email Services"
2. Click en "Add New Service"
3. Elige tu proveedor (Gmail, Outlook, etc.)
4. Conecta tu cuenta de email
5. Anota el **Service ID** que se genera

### 3. Crear un template de email
1. Ve a "Email Templates"
2. Click en "Create New Template"
3. Configura tu template con estas variables:
   ```
   From: {{from_name}} <{{from_email}}>
   To: direzmas@gmail.com (o tu email)
   Subject: {{subject}}
   
   Mensaje de contacto desde tu portfolio:
   
   Nombre: {{from_name}}
   Email: {{from_email}}
   Asunto: {{subject}}
   
   Mensaje:
   {{message}}
   ```
4. Anota el **Template ID** que se genera

### 4. Obtener tu clave pública
1. Ve a "Account" → "General"
2. Copia tu **Public Key**

### 5. Configurar las variables de entorno
Copia el archivo `.env.example` a `.env`:
```bash
cp .env.example .env
```

Edita el archivo `.env` y reemplaza los valores con tus credenciales de EmailJS:

```bash
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx     # Tu Service ID
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx   # Tu Template ID
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxx # Tu Public Key
VITE_EMAILJS_TO_EMAIL=tu-email@ejemplo.com  # Tu email de destino
```

**¡IMPORTANTE!** El archivo `.env` no debe subirse a Git ya que contiene información sensible. Está incluido en `.gitignore`.

**Nota sobre Vite:** Las variables de entorno en Vite deben tener el prefijo `VITE_` para estar disponibles en el lado del cliente. Por eso usamos `VITE_EMAILJS_SERVICE_ID`, etc.

### 6. Ejemplo de template HTML
Si quieres un template más elegante, puedes usar HTML:

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <h2 style="color: #333;">Nuevo mensaje de contacto</h2>
    
    <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Nombre:</strong> {{from_name}}</p>
        <p><strong>Email:</strong> {{from_email}}</p>
        <p><strong>Asunto:</strong> {{subject}}</p>
    </div>
    
    <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h3 style="color: #555;">Mensaje:</h3>
        <p style="line-height: 1.6;">{{message}}</p>
    </div>
    
    <p style="color: #888; font-size: 12px; margin-top: 30px;">
        Este mensaje fue enviado desde tu portfolio web.
    </p>
</div>
```

### 6. Verificar la configuración
El sistema validará automáticamente que todas las variables de entorno necesarias estén configuradas. Si falta alguna, verás un error específico en la consola.

### 7. Testear la configuración
Una vez configurado todo, prueba enviando un mensaje desde tu formulario de contacto.

### Límites del plan gratuito
- 200 emails por mes
- 50 KB por email
- Perfecto para un portfolio personal

### Solución de problemas comunes
1. **Error 401**: Verifica tu Public Key
2. **Error 404**: Verifica Service ID y Template ID
3. **Emails no llegan**: Revisa tu carpeta de spam
4. **CORS errors**: EmailJS maneja CORS automáticamente