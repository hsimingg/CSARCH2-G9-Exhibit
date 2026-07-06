## Deployment Link

Live Website: [CSARCH2 G9 Virtual Exhibit](PASTE_DEPLOYMENT_LINK_HERE)

---

# MC02 Mid-Milestone Development Update

## Current Progress

The group has started converting the proposal into a working Astro-based virtual exhibit website. The site now uses a section-based structure with a homepage, navigation bar, shared layout, global styling, and reusable exhibit components.

Current website sections include:
- Hero / Landing Section
- Background Section
- Architecture Concept Section
- Timeline Section
- Interactive Simulation Section
- Lessons Learned Section
- References Section

---

## Hero & Background Progress
[insert here]

## Architecture Concept Progress

The interactive architecture exhibit, **Apollo Guidance Computer Architecture**, has been developed as a React component:
`src/components/ArchitectureChip.jsx`

The exhibit currently includes:
- Interactive AGC chip visualization with clickable architecture nodes
- Processor workload explanation
- Task prioritization and preemptive scheduling
- Real-time execution and WAITLIST overview
- 1201/1202 program alarm explanations
- Error recovery through the BAILOUT1 restart routine
- Desktop and mobile responsive layout

The exhibit is designed to encourage exploration rather than passive reading. Selecting different nodes updates the information panel, allowing users to learn how the Apollo Guidance Computer's architecture enabled the Apollo 11 Lunar Module to continue operating despite limited hardware resources and processor overload.

## Timeline Progress
[insert here]

## Interactive Simulation Progress

The main interactive element, **Mission Control: Handle the 1202 Alarm**, has been developed as a React component:
`src/components/MissionControlSimulation.jsx`

The simulation currently includes:
- Retro terminal-style computer interface
- 1202 alarm scenario
- User decision prompts + task priority choices
- Computer load and risk level updates
- GO / ABORT decision points (multiple endings)
- Desktop and mobile responsive styling

The simulation is designed to be interactive rather than static. User decisions change the system state, computer load, risk level, final recommendation, and ending.

## Lessons Learned & References Progress
[insert here]

---

## Aha Moments / Things Learned

While developing the simulation, we clarified that the Apollo 11 1202 alarm was not a total computer failure. It was an overload condition where the Apollo Guidance Computer had to keep critical landing tasks active while managing limited processing resources.

While researching the Apollo Guidance Computer, one thing that surprised us was learning that its processor was built almost entirely from NOR gates. We also found it remarkable that a computer with only 4 KB of RAM could successfully guide Apollo 11 to the Moon. It was astounding to see how they worked with the hardware limitations of the 1960s and still made the most of the technology available to achieve something as big as the first crewed Moon landing.

[insert your own here - MJ]
[insert your own here - Adolfo]
[insert your own here - Tophi]

## Challenges Encountered

- Making the game logic and story game flow understandable for all 
- Balancing and making the simulation dynamic instead of slide-like
- Designing a retro terminal UI that works on both desktop and mobile

- Creating an interactive computer-chip component with SVG with little experience with SVG
- Organizing computer chip and info panel layout and preventing them from overlapping
- CSS layout issues, particularly keeping div sizes from dynamically changing incorrectly


[insert your own here - MJ]
[insert your own here - Adolfo]
[insert your own here - Tophi]

---

## Next Steps

- Complete the remaining exhibit section content
- Improve section layouts and responsiveness
- Polish UI, animation, and cohesiveness of website
- Apply revisions from sir Rog's comments if there's any

## Section Progress Log

| Section                | Progress / Update                                                                                                                                                   | Member   |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| Hero / Landing         |                                                                                                                                                                     |          |
| Background             |                                                                                                                                                                     |          |
| Architecture Concept   |                                                                                                                                                                     |          |
| Timeline               |                                                                                                                                                                     |          |
| Interactive Simulation | React-based decision simulation has been implemented with computer load updates, task-priority choices, GO / ABORT outcomes, and responsive retro terminal styling. | Kimberly |
| Lessons Learned        |                                                                                                                                                                     |          |
| References             |                                                                                                                                                                     |          |

---

# CSARCH2 Virtual Exhibit Case Study Proposal

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
## Proposal Revisions  
  
Based on the feedback received, the proposal was revised with the following changes:  
  
- Changed the topic from Ariane 5 to **Apollo 11: The 1202 Alarm That Almost Stopped the Moon Landing** due to topic duplication.  
- Updated the exhibit concept to focus on the Apollo Guidance Computer, processor workload, task prioritization, real-time execution, and error handling.  
- Revised the interactive element into **“Mission Control: Handle the 1202 Alarm,”** an interactive story-based decision simulation with a CPU task-priority demonstration.  
- Updated the tech stack plan, proposed repository structure, file names, media resources, page sections, and references to match the Apollo 11 topic.  
- Included the style guide snapshot and tentative layout in the README.  
- Clarified that the interactive element will require user decisions and dynamic feedback, not a static slide-like presentation.

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

This component will not function as a static slide presentation because users will click decision buttons, change the mission status, choose which tasks receive priority, and receive different feedback depending on their choices.

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
│ ├── favicon.ico 
│ └── favicon.svg 
└── src 
	├── assets 
	│ ├── apollo11-lunar-module.svg 
	│ ├── agc-diagram.svg 
	│ ├── alarm-1202-screen.svg 
	│ ├── mission-control-bg.svg 
	│ └── timeline-assets 
	│ ├── lunar-descent.svg 
	│ ├── program-alarm.svg 
	│ ├── task-priority.svg 
	│ └── moon-landing.svg 
	├── components 
	│ ├── MissionControlSimulation.jsx 
	│ ├── TaskPrioritySimulator.jsx 
	│ ├── DecisionCard.jsx 
	│ ├── AlarmTimeline.astro 
	│ ├── InfoCard.astro 
	│ └── Welcome.astro 
	├── layouts 
	│ ├── ExhibitLayout.astro 
	│ └── Layout.astro 
	└── pages 
		├── index.astro 
		└── apollo-11-1202-alarm.mdx
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

**Visual Theme:** Galaxy aesthetic with cosmic elements such as stars, planets, the Moon, Apollo 11, the Lunar Module, and Mission Control-inspired visuals. See Figma for working style guide file [here](https://www.figma.com/design/8mziXVxXo5SOnHLOq4FTQs/CSARCH2_Style-Guide-Snapshot?node-id=0-1&t=oGs4HKj2BUpslrLG-1).

**Color Palette:**

![Color Palette](public/style-guide/color-palette.png)

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

![Typography](public/style-guide/typography.png)


- Title or Headings: Chakra Petch 
- Body Text: DM Sans
- Code / Mono: JetBrains Mono

**Design Elements:**
- Video embed or visual reference of the Apollo 11 lunar landing / 1202 alarm incident
- Images of Apollo 11, the Lunar Module, the Apollo Guidance Computer, or Mission Control
- Buttons
- Info cards or callout boxes
- Timeline of events diagram
- Interactive simulation with decision buttons

**Tentative Layout:**

![Tentative Layout](public/style-guide/layout.png)

---

## References
[1] Discover Magazine, “Apollo 11’s 1202 Alarm Explained.” Available: [https://www.discovermagazine.com/apollo-11s-1202-alarm-explained-185](https://www.discovermagazine.com/apollo-11s-1202-alarm-explained-185)

[2] NASA, “Apollo 11 Mission Overview.” Available: [https://www.nasa.gov/mission/apollo-11/](https://www.nasa.gov/mission/apollo-11/)

[3] NASA History, “Apollo 11 Lunar Surface Journal.” Available: [https://history.nasa.gov/alsj/a11/a11.html](https://history.nasa.gov/alsj/a11/a11.html)

[4] MIT Instrumentation Laboratory, “Apollo Guidance Computer documentation.” Available: [https://www.ibiblio.org/apollo/](https://www.ibiblio.org/apollo/)

[5] Virtual AGC, “Luminary099: Apollo Lunar Module Guidance Computer Software.” Available: [https://github.com/virtualagc/virtualagc/tree/master/Luminary099](https://github.com/virtualagc/virtualagc/tree/master/Luminary099)
