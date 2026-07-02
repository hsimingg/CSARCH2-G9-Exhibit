export const nodes = [
  {
    id: "workload",

    title: "Processor Workload",

    position: {
      top: "5%",
      left: "50%",
      transform: "translateX(-50%)"
    },

    short:
      "How the AGC handled many tasks with limited computing resources.",

    content: `
The Apollo Guidance Computer (AGC) ran many software jobs simultaneously using its EXECUTIVE operating system. Every scheduled job required a limited processing resource called a core set. During Apollo 11, repeated rendezvous radar requests generated unnecessary work that competed for these resources. As more jobs accumulated, the computer approached its scheduling limits.
    `,

    takeaway:
      "Multiple tasks competed for only a handful of processing resources."
  },

  {
    id: "priority",

    title: "Task Prioritization",

    position: {
      top: "28%",
      left: "5%"
    },

    short:
      "Critical flight operations always came first.",

    content: `
Every job in the AGC was assigned a priority level. Guidance, navigation, engine control, and attitude control received the highest priority, while display updates and other nonessential work were assigned lower priority. When the computer became overloaded, lower-priority jobs were discarded so critical flight operations could continue uninterrupted.
    `,

    takeaway:
      "Priority scheduling ensured mission-critical tasks always executed first."
  },

  {
    id: "realtime",

    title: "Real-Time Execution",

    position: {
      bottom: "8%",
      left: "12%"
    },

    short:
      "Some computations had to finish at precise moments.",

    content: `
The AGC was a real-time computer. Programs such as WAITLIST scheduled short, time-critical tasks that had to execute at exact moments, including sensor processing and guidance updates. During lunar descent, missing these timing deadlines could have produced incorrect navigation and jeopardized the landing.
    `,

    takeaway:
      "Correct timing was just as important as correct computation."
  },

  {
    id: "alarm",

    title: "Program Alarms",

    position: {
      top: "28%",
      right: "5%"
    },

    short:
      "1201 and 1202 were overload warnings, not system failures.",

    content: `
The famous 1201 and 1202 alarms indicated Executive Overflow rather than a computer failure. Alarm 1202 meant no core sets were available for additional jobs, while 1201 meant no VAC (Vector Accumulator) areas remained. These alarms warned that scheduling resources had been exhausted, but the AGC continued executing critical software.
    `,

    takeaway:
      "The alarms reported resource exhaustion instead of a computer crash."
  },

  {
    id: "recovery",

    title: "Error Recovery",

    position: {
      bottom: "8%",
      right: "12%"
    },

    short:
      "The AGC recovered automatically instead of failing.",

    content: `
When overload occurred, the AGC executed its restart mechanism through the BAILOUT routine. The computer discarded unnecessary low-priority jobs, restored essential programs, and resumed execution close to where they had previously stopped. This automatic recovery allowed Apollo 11 to continue its lunar landing despite repeated overload conditions.
    `,

    takeaway:
      "Automatic recovery transformed a potential failure into a successful landing."
  }
];