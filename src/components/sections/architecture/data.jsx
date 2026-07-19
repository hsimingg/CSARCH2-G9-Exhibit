export const nodes = [
  {
    id: "workload",
    title: "Processor Workload",
    position: {
      top: "4%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    },
    short: "How the AGC handled many tasks with limited computing resources.",
    content: (
      <>
        The AGC used a real-time operating system called <code>EXECUTIVE</code> to
        manage software jobs. Every scheduled job required <strong>one of only
          eight core sets</strong>, each containing <strong>12 erasable memory
            registers</strong> that stored the job's execution state. This allowed
        interrupted jobs to resume later. As more jobs competed for these limited
        resources, the processor had to manage more work simultaneously,
        increasing its overall processor workload.
      </>
    ),
    takeaway: "The AGC continuously managed competing jobs using a small pool of processing resources. Even under heavy demand during the lunar descent, the workload management allowed the computer to support a successful landing."
  },
  {
    id: "priority",
    title: "Task Prioritization",
    position: {
      top: "9%",
      left: "14%",
      transform: "translate(-50%, -50%)"
    },
    short: "How the AGC decided which jobs should run first.",
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
    takeaway: "Priority scheduling ensured that critical flight operations always executed first. This ensured that the most essential operations continued even when processor resources became limited."
  },
  {
    id: "realtime",
    title: "Real-Time Operation",
    position: {
      top: "85%",
      left: "6%",
      transform: "translate(-50%, -50%)"
    },
    short: "Why correct timing was as important as correct computation.",
    content: (
      <>
        The AGC was a <strong>strict real-time system</strong>, meaning certain jobs had
        to execute at <strong>exact times</strong>. Its <code>WAITLIST</code> program scheduled <strong>time-critical jobs</strong> such as processing sensor data and triggering spacecraft events. Because the processor executes instructions sequentially, real-time scheduling ensured time-critical instructions—like engine throttle adjustments and navigation updates—were completed strictly before their deadlines.
      </>
    ),
    takeaway: "Executing critical jobs at the correct time was essential for accurate guidance and control. Missing a guidance loop cycle would result in inaccurate navigation and potential mission failure."
  },
  {
    id: "alarm",
    title: "Memory Constraints",
    position: {
      top: "42%",
      left: "96%",
      transform: "translate(-50%, -50%)"
    },
    short: "What the program alarms actually meant during the Apollo 11 landing.",
    content: (
      <>
        The <code>1201</code> and <code>1202</code> alarms were not signs of hardware failure, but warnings of memory constraints. An <strong>Executive Overflow</strong> meant the operating system had exhausted its scheduling resources. A <code>1202</code> alarm meant <strong>no core sets were available</strong>, while a <code>1201</code> alarm meant <strong>no Vector Accumulator (VAC) areas remained</strong> for temporary storage. These alarms indicated that the computer had reached its resource limits while trying to manage unnecessary radar processing requests.
      </>
    ),
    takeaway: "The alarms warned that scheduling resources were exhausted, not that the computer had crashed. Rather than signaling mission failure, the alarms actually demonstrated that the computer was working as intended, still successfully managing resources to protect critical flight operations."
  },
  {
    id: "recovery",
    title: "Fault Recovery",
    position: {
      top: "94%",
      left: "82%",
      transform: "translate(-50%, -50%)"
    },
    short: "How the AGC continued operating during overload.",
    content: (
      <>
        The AGC was designed for fault recovery from overloads instead of shutting down. When the <code>EXECUTIVE</code> could no longer allocate scheduling resources, it invoked the <code>BAILOUT1</code> recovery routine. The system performed a <strong>software restart</strong>, discarded unnecessary <strong>low-priority jobs</strong>, and restarted essential guidance and control programs near where they had been interrupted.
      </>
    ),
    takeaway: "Automatic recovery allowed the AGC to continue operating without interrupting its critical flight functions. Since essential flight data and high-priority tasks were preserved, the Lunar Module remained under control even with the repeated executive overflows, which ultimately led to a successful landing."
  }
];