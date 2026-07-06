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
    The AGC used a real-time operating system called EXECUTIVE to manage software jobs such as navigation, 
    engine control, radar processing, astronaut input, and display updates. Every job competed for a limited 
    number of scheduling resources called core sets. As more jobs were scheduled, processor workload increased. 
    Efficient workload management allowed the AGC to continue executing critical computations despite its limited hardware.
    `,

    takeaway:
      "The AGC continuously managed competing jobs using a small pool of processing resources."
  },

  {
    id: "priority",

    title: "Task Prioritization",

    position: {
      top: "28%",
      left: "5%"
    },

    short:
      "How the AGC decided which jobs should run first.",

    content: `
    Every job in the AGC was assigned a priority level. Navigation, guidance, engine control, and attitude 
    control were treated as high-priority tasks, while display updates and other nonessential work received 
    lower priority. During heavy processor load, lower-priority jobs could be delayed or discarded so the 
    computer could continue executing the operations required to safely control the spacecraft.
    `,

    takeaway:
      "Priority scheduling ensured that critical flight operations always executed first."
  },

  {
    id: "realtime",

    title: "Real-Time Execution",

    position: {
      bottom: "8%",
      left: "12%"
    },

    short:
      "Why correct timing was as important as correct computation.",

    content: `
    The AGC was a real-time system, meaning certain jobs had to execute before strict deadlines. 
  Its WAITLIST program scheduled short, time-critical jobs such as processing sensor measurements 
  and triggering spacecraft events. 
  If these jobs were delayed, guidance calculations could become inaccurate and affect the Lunar Module's 
  navigation during descent.
`,

    takeaway:
      "Executing critical jobs at the correct time was essential for accurate guidance and control."
  },

  {
    id: "alarm",

    title: "Program Alarms",

    position: {
      top: "28%",
      right: "5%"
    },

    short:
      "What the program alarms actually meant during the Apollo 11 landing.",

    content: `
    The 1201 and 1202 alarms indicated an Executive Overflow, meaning the operating system had exhausted its
     scheduling resources. A 1202 alarm meant no core sets were available to schedule another job, while a 1201 
     alarm meant no Vector Accumulator (VAC) areas remained for temporary storage. The alarms reported resource 
     exhaustion rather than a hardware or software failure.
    `,

    takeaway:
      "The alarms warned that scheduling resources were exhausted, not that the computer had crashed."
  },

  {
    id: "recovery",

    title: "Error Recovery",

    position: {
      bottom: "8%",
      right: "12%"
    },

    short:
      "How the AGC continued operating during overload..",

    content: `
    Instead of shutting down, the AGC executed its BAILOUT1 recovery routine. The system performed a software restart,
     discarded unnecessary low-priority jobs, and restored essential guidance and control programs near where they
      had previously stopped. This allowed mission-critical operations to continue despite processor overload.
    `,

    takeaway:
      "Automatic recovery allowed the AGC to continue operating without interrupting critical flight functions."
  }
];