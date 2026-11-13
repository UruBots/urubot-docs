---
sidebar_position: 2
nivel: inicial
areas:
  - Software
  - Git
  - Formación
estado: borrador
---

# Ruta formativa: Git y GitHub desde cero

Git es la herramienta que usamos en UruBots para registrar los cambios en el código y trabajar en equipo sin pisarnos el trabajo. GitHub es la plataforma en la nube donde alojamos esos repositorios.

Este curso corto te enseña los conceptos esenciales y te permite realizar tu primera práctica tanto desde una computadora como desde tu celular.

---

## Ficha del curso

- **Objetivo:** Comprender qué son repositorios, ramas, commits y pull requests mediante una práctica real sin tocar código de producción.
- **Nivel:** Principiante / Inicial.
- **Dispositivo:** Celular o computadora con navegador web.
- **Tiempo estimado:** 60 a 120 minutos.
- **Materiales oficiales:**
  - [GitHub Skills](https://skills.github.com/): ejercicios interactivos oficiales.
  - [Documentación oficial de GitHub](https://docs.github.com/): guías de referencia.
  - [Libro oficial Pro Git (gratuito)](https://git-scm.com/book): lectura de profundización.

---

## Unidades temáticas

### Unidad 1: ¿Por qué usamos Git?
En lugar de enviarnos archivos como `robot_final_v2_este_si.py`, Git guarda una bitácora precisa de cada modificación: quién la hizo, cuándo y por qué. Cada punto en el tiempo se llama **commit**.

### Unidad 2: Conceptos fundamentales
- **Repositorio (Repo):** La carpeta del proyecto controlada por Git.
- **Commit:** Una foto o paquete de cambios con un mensaje que explica qué se modificó.
- **Rama (Branch):** Un camino paralelo para probar cambios sin romper la versión principal (`main`).
- **Pull Request (PR):** Una propuesta para integrar los cambios de una rama a otra, permitiendo que otros miembros revisen el código antes de mezclarlo.

### Unidad 3: Práctica 100% desde el celular
Si no tenés computadora disponible hoy, podés hacer la práctica completa desde el navegador de tu celular:
1. Iniciá sesión en [GitHub](https://github.com/).
2. Creá un repositorio público nuevo llamado `mi-practica-urubots` con un archivo `README.md` inicial.
3. Editá el archivo `README.md` directamente desde el navegador agregando una frase con lo que esperás aprender en UruBots.
4. Hacé commit del cambio con un mensaje claro (por ejemplo: `docs: agregar mis objetivos en el README`).
5. Creá una rama nueva llamada `mi-primera-rama` y agregá un archivo llamado `notas.md`.

### Unidad 4: Práctica desde computadora (opcional o complementaria)
Si estás en una PC con Git instalado:
1. Cloná tu repositorio de práctica:
   ```bash
   git clone https://github.com/TU_USUARIO/mi-practica-urubots.git
   cd mi-practica-urubots
   ```
2. Creá y cambiate a una rama nueva:
   ```bash
   git checkout -b prueba-local
   ```
3. Modificá un archivo y prepará los cambios:
   ```bash
   git add README.md
   git commit -m "docs: actualizar informacion desde mi terminal"
   ```
4. Subí la rama a GitHub:
   ```bash
   git push -u origin prueba-local
   ```

### Unidad 5: Abrir un Pull Request
En la página de tu repositorio en GitHub, hacé clic en **Compare & pull request** para proponer mezclar tu rama en `main`. Describí brevemente los cambios y completá el ejercicio.

---

## Entregable

Para validar esta ruta, copiá el enlace de tu repositorio o Pull Request de práctica y pegalo en la tarea correspondiente del tablero Deck.

---

## Criterio de finalización

Un mentor o mentora revisará tu entrega comprobando que:
1. El repositorio de práctica exista y tenga al menos dos commits con mensajes descriptivos.
2. Se haya creado al menos una rama independiente.
3. No contenga archivos confidenciales, contraseñas ni código de robots reales.
4. Expliques brevemente en la tarea qué aprendiste sobre commits y ramas.

---

> ⚠️ Pendiente de completar por el equipo: organización oficial de GitHub de UruBots y procedimiento de invitación para integrantes nuevos.
