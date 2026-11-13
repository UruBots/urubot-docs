---
sidebar_position: 2
nivel: general
areas:
  - Biblioteca
  - Plantillas
  - Gestión
estado: borrador
---

# Plantilla: Ficha de recurso compartido

Cada vez que un integrante propone un libro, manual, tutorial, video o código para la biblioteca colaborativa de UruBots, se registra una ficha técnica estructurada.

---

## Estructura de la ficha (en lenguaje humano)

| Campo | Significado y formato | Ejemplo |
|---|---|---|
| **Identificador (id)** | Código único asignado por el sistema (UUID). | `rec-7b3f-42a1` |
| **Título** | Nombre claro y descriptivo del documento o recurso. | *Guía de cinemática para robots diferenciales* |
| **Tipo de recurso** | Formato del contenido (`pdf`, `markdown`, `enlace_web`, `video`, `codigo`). | `pdf` |
| **Idioma** | Código de idioma principal (`es`, `en`). | `es` |
| **Origen** | De dónde proviene (`elaboracion_propia`, `fuente_oficial`, `subida_autorizada`). | `fuente_oficial` |
| **Enlace de origen** | URL directa a la fuente oficial (si es recurso web). | `https://docs.ros.org/` |
| **Checksum (SHA-256)** | Huella digital criptográfica para verificar integridad de archivos. | `e3b0c44298fc1c149afbf4c8...` |
| **Versión** | Número entero de versión del material. | `1` |
| **Áreas temáticas** | Lista de áreas de robótica vinculadas (`autos`, `athome`, `turtlebot`, `software`). | `["turtlebot", "software"]` |
| **Nivel** | Nivel de dificultad (`inicial`, `intermedio`, `avanzado`). | `inicial` |
| **Etiquetas propuestas** | Palabras clave para facilitar la búsqueda. | `["ros2", "motores", "cinematica"]` |
| **Estado** | Fase del ciclo de vida (`borrador`, `propuesto`, `pendiente_revision`, `publicado`, `obsoleto`). | `pendiente_revision` |
| **Visibilidad** | Quién puede acceder (`privado`, `equipo`, `publico`). | `equipo` |
| **Autor de subida** | Identificador del usuario que propuso el recurso. | `usuario-autenticado` |
| **Revisor asignado** | Mentor o editor responsable de la verificación técnica. | `mentor-asignado` |
| **Resumen preliminar** | Breve descripción del contenido y para qué sirve al equipo. | *Explica cómo convertir velocidades a pulsos de motor.* |
| **Fuentes / Licencia** | Licencia de uso (CC-BY, MIT, Apache, GNU AGPL, etc.). | `CC-BY-4.0` |

---

## Ciclo de vida del recurso

1. **Borrador / Propuesto:** El estudiante carga o propone el material mediante el formulario o subida inicial.
2. **Pendiente de revisión:** Un mentor verifica que no viole derechos de autor, no contenga secretos y sea relevante.
3. **Publicado:** El editor aprueba la ficha y el recurso queda disponible en el buscador de la biblioteca.
4. **Obsoleto:** Si la tecnología queda desactualizada, se archiva manteniendo el historial.

---

> ⚠️ Pendiente de completar por el equipo: criterios de licenciamiento aceptados para materiales producidos internamente por estudiantes de UruBots.
