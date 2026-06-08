# CSARCH2 Virtual Exhibit Case Study Proposal

---
## Group Title: "GO or ABORT: The Apollo 11 1202 Alarm"

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

## Apollo 11: The 1202 Alarm That Almost Stopped the Moon Landing

During the Apollo 11 lunar descent, the Lunar Module’s guidance computer displayed program alarms that caused concern because the mission was already in a critical landing phase. Instead of treating the alarm as a complete system failure, Mission Control had to quickly determine whether the computer was still capable of handling the most important landing tasks.

The exhibit will focus on the computer architecture issue behind the event: how a computer with limited processing resources manages multiple tasks, how priority-based execution helps critical operations continue, and why error handling matters in real-time systems. 

The exhibit will guide visitors through the story using a museum-style layout with sections such as:

1. **Lunar Descent: Introduction to the Problem**
	- What was Apollo 11?
	- What was the Lunar Module “Eagle” trying to do?
	- What happened during the landing descent?
	- Why did the 1202 alarm create concern in Mission Control?

2. **The Computer Behind the Landing**
	- What was the Apollo Guidance Computer?
	- What tasks did it handle during the lunar descent?
	- Why were limited processing resources important?
	- How does a computer decide which tasks should run first?

3. **The Hidden Overload**
	- The computer received more workload than expected.
	- The 1201 and 1202 program alarms appeared during descent.
	- The issue became critical because it happened while the Lunar Module was landing.
	- The computer needed to keep essential guidance tasks running despite the overload.

4. **The Priority Decision**
	- The computer prioritized critical landing and navigation tasks.
	- Lower-priority tasks could be delayed or ignored.
	- Mission Control had to decide whether the alarm required an abort or whether the mission could continue.
	- This moment became the central problem-solving point of the story.

5. **Mission Response**
	- Mission Control interpreted the alarm and gave the mission a “GO.”
	- The Lunar Module continued its descent.
	- The computer’s design helped prevent total failure by preserving essential guidance functions.
	- Apollo 11 successfully landed on the Moon.

6. **Legacy and Lessons Learned**
	- Real-time systems need task prioritization.
    - Limited computer resources can still succeed with good system design.
    - Error handling and recovery are important in mission-critical systems.
    - Computer architecture is not only about speed, but also reliability, scheduling, and fault recovery.
    - The event shows how computer system design can directly affect real-world decision-making.

---

## Objectives of the Exhibit

The proposed virtual exhibit aims to:

- Explain the Apollo 11 1202 alarm and why it became a critical moment during the Moon landing.
- Help visitors understand the concepts of processor workload, task prioritization, real-time execution, and error handling.
- Demonstrate how limited computing resources can still support mission-critical operations when the system is designed to prioritize essential tasks.
- Present the historical and technical significance of the Apollo Guidance Computer and its role in the success of Apollo 11.
- Show how computer architecture concepts are applied in real-world high-pressure systems.

---

## Proposed Interactive Element

**Interactive Element Title:** 
Mission Control: Handle the 1202 Alarm

**Type of Interaction:**
Interactive Story-Based Decision Simulation & CPU Task-Priority Demonstration

**Description:**
The exhibit will include an interactive story-based simulation where visitors assume the role of a Mission Control engineer during the Apollo 11 lunar descent. Visitors will be presented with a simplified mission status display showing computer load, active tasks, and program alarm warnings. As the 1202 alarm appears, users must decide whether to continue or abort the landing based on the status of the computer and the priority of its tasks.

The simulation will also include a simplified CPU task-priority demonstration. Visitors will see different tasks competing for limited processing resources, such as landing guidance, navigation updates, attitude control, display updates, and extra radar-related data. They must choose which tasks should be prioritized. If visitors prioritize critical tasks, the simulation will show that the mission can continue. If they prioritize lower-priority tasks, the simulation will show worsening overload and explain why poor prioritization can endanger a real-time system.

**Purpose:**
This interactive component will help users understand processor workload, task scheduling, priority-based execution, and error handling by allowing them to actively explore how a computer system can continue operating during overload conditions. Instead of only reading about the Apollo 11 alarm, visitors will experience the decision-making pressure of determining whether a computer alarm means “GO” or “ABORT.”

**Possible User Flow:**
1. User enters the exhibit page.
2. User reads a short introduction to Apollo 11 and the lunar descent.
3. User reaches the interactive simulation and sees a mission status panel.
4. A 1202 program alarm appears.
5. User chooses whether to continue or abort the landing.
6. User interacts with a simplified task-priority system by choosing which computer tasks should be prioritized.
7. The component gives visual feedback explaining whether the chosen decision helps the mission continue or worsens the overload.
8. User proceeds to the mission response, impact, and lessons learned sections.

---

## Tech Stack Plan

| Requirement         | Planned Implementation                                                                                                                                     |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Framework           | Astro 6                                                                                                                                                    |
| Runtime             | Node.js 26                                                                                                                                                 |
| Content Format      | MDX file                                                                                                                                                   |
| Components          | React JSX components and Astro components                                                                                                                  |
| Styling             | CSS + template-based styling of the museum exhibit                                                                                                         |
| Repository          | GitHub Repository                                                                                                                                          |
| Main Exhibit Page   | `apollo-11-1202-alarm.mdx`                                                                                                                                 |
| Interactive Element | React JSX Component                                                                                                                                        |
| Media Resources     | Apollo 11 images, lunar module visuals, guidance computer diagrams, alarm screen visuals, timeline assets, and mission control-inspired graphics if needed |
| Responsiveness      | Designed for desktop and mobile viewing                                                                                                                    |
| Documentation       | Google Docs and README file will be maintained in GitHub                                                                                                   |

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
	- Exhibit title
	- Short subtitle
	- Main Apollo 11 / lunar descent visual

2. **Background Section**
	- Historical background of Apollo 11
	- Introduction to the Lunar Module and Apollo Guidance Computer

3. **Problem Section**
	- Explanation of the 1201/1202 program alarms
	- Explanation of computer overload and limited processing resources

4. **Architecture Concept Section**
	- Processor workload
	- Task prioritization
	- Real-time execution
	- Error handling and recovery

5. **Interactive Section**
	- “Mission Control: Handle the 1202 Alarm” simulation
   - CPU task-priority demonstration

6. **Mission Response Section**
	- How Mission Control responded
	- Why the landing was allowed to continue

7. Impact Section
	- Effects on computing, aerospace systems, and real-time system design

8. **Lesson Learned Section**
	- Key takeaways for computer architecture
	- Importance of reliability, scheduling, prioritization, and recovery

9. **References Section**
	- List of sources used

---

## Mobile-Responsive Layout Plan

The exhibit will be designed to be readable and accessible on both desktop and mobile devices.

**Desktop Layout:**
- Wider content sections
- Side-by-side visuals and explanations
- Mission status panel displayed beside the explanation when possible
- Interactive component displayed with full width or card layout

**Mobile Layout:**
- Single-column layout
- Larger spacing between sections
- Buttons and interactive elements sized for touch input
- Images and diagrams scaled to fit smaller screens
- Mission status and task-priority cards stacked vertically for readability

---

## Tentative Style Guide Snapshot

**Visual Theme:** galaxy aesthetic with cosmic elements such as stars, planets, spacecrafts (can be Ariane 5 in particular) for background visuals. Paired with futuristic system terminal-style typography that play into a sci-fi theme. See Figma for working style guide file [here](https://www.figma.com/design/8mziXVxXo5SOnHLOq4FTQs/CSARCH2_Style-Guide-Snapshot?node-id=0-1&t=oGs4HKj2BUpslrLG-1).

**Color Palette:**

- Background (dark blue)
   -  `#06060F` (main)
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
   - `#86889A`
   - `#1E1E45` (for light background)

**Typography:**
- Title or Headings: Chakra Petch 
- Body Text: DM Sans
- Code / Mono: JetBrains Mono

**Design Elements:**
- Video embed of Ariane 5 Flight 501 crash
- Images of Ariane 5 spacecraft
- Buttons
- Info cards or callout boxes for important information
- Timeline of events diagram
- Interactive game with decision buttons


---

## References
[1] Discover Magazine, “Apollo 11’s 1202 Alarm Explained.” Available: [https://www.discovermagazine.com/apollo-11s-1202-alarm-explained-185](https://www.discovermagazine.com/apollo-11s-1202-alarm-explained-185)

[2] NASA, “Apollo 11 Mission Overview.” Available: [https://www.nasa.gov/mission/apollo-11/](https://www.nasa.gov/mission/apollo-11/)

[3] NASA History, “Apollo 11 Lunar Surface Journal.” Available: [https://history.nasa.gov/alsj/a11/a11.html](https://history.nasa.gov/alsj/a11/a11.html)

[4] MIT Instrumentation Laboratory, “Apollo Guidance Computer documentation.” Available: [https://www.ibiblio.org/apollo/](https://www.ibiblio.org/apollo/)
