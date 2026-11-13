---
sidebar_position: 2
---

# Learning path: Git and GitHub from scratch

Git is the tool we use at UruBots to record changes to code and work as a team without stepping on each other's work. GitHub is the cloud platform where we host those repositories.

This short course teaches you the essential concepts and lets you do your first practice from either a computer or your phone.

---

## Course card

- **Goal:** Understand what repositories, branches, commits and pull requests are through a real practice without touching production code.
- **Level:** Beginner / Initial.
- **Device:** Phone or computer with a web browser.
- **Estimated time:** 60 to 120 minutes.
- **Official materials:**
  - [GitHub Skills](https://skills.github.com/): official interactive exercises.
  - [Official GitHub documentation](https://docs.github.com/): reference guides.
  - [Official Pro Git book (free)](https://git-scm.com/book): in-depth reading.

---

## Thematic units

### Unit 1: Why do we use Git?
Instead of sending each other files like `robot_final_v2_this_one.py`, Git keeps a precise log of every change: who made it, when and why. Each point in time is called a **commit**.

### Unit 2: Core concepts
- **Repository (Repo):** The project folder controlled by Git.
- **Commit:** A snapshot or package of changes with a message explaining what was modified.
- **Branch:** A parallel path to test changes without breaking the main version (`main`).
- **Pull Request (PR):** A proposal to integrate changes from one branch into another, letting other members review the code before merging it.

### Unit 3: Practice 100% from your phone
If you don't have a computer available today, you can do the full practice from your phone's browser:
1. Sign in to [GitHub](https://github.com/).
2. Create a new public repository called `mi-practica-urubots` with an initial `README.md` file.
3. Edit the `README.md` file directly in the browser, adding a sentence with what you hope to learn at UruBots.
4. Commit the change with a clear message (for example: `docs: add my goals to the README`).
5. Create a new branch called `mi-primera-rama` and add a file called `notas.md`.

### Unit 4: Practice from a computer (optional or complementary)
If you're on a PC with Git installed:
1. Clone your practice repository:
   ```bash
   git clone https://github.com/YOUR_USER/mi-practica-urubots.git
   cd mi-practica-urubots
   ```
2. Create and switch to a new branch:
   ```bash
   git checkout -b prueba-local
   ```
3. Modify a file and stage the changes:
   ```bash
   git add README.md
   git commit -m "docs: update info from my terminal"
   ```
4. Push the branch to GitHub:
   ```bash
   git push -u origin prueba-local
   ```

### Unit 5: Open a Pull Request
On your repository's page on GitHub, click **Compare & pull request** to propose merging your branch into `main`. Briefly describe the changes and complete the exercise.

---

## Deliverable

To validate this path, copy the link to your practice repository or Pull Request and paste it into the corresponding task on the Deck board.

---

## Completion criteria

A mentor will review your delivery, checking that:
1. The practice repository exists and has at least two commits with descriptive messages.
2. At least one independent branch was created.
3. It contains no confidential files, passwords or real robot code.
4. You briefly explain in the task what you learned about commits and branches.

---

> ⚠️ Pending completion by the team: UruBots' official GitHub organization and the invitation process for new members.
