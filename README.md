# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

# CSARCH2 Virtual Exhibit Case Study Proposal

## “Computer Architecture is Forever”

## Group Title

**[Insert your group/exhibit title here]**

## Category

**Problem Solving Stories**

## Group Members

| Name       | Role / Responsibility                   |
| ---------- | --------------------------------------- |
| [Member 1] | [e.g., Research Lead / Content Writer]  |
| [Member 2] | [e.g., UI/UX Designer]                  |
| [Member 3] | [e.g., Front-End Developer]             |
| [Member 4] | [e.g., Interactive Component Developer] |
| [Member 5] | [e.g., Documentation / QA]              |

---

## Proposed Exhibit Topic

**[Insert chosen topic here]**
Example format: *Intel Pentium FDIV Bug (1994): How a Tiny Hardware Error Became a Major Computing Crisis*

---

## Topic Theme / Exhibit Concept

Our virtual exhibit will present **[briefly describe the problem-solving story]**. The exhibit will focus on the computer architecture issue, why it mattered, how it was discovered, how it affected users or the industry, and how the problem was addressed.

The exhibit will guide visitors through the story using a museum-style layout with sections such as:

1. **Introduction to the Problem**

   * What happened?
   * When did it happen?
   * Why is it important in computer architecture?

2. **Architecture Background**

   * What hardware/software concept is involved?
   * Which part of computer architecture does the issue relate to?

3. **The Problem / Failure**

   * What went wrong?
   * How was the issue discovered?
   * What made the problem difficult to solve?

4. **Solution and Response**

   * How was the problem fixed or handled?
   * What engineering decisions were made?

5. **Legacy and Lessons Learned**

   * What changed after this event?
   * What can modern computer architecture learn from it?

---

## Objectives of the Exhibit

The proposed virtual exhibit aims to:

* Explain a real-world computer architecture problem in a clear and engaging way.
* Help visitors understand how architecture-level decisions can affect reliability, performance, security, or compatibility.
* Present the historical and technical importance of the chosen problem-solving story.
* Use an interactive component to help users actively explore or test the concept.

---

## Proposed Interactive Element

**Interactive Element Title:** [Insert title here]

**Type of Interaction:**
[Choose one or more: interactive timeline, quiz, simulation, clickable diagram, animation, comparison tool, etc.]

**Description:**
The exhibit will include **[describe the interactive element in detail]**. Visitors will be able to **[describe what users can click, drag, answer, reveal, compare, or simulate]**.

**Purpose:**
This interactive component will help users understand **[specific concept/problem]** by allowing them to actively explore **[what the interaction teaches]** instead of only reading static text.

**Possible User Flow:**

1. User enters the exhibit page.
2. User reads a short introduction to the problem.
3. User interacts with the component by **[clicking/choosing/answering/simulating]**.
4. The component gives visual feedback or explanation.
5. User proceeds to the conclusion and lessons learned section.

---

## Tech Stack Plan

The project will follow the required technical specifications for the CSARCH2 virtual exhibit.

| Requirement         | Planned Implementation                                             |
| ------------------- | ------------------------------------------------------------------ |
| Framework           | Astro 6                                                            |
| Runtime             | Node.js 26                                                         |
| Content Format      | MDX file for main exhibit content                                  |
| Components          | React JSX components and/or Astro components                       |
| Styling             | CSS / Tailwind / template-based styling                            |
| Repository          | GitHub repository forked from the provided Astro template          |
| Interactive Element | [React component / Astro component / embedded interactive feature] |
| Media Resources     | Images, diagrams, icons, screenshots, or videos if needed          |
| Responsiveness      | Layout will be designed for desktop and mobile viewing             |

---

## Proposed Repository Structure

```txt
├── astro.config.mjs
├── package.json
├── package-lock.json
├── src
│   ├── components
│   │   ├── [InteractiveComponent].jsx
│   │   └── [OptionalAstroComponent].astro
│   ├── layouts
│   │   └── ExhibitLayout.astro
│   └── pages
│       └── [topic_name].mdx
└── tsconfig.json
```

---

## Proposed Page Sections

The exhibit page may contain the following sections:

1. **Hero Section**

   * Exhibit title
   * Short subtitle
   * Main visual/banner

2. **Background Section**

   * Historical and technical context

3. **Problem Section**

   * Explanation of the architecture-related issue

4. **Interactive Section**

   * Main interactive component

5. **Solution Section**

   * How the issue was solved or addressed

6. **Impact Section**

   * Effects on users, companies, hardware design, or future systems

7. **Lessons Learned Section**

   * Key takeaways for computer architecture

8. **References Section**

   * List of sources used

---

## Mobile-Responsive Layout Plan

The exhibit will be designed to be readable and accessible on both desktop and mobile devices.

**Desktop Layout:**

* Wider content sections
* Side-by-side visuals and explanations
* Interactive component displayed with full width or card layout

**Mobile Layout:**

* Single-column layout
* Larger spacing between sections
* Buttons and interactive elements sized for touch input
* Images and diagrams scaled to fit smaller screens

---

## Tentative Style Guide Snapshot

**Visual Theme:** [e.g., retro computing / futuristic museum / technical blueprint / dark mode archive]

**Color Palette:**

* Primary Color: [Insert color]
* Secondary Color: [Insert color]
* Background Color: [Insert color]
* Accent Color: [Insert color]

**Typography:**

* Headings: [Insert font or style]
* Body Text: [Insert font or style]

**Design Elements:**

* Museum-style exhibit cards
* Timeline or story-based navigation
* Diagrams and callout boxes
* Interactive section with clear instructions
* Consistent spacing and visual hierarchy

---

## Development Timeline

| Phase    | Task                                        | Target Date / Week | Assigned To |
| -------- | ------------------------------------------- | ------------------ | ----------- |
| Phase 1  | Finalize topic and scope                    | [Date]             | [Name/s]    |
| Phase 2  | Research and collect sources                | [Date]             | [Name/s]    |
| Phase 3  | Draft exhibit content                       | [Date]             | [Name/s]    |
| Phase 4  | Create design/style guide snapshot          | [Date]             | [Name/s]    |
| Phase 5  | Set up GitHub repository and Astro template | [Date]             | [Name/s]    |
| Phase 6  | Build MDX page structure                    | [Date]             | [Name/s]    |
| Phase 7  | Develop interactive component               | [Date]             | [Name/s]    |
| Phase 8  | Test responsiveness and compatibility       | [Date]             | [Name/s]    |
| Phase 9  | Final documentation and polishing           | [Date]             | [Name/s]    |
| Phase 10 | Final demo preparation                      | [Date]             | [Name/s]    |

---

## Documentation Plan

All project documentation will be maintained in GitHub. This includes:

* Proposal README
* Planning notes
* Content drafts
* Component descriptions
* Design decisions
* Observations and feedback
* Final exhibit documentation

---

## References

[List all references here in the required citation format.]
