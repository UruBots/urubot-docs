---
sidebar_position: 4
---

# Template: Technical decision record (light ADR)

When the team makes an important technical or organizational decision (for example: changing a software version, choosing a sensor or defining a protocol), a decision record is registered so that in the future we know why that path was chosen.

---

```markdown
# Decision Record: [Short title of the decision]

- **Date:** [YYYY-MM-DD]
- **Affected area:** [Autonomous cars / RoboCup @Home / Software / Infrastructure]
- **Agreement participants:** [Involved areas or roles]
- **Status:** [Proposed / Approved / Rejected / Replaced]

---

## 1. Context and problem
What is the current situation and what need or problem are we trying to solve?
*Example:* We need to define which computer vision library we'll use for the scale car.

---

## 2. Analyzed options
- **Option A:** [Brief description, advantages and disadvantages].
- **Option B:** [Brief description, advantages and disadvantages].

---

## 3. Agreed decision
Which option was selected and for what main reasons?
*Example:* Option A is chosen because it has native Ubuntu support and abundant community documentation.

---

## 4. Impact and consequences
- **Positive effects:** Easier onboarding for newcomers.
- **Risks or costs:** Requires updating the existing test scripts.

---

## 5. Derived tasks
- [ ] Create a Deck task to update the installation documentation.
- [ ] Communicate the decision at the next weekly meeting.
```

---

> ⚠️ Pending completion by the team: minimum required quorum and formal process for validating technical architecture decisions at UruBots.
