---
sidebar_position: 1
nivel: general
areas:
  - Gestión
  - Deck
  - Plantillas
estado: borrador
---

# Plantilla: Tarea apta para un estudiante nuevo

Esta plantilla define la estructura estándar para crear microtareas y tareas de formación en **Nextcloud Deck**.

---

## Formato estándar de tarea (YAML / Deck)

```yaml
id: FORMACION-001
area: Autos autónomos
nivel: Principiante
titulo: Mi primer aporte con GitHub
objetivo: Comprender ramas, commits y pull requests sin tocar código de producción.
prerrequisitos:
  - Tener una cuenta en GitHub propia o acceso al laboratorio para crearla.
materiales:
  - https://skills.github.com/
  - https://docs.github.com/
recursos_requeridos: Celular o computadora del laboratorio
esfuerzo_estimado: 60-120 minutos
entregable: Enlace a un repositorio de práctica y breve explicación de lo aprendido.
revision: Mentor verifica enlace, explicación y respeto de licencia.
seguridad: Repositorio de práctica independiente; no tocar bases ni robots en producción.
```

---

## Explicación de los campos

- **id:** Código único para identificar la tarea (por ejemplo: `AUTO-012`, `ROS-003`).
- **area:** Proyecto o área técnica responsable (`Autos autónomos`, `RoboCup @Home`, `Robótica móvil`, `Software general`).
- **nivel:** Dificultad orientativa (`Principiante`, `Intermedio`, `Avanzado`).
- **titulo:** Nombre claro, breve y orientado a la acción.
- **objetivo:** Qué habilidad o concepto se busca adquirir al completarla.
- **prerrequisitos:** Conocimientos o accesos mínimos necesarios antes de empezar.
- **materiales:** Enlaces a tutoriales o documentación oficial de referencia.
- **recursos_requeridos:** Si requiere PC potente, computadora del lab o si se puede resolver 100% desde celular.
- **esfuerzo_estimado:** Rango orientativo de tiempo (ejemplo: 30-60 minutos, 2-4 horas).
- **entregable:** Qué evidencia concreta debe adjuntar el estudiante en los comentarios de Deck (enlace a repo, captura, archivo de texto).
- **revision:** Qué criterios verificará el mentor para marcar la tarea como completada.
- **seguridad:** Advertencias de seguridad para no poner en riesgo hardware real ni entornos de producción.

---

> ⚠️ Pendiente de completar por el equipo: lista oficial de etiquetas de área y colores estandarizados en las tarjetas de Nextcloud Deck.
