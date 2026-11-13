---
sidebar_position: 6
---

# Learning path: RoboCup @Home - Getting to know the platform

**RoboCup @Home** is one of the most important international service robotics leagues. The challenge is to develop autonomous robots capable of assisting people in everyday home environments (houses, offices, restaurants).

---

## ⚠️ Fundamental warning about this portal

> **Important:** This space (UruBots Portal) is a document management, coordination and collaborative learning platform. **The UruBots Portal does NOT control, connect to or directly modify the software or hardware of any physical robot.**
> The technical repositories mentioned below are consulted **in read-only mode** for architectural study purposes only.

---

## Technical reference repositories (read-only)

To learn about the software implementation used on the Robbie platform:
- Robot reference repository: [ShiiSuii/robbie-at-home](https://github.com/ShiiSuii/robbie-at-home) (read-only).
- Base workspace: perception, skills and navigation packages grouped under the `base_athome` structure.

---

## The four major @Home subsystems

A domestic service robot integrates multiple disciplines:

### 1. Perception
The robot must understand what's happening around it:
- **Computer vision:** Detection and classification of everyday objects (glasses, bottles, cutlery), face recognition and human pose estimation.
- **Hearing:** Audio capture with microphones and sound direction-of-arrival detection.

### 2. Navigation and mapping
The robot must move around homes and offices without bumping into people or furniture:
- **SLAM (Simultaneous Localization and Mapping):** Builds the environment map and knows where it is at all times.
- **Path planning:** Generates safe, dynamic routes while avoiding moving obstacles.

### 3. Manipulation
Lets the robot physically interact with its environment:
- **Robotic arm and gripper:** Forward and inverse kinematics to reach objects on tables or shelves.
- **Grasping strategies:** Calculate the right orientation and force to pick up an object without dropping or breaking it.

### 4. Human-Robot Interaction (HRI)
How the robot communicates with humans:
- **Speech recognition and synthesis (TTS/STT):** Understand spoken commands and respond verbally.
- **Dialogue and complex task management:** Coordinate service missions (example: greet a guest, guide them to a couch and serve them a drink).

---

## Suggested deliverable

Choose one of the four subsystems (Perception, Navigation, Manipulation or HRI), review the general architecture in the reference repository and write a one-page summary explaining what it does and what technical challenges it presents.

---

## Completion criteria

A mentor will evaluate:
1. General understanding of the RoboCup @Home league and its subsystems.
2. Explicit recognition of the portal's limits (it doesn't interact with real robots).
3. Quality of the technical summary of the chosen subsystem.

---

> ⚠️ Pending completion by the team: current league rulebook, specific participation category (OPL, DSPL or SSPL) and list of mentors per subsystem.
