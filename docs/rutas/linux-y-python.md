---
sidebar_position: 3
nivel: inicial
areas:
  - Software
  - Linux
  - Python
  - Formación
estado: borrador
---

# Ruta formativa: Fundamentos de Linux y Python

La gran mayoría de los sistemas robóticos y herramientas de desarrollo modernas corren sobre sistemas operativos **GNU/Linux** (particularmente Ubuntu) y se programan en **Python** o **C++**.

Esta ruta te enseña a no tenerle miedo a la terminal y a escribir tus primeros scripts de automatización.

---

## Ficha de la ruta

- **Objetivo:** Perder el miedo a la línea de comandos de Linux y escribir scripts básicos en Python para resolver tareas cotidianas.
- **Nivel:** Principiante / Inicial.
- **Materiales oficiales:**
  - [Tutoriales de línea de comandos de Ubuntu](https://ubuntu.com/tutorials): guías introductorias oficiales para terminal.
  - [Tutorial oficial de Python 3](https://docs.python.org/3/tutorial/): la referencia oficial y completa del lenguaje.

---

## Parte 1: La terminal de Linux

La terminal permite interactuar con la computadora mediante texto en lugar de ventanas gráficas. Es indispensable para trabajar en robots y servidores remotos.

### Comandos indispensables
- `pwd`: Muestra la ruta del directorio en el que estás parado.
- `ls -la`: Lista los archivos y carpetas del directorio actual, incluyendo archivos ocultos y permisos.
- `cd nombre_carpeta`: Cambia al directorio indicado. `cd ..` sube un nivel.
- `mkdir mi_directorio`: Crea una carpeta nueva.
- `cp origen destino`: Copia un archivo o carpeta.
- `mv origen destino`: Mueve o renombra un archivo o carpeta.
- `rm archivo`: Elimina un archivo. ¡Cuidado: en la terminal no hay papelera de reciclaje!
- `cat archivo` / `less archivo`: Muestra el contenido de un archivo de texto.

---

## Parte 2: Python para robótica

Python es el lenguaje preferido para prototipado rápido, visión artificial, scripts de control y nodos de ROS 2.

### Conceptos clave
- **Variables y tipos:** Números, cadenas de texto (`str`), booleanos (`True`/`False`).
- **Colecciones:** Listas (`[1, 2, 3]`) y diccionarios (`{"sensor": "camara", "fps": 30}`).
- **Control de flujo:** Condiciones `if/elif/else` y bucles `for elemento in lista:` o `while condicion:`.
- **Funciones:** Bloques reutilizables con parámetros y retorno de valores (`def calcular_distancia(x, y):`).
- **Entornos virtuales (`venv`):** Crean un espacio aislado para instalar dependencias de Python sin ensuciar el sistema operativo:
  ```bash
  python3 -m venv mi_entorno
  source mi_entorno/bin/activate
  ```

---

## Práctica recomendada

1. Si tenés PC con Linux o macOS, abrí la terminal. Si estás en Windows, podés usar WSL (Subsistema de Windows para Linux).
2. Si estás desde celular, podés usar una app de terminal como Termux o practicar en emuladores web educativos de Python.
3. Creá una carpeta llamada `practica_urubots`.
4. Dentro de la carpeta, creá un script llamado `saludo.py` que imprima tu nombre y una lista de tres áreas de la robótica que te interesen.
5. Ejecutá el script con `python3 saludo.py`.

---

## Entregable y criterio de finalización

Subí tu archivo `saludo.py` o compartí un resumen de los comandos ejecutados en la tarea correspondiente de Deck.

Un mentor comprobará que:
1. El script ejecute correctamente sin errores de sintaxis.
2. Comprendas la diferencia entre la terminal del sistema y el intérprete de Python.
3. Sepas explicar qué hace cada comando utilizado.

---

> ⚠️ Pendiente de completar por el equipo: versión recomendada de Ubuntu (ej. 22.04 LTS o 24.04 LTS) instalada en las máquinas del laboratorio.
