---
sidebar_position: 7
---

# Learning path: How to document an experiment and contribute knowledge

In robotics, tests in simulation and on real hardware fail often. That's normal and part of the engineering process. The serious thing isn't that a test fails, but not writing down what happened and losing days trying to remember the error.

Documenting rigorously and clearly lets any teammate reproduce your experiment and build on your progress.

---

## Path card

- **Goal:** Develop the habit of writing reproducible logs and test reports without omitting critical details or context data.
- **Level:** Initial / General.
- **Support materials:** [Shared resource template](../plantillas/plantilla-recurso.md).

---

## The anatomy of a good technical report

Every time you test an algorithm, a sensor or a navigation routine, structure your notes in these key sections:

### 1. Clear objective
What were you trying to verify?
*Example:* "Verify whether the line-following algorithm keeps the car inside the track at 0.3 m/s".

### 2. Test conditions and environment
Robots change behavior depending on the physical environment:
- **Hardware:** Exact board model, connected sensors, battery charge level (approximate voltage).
- **Software:** Git branch tested, package versions, commands run.
- **Environment:** Lighting (natural/artificial), floor type, obstacles present.

### 3. Step-by-step procedure
Describe the steps so that another person can repeat them exactly the same way in the lab.

### 4. Observed results (with evidence)
- What worked and what failed?
- Record concrete data: times, distances, terminal screenshots or relevant log fragments.

### 5. The value of documenting failures
Never hide a negative result. A report that says "we tested library X and it didn't work because it doesn't support sensor Y" saves the whole team weeks of frustration.

### 6. Conclusions and next steps
Which hypothesis is confirmed or ruled out? What's the next logical step to test?

---

## Deliverable and completion criteria

Write a short log (1 page) about a test you've done (it can be installing a package on your PC, a simple Python script you tested, or a simulation).

A mentor will check that:
1. It includes objective, procedure, result and conclusion.
2. The writing is clear and lets the steps be reproduced.
3. It contains no passwords or private data.

---

> ⚠️ Pending completion by the team: institutional shared repository or folder where the official experiment logs and reports are archived.
