---
sidebar_position: 6
nivel: inicial
areas:
  - RoboCup @Home
  - Robótica de servicio
  - Percepción
  - Formación
estado: borrador
---

# Ruta formativa: RoboCup @Home - Conocer la plataforma

**RoboCup @Home** es una de las ligas internacionales más importantes de robótica de servicio. El desafío consiste en desarrollar robots autónomos capaces de asistir a personas en entornos domésticos y cotidianos (hogares, oficinas, restaurantes).

---

## ⚠️ Advertencia fundamental sobre este portal

> **Importante:** Este espacio (Portal UruBots) es una plataforma de gestión documental, coordinación y aprendizaje colaborativo. **El Portal UruBots NO controla, no conecta ni modifica directamente el software ni el hardware de ningún robot físico.**
> Los repositorios técnicos mencionados a continuación se consultan **únicamente en modo lectura** con fines de estudio arquitectónico.

---

## Repositorios de referencia técnica (solo lectura)

Para conocer la implementación de software utilizada en la plataforma Robbie:
- Repositorio de referencia del robot: [ShiiSuii/robbie-at-home](https://github.com/ShiiSuii/robbie-at-home) (modo lectura).
- Espacio de trabajo base: paquetes de percepción, habilidades y navegación agrupados bajo la estructura de `base_athome`.

---

## Los cuatro grandes subsistemas de @Home

Un robot de servicio doméstico integra múltiples disciplinas:

### 1. Percepción
El robot debe entender lo que ocurre a su alrededor:
- **Visión por computadora:** Detección y clasificación de objetos cotidianos (vasos, botellas, cubiertos), reconocimiento de caras y estimación de poses humanas.
- **Audición:** Captura de audio con micrófonos y detección de dirección de llegada del sonido.

### 2. Navegación y mapeo
El robot debe moverse en casas y oficinas sin chocar personas ni muebles:
- **SLAM (Mapeo y Localización Simultáneos):** Construye el mapa del entorno y sabe dónde está ubicado en todo momento.
- **Planificación de trayectorias:** Genera rutas seguras y dinámicas esquivando obstáculos en movimiento.

### 3. Manipulación
Permite al robot interactuar físicamente con su entorno:
- **Brazo robótico y pinza (gripper):** Cinemática directa e inversa para alcanzar objetos en mesas o estantes.
- **Estrategias de agarre (grasping):** Calcular la orientación y fuerza adecuada para levantar un objeto sin tirarlo ni romperlo.

### 4. Interacción Persona-Robot (HRI)
Cómo se comunica el robot con los humanos:
- **Reconocimiento y síntesis de voz (TTS/STT):** Entender órdenes habladas y responder verbalmente.
- **Gestión del diálogo y tareas complejas:** Coordinar misiones de servicio (ejemplo: recibir a un invitado, guiarlo a un sillón y servirle una bebida).

---

## Entregable sugerido

Elegí uno de los cuatro subsistemas (Percepción, Navegación, Manipulación o HRI), revisá la arquitectura general en el repositorio de referencia y escribí un resumen de una página explicando qué función cumple y qué desafíos técnicos presenta.

---

## Criterio de finalización

Un mentor evaluará:
1. Comprensión general de la liga RoboCup @Home y sus subsistemas.
2. Reconocimiento explícito de los límites del portal (no interactúa con robots reales).
3. Calidad del resumen técnico del subsistema seleccionado.

---

> ⚠️ Pendiente de completar por el equipo: reglamento de la liga vigente, categoría específica de participación (OPL, DSPL o SSPL) y lista de mentores por subsistema.
