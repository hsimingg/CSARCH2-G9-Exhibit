export const nodes = [
  {
    id: "workload",

    title: "Processor Workload",

    position: {
      top: "4%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    },

    short:
      "How the AGC handled many tasks with limited computing resources.",

    content: (
      <>
        The AGC used a real-time operating system called <code>EXECUTIVE</code> to
        manage software jobs. Every scheduled job required <strong>one of only
        eight core sets</strong>, each containing <strong>12 erasable memory
        registers</strong> that stored the job's execution state. This allowed
        interrupted jobs to resume later. As more jobs competed for these limited
        resources, the processor had to manage more work simultaneously,
        increasing its overall workload.
      </>
    ),

    takeaway:
      "The AGC continuously managed competing jobs using a small pool of processing resources."
  },

  {
    id: "priority",

    title: "Task Prioritization",

    position: {
      top: "9%",
      left: "14%",
      transform: "translate(-50%, -50%)"
    },

    short:
      "How the AGC decided which jobs should run first.",

    content: (
      <>
        The AGC used a <strong>preemptive priority-based scheduling
        algorithm</strong>. Every job was assigned a priority level, allowing
        higher-priority jobs to interrupt lower-priority ones when necessary.
        Jobs requiring additional temporary storage could also request one of
        <strong> five Vector Accumulator (VAC) areas</strong>. During processor
        overload, lower-priority jobs could be delayed or discarded so
        <strong> critical flight operations</strong> could continue.
      </>
    ),

    takeaway:
      "Priority scheduling ensured that critical flight operations always executed first."
  },

  {
    id: "realtime",

    title: "Real-Time Execution",

    position: {
      top: "85%",
      left: "6%",
      transform: "translate(-50%, -50%)"
    },

    short:
      "Why correct timing was as important as correct computation.",

    content: (
      <>
        The AGC was a <strong>real-time system</strong>, meaning certain jobs had
        to execute at <strong>exact times</strong>. Its <code>WAITLIST </code>
        program scheduled <strong>time-critical jobs</strong> such as processing
        sensor data and triggering spacecraft events. If these jobs were delayed,
        guidance calculations could become inaccurate and affect the Lunar
        Module's navigation during descent.
      </>
    ),

    takeaway:
      "Executing critical jobs at the correct time was essential for accurate guidance and control."
  },

  {
    id: "alarm",

    title: "Program Alarms",

    position: {
      top: "42%",
      left: "96%",
      transform: "translate(-50%, -50%)"
    },

    short:
      "What the program alarms actually meant during the Apollo 11 landing.",

    content: (
      <>
        The <code>1201</code> and <code>1202</code> alarms indicated an
        <strong> Executive Overflow</strong>, meaning the operating system had
        exhausted its scheduling resources. A <code>1202</code> alarm meant
        <strong> no core sets were available</strong>, while a
        <code> 1201</code> alarm meant <strong>no Vector Accumulator (VAC) areas
        remained</strong> for temporary storage. The alarms indicated
        <strong> resource exhaustion</strong>, not a hardware or software
        failure.
      </>
    ),

    takeaway:
      "The alarms warned that scheduling resources were exhausted, not that the computer had crashed."
  },

  {
    id: "recovery",

    title: "Error Recovery",

    position: {
      top: "94%",
      left: "82%",
      transform: "translate(-50%, -50%)"
    },

    short:
      "How the AGC continued operating during overload.",

    content: (
      <>
        Instead of shutting down, the AGC executed its
        <code> BAILOUT1</code> recovery routine. The system performed a
        <strong> software restart</strong>, discarded unnecessary
        <strong> low-priority jobs</strong>, and restarted essential guidance
        and control programs near where they had been interrupted. This allowed
        <strong> mission-critical operations</strong> to continue despite
        processor overload.
      </>
    ),

    takeaway:
      "Automatic recovery allowed the AGC to continue operating without interrupting critical flight functions."
  }
];