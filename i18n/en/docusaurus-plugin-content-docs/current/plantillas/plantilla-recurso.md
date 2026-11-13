---
sidebar_position: 2
---

# Template: Shared resource record

Every time a member proposes a book, manual, tutorial, video or code for the UruBots collaborative library, a structured technical record is registered.

---

## Record structure (in plain language)

| Field | Meaning and format | Example |
|---|---|---|
| **Identifier (id)** | Unique code assigned by the system (UUID). | `rec-7b3f-42a1` |
| **Title** | Clear, descriptive name of the document or resource. | *Kinematics guide for differential robots* |
| **Resource type** | Content format (`pdf`, `markdown`, `web_link`, `video`, `code`). | `pdf` |
| **Language** | Main language code (`es`, `en`). | `es` |
| **Origin** | Where it comes from (`own_work`, `official_source`, `authorized_upload`). | `official_source` |
| **Source link** | Direct URL to the official source (if it's a web resource). | `https://docs.ros.org/` |
| **Checksum (SHA-256)** | Cryptographic fingerprint to verify file integrity. | `e3b0c44298fc1c149afbf4c8...` |
| **Version** | Integer version number of the material. | `1` |
| **Thematic areas** | List of linked robotics areas (`autos`, `athome`, `turtlebot`, `software`). | `["turtlebot", "software"]` |
| **Level** | Difficulty level (`initial`, `intermediate`, `advanced`). | `initial` |
| **Proposed tags** | Keywords to make searching easier. | `["ros2", "motors", "kinematics"]` |
| **Status** | Lifecycle phase (`draft`, `proposed`, `pending_review`, `published`, `obsolete`). | `pending_review` |
| **Visibility** | Who can access it (`private`, `team`, `public`). | `team` |
| **Upload author** | Identifier of the user who proposed the resource. | `authenticated-user` |
| **Assigned reviewer** | Mentor or editor responsible for technical verification. | `assigned-mentor` |
| **Preliminary summary** | Brief description of the content and what it's for. | *Explains how to convert velocities to motor pulses.* |
| **Sources / License** | Usage license (CC-BY, MIT, Apache, GNU AGPL, etc.). | `CC-BY-4.0` |

---

## Resource lifecycle

1. **Draft / Proposed:** The student uploads or proposes the material via the form or initial upload.
2. **Pending review:** A mentor verifies it doesn't violate copyright, contains no secrets and is relevant.
3. **Published:** The editor approves the record and the resource becomes available in the library search.
4. **Obsolete:** If the technology becomes outdated, it's archived while keeping its history.

---

> ⚠️ Pending completion by the team: accepted licensing criteria for materials produced internally by UruBots students.
