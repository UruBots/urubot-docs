---
sidebar_position: 4
nivel: general
areas:
  - Gestión
  - Decisiones
  - Plantillas
estado: borrador
---

# Plantilla: Acta de decisiones técnicas (ADR ligero)

Cuando el equipo toma una decisión técnica o de organización importante (por ejemplo: cambiar una versión de software, elegir un sensor o definir un protocolo), se registra un acta de decisión para que en el futuro sepamos por qué se eligió ese camino.

---

```markdown
# Acta de Decisión: [Título corto de la decisión]

- **Fecha:** [AAAA-MM-DD]
- **Área afectada:** [Autos autónomos / RoboCup @Home / Software / Infraestructura]
- **Participantes del acuerdo:** [Áreas o roles involucrados]
- **Estado:** [Propuesta / Aprobada / Descartada / Reemplazada]

---

## 1. Contexto y problema
¿Cuál es la situación actual y qué necesidad o problema queremos resolver?
*Ejemplo:* Necesitamos definir qué biblioteca de visión por computadora usaremos para el auto a escala.

---

## 2. Opciones analizadas
- **Opción A:** [Descripción breve, ventajas y desventajas].
- **Opción B:** [Descripción breve, ventajas y desventajas].

---

## 3. Decisión acordada
¿Qué opción se seleccionó y por qué motivos principales?
*Ejemplo:* Se elige la Opción A porque cuenta con soporte nativo en Ubuntu y documentación comunitaria abundante.

---

## 4. Impacto y consecuencias
- **Efectos positivos:** Mayor facilidad de aprendizaje para ingresantes.
- **Riesgos o costos:** Requiere actualizar los scripts existentes de prueba.

---

## 5. Tareas derivadas
- [ ] Crear tarea en Deck para actualizar documentación de instalación.
- [ ] Comunicar la decisión en la próxima reunión semanal.
```

---

> ⚠️ Pendiente de completar por el equipo: quórum mínimo requerido y proceso formal para validar decisiones de arquitectura técnica en UruBots.
