---
sidebar_position: 1
---

# Template: Task suitable for a new student

This template defines the standard structure for creating microtasks and training tasks in **Nextcloud Deck**.

---

## Standard task format (YAML / Deck)

```yaml
id: FORMACION-001
area: Autonomous cars
level: Beginner
title: My first contribution with GitHub
objective: Understand branches, commits and pull requests without touching production code.
prerequisites:
  - Have your own GitHub account or lab access to create one.
materials:
  - https://skills.github.com/
  - https://docs.github.com/
required_resources: Phone or lab computer
estimated_effort: 60-120 minutes
deliverable: Link to a practice repository and a brief explanation of what was learned.
review: Mentor verifies link, explanation and license compliance.
safety: Independent practice repository; don't touch production databases or robots.
```

---

## Field explanations

- **id:** Unique code to identify the task (for example: `AUTO-012`, `ROS-003`).
- **area:** Responsible project or technical area (`Autonomous cars`, `RoboCup @Home`, `Mobile robotics`, `General software`).
- **level:** Indicative difficulty (`Beginner`, `Intermediate`, `Advanced`).
- **title:** Clear, short, action-oriented name.
- **objective:** What skill or concept is to be acquired by completing it.
- **prerequisites:** Minimum knowledge or access needed before starting.
- **materials:** Links to tutorials or official reference documentation.
- **required_resources:** Whether it needs a powerful PC, a lab computer, or can be solved 100% from a phone.
- **estimated_effort:** Indicative time range (e.g. 30-60 minutes, 2-4 hours).
- **deliverable:** What concrete evidence the student must attach in the Deck comments (repo link, screenshot, text file).
- **review:** What criteria the mentor will verify to mark the task as completed.
- **safety:** Safety warnings to avoid putting real hardware or production environments at risk.

---

> ⚠️ Pending completion by the team: official list of area labels and standardized colors on the Nextcloud Deck cards.
