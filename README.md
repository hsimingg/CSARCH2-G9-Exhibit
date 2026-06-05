# CSARCH2 Virtual Exhibit Case Study Proposal

---
## Group Title: "Ariane 5: The Overflow That Brought Down a Rocket"

#### Category: Problem Solving Stories

#### Group Members

| Name                |
| ------------------- |
| Chong, Kimberly     |
| Hereula, Adolfo Jr. |
| Ho, Denise Liana    |
| Miranda, Isaiah     |
| Sarroza, Mikael     |

---

## Ariane 5 Flight 501: Integer Overflow Failure

Our virtual exhibit will present **[briefly describe the problem-solving story]**. The exhibit will focus on the computer architecture issue, why it mattered, how it was discovered, how it affected users or the industry, and how the problem was addressed.

**[tweak below to whatever suits our project]**

The exhibit will guide visitors through the story using a museum-style layout with sections such as:

1. Mission Launch: Introduction to the Problem
	- What was the Ariane 5 rocket?
	- What was Flight 501 supposed to do?
	- What happened during the launch?
	- Why did this failure become significant in computing and engineering history?
2. The Hidden Assumption: Architecture Background
	- Binary data representation
	- Integer and floating-point data types
	- Range limitations of data storage
	- Overflow and data conversion concepts
	- Why a value that fits in one data type may not fit in another
3. The Data Representation Problem
	- Reuse of Ariane 4 software
	- Conversion of a 64-bit floating-point value into a 16-bit signed integer
	- Why the converted value exceeded the allowed range
	- How overflow occurs when a value cannot be represented
4. The Overflow Chain Reaction
	- Overflow exception
	- Inertial reference system shutdown
	- Loss of guidance information
	- Rocket deviation and destruction
	- How one data conversion issue became a full system failure
5. Solution and Response
	- Investigation findings
	- Software redesign and validation improvements
	- Better exception handling
	- Stronger testing for reused software
	- Safety checks for critical systems
6. Legacy and Lessons Learned
	- Importance of handling overflow conditions
	- Risks of reusing software without validating new conditions
	- Importance of testing assumptions
	- How small representation errors can create real-world consequences
	- Why computer architecture concepts matter outside the classroom
	- Modern engineering practices influenced by the incident

---

## Objectives of the Exhibit

**[tweak below to whatever suits our project]**

The proposed virtual exhibit aims to:

- Explain the Ariane 5 Flight 501 failure and the software error that led to the destruction of the rocket.
- Help visitors understand the concepts of data representation, integer overflow, and data type conversion in computer systems.
- Demonstrate how a small software and architecture-related mistake can result in major real-world consequences.
- Present the historical and technical significance of the Ariane 5 incident and its impact on software engineering practices.

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

**[BELOW IS ABOUT OUR INTERACTIVE ELEMENT]**

The main interactive element will be titled **“Mission Control: Prevent the Overflow.”** It will combine a story-based decision simulation with an integer overflow demonstration.

Visitors will take the role of an engineer reviewing the Ariane 5 flight software before launch. They will make decisions related to software reuse, data conversion, range checking, and exception handling. One part of the simulation will show whether a value can fit inside a 16-bit signed integer range. If the value exceeds the range of `-32768` to `32767`, the component will show an overflow warning and explain why the conversion is unsafe.

This interactive element will help visitors understand how data representation, type conversion, and overflow can affect real-world safety-critical systems.


---

## Tech Stack Plan

| Requirement         | Planned Implementation                                                                                               |
| ------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Framework           | Astro 6                                                                                                              |
| Runtime             | Node.js 26                                                                                                           |
| Content Format      | MDX file                                                                                                             |
| Components          | React JSX components and Astro components                                                                            |
| Styling             | CSS + template-based styling of the museum exhibit                                                                   |
| Repository          | GitHub Repository (forked from the provided Astro template)                                                          |
| Main Exhibit Page   | `ariane-5-integer-overflow.mdx`                                                                                      |
| Interactive Element | React JSX Component                                                                                                  |
| Media Resources     | Rocket images, data conversion diagrams, overflow visuals, icons, timeline assets, and background graphics if needed |
| Responsiveness      | Designed for desktop and mobile viewing                                                                              |
| Documentation       | Google Docs and README file will be maintained in GitHub                                                             |

---

## Proposed Repository Structure

```txt
CSARCH2-G9-Exhibit/
├── astro.config.mjs
├── package.json
├── package-lock.json
├── tsconfig.json
├── README.md
├── public
│   ├── favicon.ico
│   └── favicon.svg
└── src
    ├── assets
    │   ├── ariane5-rocket.svg
    │   ├── overflow-diagram.svg
    │   ├── data-conversion-diagram.svg
    │   ├── mission-control-bg.svg
    │   └── timeline-assets
    │       ├── launch.svg
    │       ├── software-reuse.svg
    │       ├── overflow-warning.svg
    │       └── rocket-failure.svg
    ├── components
    │   ├── MissionControlSimulation.jsx
    │   ├── OverflowChecker.jsx
    │   ├── DecisionCard.jsx
    │   ├── FailureTimeline.astro
    │   ├── InfoCard.astro
    │   └── Welcome.astro
    ├── layouts
    │   ├── ExhibitLayout.astro
    │   └── Layout.astro
    └── pages
        ├── index.astro
        └── ariane-5-integer-overflow.mdx
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

**Visual Theme:** galaxy aesthetic with cosmic elements such as stars, planets, spacecrafts (can be Ariane 5 in particular) for background visuals. paired with futuristic system terminal-style typography that play into a sci-fi theme.

**Color Palette:**

- Background (dark blue)
   -  `#060606F` (main)
   -  `#0B0C1E`
   -  `#18102A`
   -  `#13133A`

- Primary (purple)
   - `#7C5AED` (main)
   - `#A78BFA`
   - `#4C1D95`

- Secondary & Accents (yellow)
   - `#F5C800` (main)
   - `#FC0340`
   - `#FE4444`

- Text (black and white)
   - `#EBE8F4` (for dark background)
   - `#8689A`
   - `#1E1E45` (for light background)

**Typography:**

* Title or Headings: Chakra Petch 
* Body Text: DM Sans
* Code / Telemetry: JetBrains Mono

**Design Elements:**

* Museum-style exhibit cards
* Timeline or story-based navigation
* Diagrams and callout boxes
* Interactive section with clear instructions
* Consistent spacing and visual hierarchy

See Figma for working style guide file [here](https://www.figma.com/design/8mziXVxXo5SOnHLOq4FTQs/CSARCH2_Style-Guide-Snapshot?node-id=0-1&t=oGs4HKj2BUpslrLG-1).

---

## References

[List all references here in the required citation format.]
