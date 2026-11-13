---
sidebar_position: 7
nivel: inicial
areas:
  - Metodología
  - Documentación
  - Investigación
  - Formación
estado: borrador
---

# Ruta formativa: Cómo documentar un experimento y aportar conocimiento

En robótica, las pruebas en simulador y en hardware real fallan con frecuencia. Eso es normal y parte del proceso de ingeniería. Lo grave no es que falle una prueba, sino no anotar qué pasó y perder días tratando de recordar el error.

Documentar de forma rigurosa y clara permite que cualquier compañero pueda reproducir tu experimento y construir sobre tu avance.

---

## Ficha de la ruta

- **Objetivo:** Adquirir el hábito de redactar bitácoras y reportes de prueba reproducibles sin omitir detalles críticos ni datos de contexto.
- **Nivel:** Inicial / General.
- **Materiales de apoyo:** [Plantilla de recurso compartido](../plantillas/plantilla-recurso.md).

---

## La anatomía de un buen reporte técnico

Cada vez que pruebes un algoritmo, un sensor o una rutina de navegación, estructurá tus notas en estas secciones clave:

### 1. Objetivo claro
¿Qué estabas intentando comprobar?
*Ejemplo:* «Verificar si el algoritmo de seguimiento de línea mantiene el auto dentro de la pista a 0.3 m/s».

### 2. Condiciones y entorno de prueba
Los robots cambian de comportamiento según el entorno físico:
- **Hardware:** Modelo exacto de placa, sensores conectados, nivel de carga de la batería (voltaje aproximado).
- **Software:** Rama de Git probada, versión de paquetes, comandos ejecutados.
- **Entorno:** Iluminación (natural/artificial), tipo de piso, obstáculos presentes.

### 3. Procedimiento paso a paso
Describí los pasos de forma que otra persona pueda repetirlos exactamente igual en el laboratorio.

### 4. Resultados observados (con evidencia)
- ¿Qué funcionó y qué falló?
- Registrá datos concretos: tiempos, distancias, capturas de pantalla de terminal o fragmentos de logs relevantes.

### 5. El valor de documentar los fallos
Nunca escondas un resultado negativo. Un reporte que diga «probamos la librería X y no funcionó porque no soporta el sensor Y» le ahorra semanas de frustración a todo el equipo.

### 6. Conclusiones y próximos pasos
¿Qué hipótesis se confirma o se descarta? ¿Cuál es el siguiente paso lógico a probar?

---

## Entregable y criterio de finalización

Escribí una bitácora breve (de 1 página) sobre una prueba que hayas hecho (puede ser la instalación de un paquete en tu PC, un script sencillo de Python que probaste, o una simulación).

Un mentor comprobará que:
1. Incluya objetivo, procedimiento, resultado y conclusión.
2. La redacción sea clara y permita reproducir los pasos.
3. No contenga contraseñas ni datos privados.

---

> ⚠️ Pendiente de completar por el equipo: repositorio o carpeta compartida institucional donde se archivan las bitácoras y reportes de experimentos oficiales.
