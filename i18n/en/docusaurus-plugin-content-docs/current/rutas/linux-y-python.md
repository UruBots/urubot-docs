---
sidebar_position: 3
---

# Learning path: Linux and Python fundamentals

The vast majority of modern robotic systems and development tools run on **GNU/Linux** operating systems (particularly Ubuntu) and are programmed in **Python** or **C++**.

This path teaches you not to be afraid of the terminal and to write your first automation scripts.

---

## Path card

- **Goal:** Lose the fear of the Linux command line and write basic Python scripts to solve everyday tasks.
- **Level:** Beginner / Initial.
- **Official materials:**
  - [Ubuntu command line tutorials](https://ubuntu.com/tutorials): official introductory terminal guides.
  - [Official Python 3 tutorial](https://docs.python.org/3/tutorial/): the complete official language reference.

---

## Part 1: The Linux terminal

The terminal lets you interact with the computer using text instead of graphical windows. It's essential for working on robots and remote servers.

### Essential commands
- `pwd`: Shows the path of the directory you're in.
- `ls -la`: Lists the files and folders in the current directory, including hidden files and permissions.
- `cd folder_name`: Changes to the indicated directory. `cd ..` goes up one level.
- `mkdir my_directory`: Creates a new folder.
- `cp source destination`: Copies a file or folder.
- `mv source destination`: Moves or renames a file or folder.
- `rm file`: Deletes a file. Careful: there's no recycle bin in the terminal!
- `cat file` / `less file`: Shows the content of a text file.

---

## Part 2: Python for robotics

Python is the preferred language for rapid prototyping, computer vision, control scripts and ROS 2 nodes.

### Key concepts
- **Variables and types:** Numbers, strings (`str`), booleans (`True`/`False`).
- **Collections:** Lists (`[1, 2, 3]`) and dictionaries (`{"sensor": "camera", "fps": 30}`).
- **Control flow:** `if/elif/else` conditions and `for item in list:` or `while condition:` loops.
- **Functions:** Reusable blocks with parameters and return values (`def calculate_distance(x, y):`).
- **Virtual environments (`venv`):** Create an isolated space to install Python dependencies without polluting the operating system:
  ```bash
  python3 -m venv my_environment
  source my_environment/bin/activate
  ```

---

## Recommended practice

1. If you have a Linux or macOS PC, open the terminal. On Windows, you can use WSL (Windows Subsystem for Linux).
2. From your phone, you can use a terminal app like Termux or practice in educational web Python emulators.
3. Create a folder called `practica_urubots`.
4. Inside the folder, create a script called `saludo.py` that prints your name and a list of three robotics areas you're interested in.
5. Run the script with `python3 saludo.py`.

---

## Deliverable and completion criteria

Upload your `saludo.py` file or share a summary of the commands you ran in the corresponding Deck task.

A mentor will check that:
1. The script runs correctly with no syntax errors.
2. You understand the difference between the system terminal and the Python interpreter.
3. You can explain what each command used does.

---

> ⚠️ Pending completion by the team: recommended Ubuntu version (e.g. 22.04 LTS or 24.04 LTS) installed on the lab machines.
