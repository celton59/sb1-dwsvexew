---
title: "Introducción a HTML y CSS"
description: "Aprende los fundamentos del desarrollo web desde cero con esta guía completa de HTML y CSS para principiantes"
pubDate: 2024-03-21
category: "tutorial"
tags: ["html", "css", "web"]
image: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=800&h=400&fit=crop"
draft: false
---

# Introducción a HTML y CSS

El desarrollo web moderno se basa en dos pilares fundamentales: HTML para la estructura y CSS para el diseño. En esta guía completa, aprenderás los conceptos básicos de ambas tecnologías y cómo trabajar con ellas.

## ¿Qué es HTML?

HTML (HyperText Markup Language) es el lenguaje estándar para crear páginas web. Define la estructura y el contenido de tu sitio web mediante elementos y etiquetas.

### Estructura básica de un documento HTML

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi primera página web</title>
</head>
<body>
    <h1>¡Hola, mundo!</h1>
    <p>Este es mi primer documento HTML.</p>
</body>
</html>
```

### Elementos HTML esenciales

Los elementos más comunes que necesitarás conocer son:

- **Encabezados**: `<h1>` a `<h6>`
- **Párrafos**: `<p>`
- **Enlaces**: `<a href="url">texto</a>`
- **Imágenes**: `<img src="imagen.jpg" alt="descripción">`
- **Listas**: `<ul>`, `<ol>`, `<li>`
- **Divisiones**: `<div>`, `<span>`

## Introducción a CSS

CSS (Cascading Style Sheets) es el lenguaje que usamos para estilizar y dar formato a nuestros documentos HTML.

### Formas de incluir CSS

1. **CSS interno** (en el head del documento):
```html
<style>
    body {
        background-color: #f0f0f0;
        font-family: Arial, sans-serif;
    }
</style>
```

2. **CSS externo** (en un archivo separado):
```html
<link rel="stylesheet" href="styles.css">
```

3. **CSS en línea** (directamente en elementos):
```html
<p style="color: blue;">Texto azul</p>
```

### Selectores CSS básicos

Los selectores nos permiten apuntar a elementos específicos:

```css
/* Selector de elemento */
p {
    color: #333;
}

/* Selector de clase */
.destacado {
    background-color: yellow;
}

/* Selector de ID */
#header {
    background-color: black;
    color: white;
}
```

## Propiedades CSS fundamentales

### Colores y fondos
```css
.elemento {
    color: #ff0000;
    background-color: #f0f0f0;
    opacity: 0.8;
}
```

### Tipografía
```css
.texto {
    font-family: 'Arial', sans-serif;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.5;
}
```

### Modelo de caja
```css
.caja {
    margin: 10px;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
```

## Diseño responsive

El diseño responsive es crucial para que tu sitio web se vea bien en todos los dispositivos.

### Media Queries
```css
/* Móviles */
@media (max-width: 768px) {
    .contenedor {
        width: 100%;
        padding: 10px;
    }
}

/* Tablets */
@media (min-width: 769px) and (max-width: 1024px) {
    .contenedor {
        width: 90%;
        margin: auto;
    }
}
```

## Mejores prácticas

1. **Mantén tu código organizado**
   - Usa indentación consistente
   - Agrupa estilos relacionados
   - Comenta tu código cuando sea necesario

2. **Optimiza el rendimiento**
   - Minimiza el uso de !important
   - Evita selectores demasiado específicos
   - Combina archivos CSS en producción

3. **Accesibilidad**
   - Usa contraste adecuado en colores
   - Incluye textos alternativos en imágenes
   - Estructura tu HTML semánticamente

## Conclusión

HTML y CSS son las bases del desarrollo web moderno. Con estos fundamentos, podrás crear sitios web atractivos y funcionales. Recuerda que la práctica es clave: experimenta con diferentes propiedades y valores para entender mejor cómo funcionan.

### Recursos adicionales

- [MDN Web Docs](https://developer.mozilla.org/)
- [W3Schools](https://www.w3schools.com/)
- [CSS-Tricks](https://css-tricks.com/)

¡Ahora es tu turno! Empieza a practicar creando tu primera página web con HTML y CSS.