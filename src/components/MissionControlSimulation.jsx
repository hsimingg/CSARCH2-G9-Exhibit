// game logic and ui for interactive simulation section
import { useState } from 'react'; // store changing values

const criticalTasks = [
    'Landing Guidance',
    'Navigation Updates',
    'Attitude Control',
];

const lowerPriorityTasks = [
    'Display Updates',
    'Extra Radar Data',
    'Background Calculations',
    'Crew Interface Updates',
    'Non-Essential Telemetry',
    'Diagnostic Logging',
];

function getRiskLevel(scoreValue) {
    if (scoreValue >= 2) {
        return 'CONTROLLED';
    }

    if (scoreValue >= 0) {
        return 'WARNING';
    }

    return 'DANGEROUS';
}

/*
FLOW
1) Decide the stages + track the core states.
3) Write the rules first:
    Alarm stage decides whether the player aborts, continues, or checks status.
    Task stage changes score and computer load.
    Status stage decides whether the player can go back for another check or move to the final recommendation.
    Ending stage shows the result and restart button.
4) Simple UI for each stage:
    Left side: computer dialogue
    Right side: user dialogue
    Bottom: buttons
    Keep this plain until the logic works.

UI
1) Build the retro monitor layout with left-side computer text, right-side user text, and bottom buttons.
2) Make sure each stage shows only the buttons it needs.
3) Keep the style simple at first: dark background, green text, visible buttons, monitor frame.

POLISHING
1) Tighten the retro look, spacing, and responsiveness.
2) This is where you can add the monitor border, glow, scanline feel, or the controller decoration if time allows.
*/

// define state
export default function MissionControlSimulation(){
    const [currentStage, setCurrentStage] = useState('alarm');
    const [score, setScore] = useState(0);
    const [computerLoad, setComputerLoad] = useState(105);
    const [riskLevel, setRiskLevel] = useState('WARNING');
    const [roundNumber, setRoundNumber] = useState(1);
    const [recommendation, setRecommendation] = useState(null);
    const [userText, setUserText] = useState('...');
    const [computerText, setComputerText] = useState('1202 PROGRAM ALARM DETECTED.');
    const [narrationText, setNarrationText] = useState(
        'The Apollo Guidance Computer is overloaded. Critical tasks may still be running.'
    );
    const [finalOutcome, setFinalOutcome] = useState(null);

    // 1. INTRO - FIRST CHOICE
    function handleAlarmChoice(choice) {

        if (choice === 'abort') {
            setUserText('Abort the landing.');
            setComputerText('Abort sequence confirmed.');
            setNarrationText('The crew remains safe, but the Moon landing attempt is lost.');
            setFinalOutcome('MISSION ABORTED');
            setCurrentStage('ending');
        return;
        }

        if (choice === 'continue') {
            setUserText('Continue without checking.');
            setScore((prev) => prev - 1);
            setComputerLoad((prev) => prev + 5);
            setComputerText('Warning. Task priority was not verified.');
            setNarrationText(
                'You continued without checking task priority. A risk penalty has been applied. The computer load has increased.'
            );
            setCurrentStage('task');
        return;
        }

        if (choice === 'check') {
            setUserText('Check task priority status.');
            setScore((prev) => prev + 1);
            setComputerText('Task priority status opened.');
            setNarrationText(
                'Critical and lower-priority tasks are now visible. Choose which task should receive processor priority.'
            );
            setCurrentStage('task');
        }
    }

    // 2. TASK SELECTION
    function handleTaskChoice(choice) {
        const isCriticalTask = criticalTasks.includes(choice);
        const scoreChange = isCriticalTask ? 1 : -1;
        const loadChange = isCriticalTask ? -5 : 5;
        const nextScore = score + scoreChange;
        const nextLoad = computerLoad + loadChange;

        setUserText(`Prioritize ${choice.toLowerCase()}.`);
        setScore(nextScore);
        setComputerLoad(nextLoad);
        setRiskLevel(getRiskLevel(nextScore));

        if (isCriticalTask) {
            setComputerText('Critical task prioritized.');
            setNarrationText(
                'Landing guidance, navigation, and attitude control remain protected. The system becomes more stable.'
            );
        } else {
            setComputerText('Warning. Lower-priority task selected.');
            setNarrationText(
                'This task is not essential for landing control. The overload worsens and critical work may be delayed.'
            );
        }

        const completedRound = roundNumber;

        if (completedRound < 3) {
            setComputerText('System check ready. Proceed to the status screen.');
            setNarrationText(
                `Round ${completedRound} task selection complete. Review system status, then choose whether to continue or abort.`
            );
            setCurrentStage('status');
            return;
        }

        const finalRecommendation = nextScore >= 2 ? 'GO' : 'ABORT';

        setRecommendation(finalRecommendation);
        setComputerText(`Final analysis complete. Recommendation: ${finalRecommendation}.`);
        setNarrationText(
            'Final system status is ready. The accumulated task-priority choices now determine the landing recommendation.'
        );
        setCurrentStage('status');
    }

    // 3. SYSTEM STATUS / GO-ABORT CHECK
    function handleStatusChoice(choice) {
        if (roundNumber < 3) {
            if (choice === 'go') {
                setUserText('GO. Continue the descent.');
                setFinalOutcome('DANGEROUS OUTCOME');
                setComputerText('Warning. GO decision issued before full system verification.');
                setNarrationText(
                    'You gave a GO decision before fully verifying system status. The descent becomes unsafe.'
                );
                setCurrentStage('ending');
                return;
            }

            if (choice === 'abort') {
                setUserText('ABORT the mission.');
                setFinalOutcome('MISSION ABORTED');
                setComputerText('Abort sequence confirmed.');
                setNarrationText('The mission is safely aborted, but the landing attempt is lost.');
                setCurrentStage('ending');
                return;
            }

            if (choice === 'check') {
                setUserText('Check system status again.');
                setRoundNumber((prev) => prev + 1);
                setComputerText('Additional system check requested.');
                setNarrationText(
                    'The system will re-check processor priority. Choose another task to prioritize.'
                );
                setCurrentStage('task');
            }

            return;
        }

        if (choice === 'go') {
            setUserText('GO. Continue the descent.');
            if (recommendation === 'GO') {
                setFinalOutcome('MISSION SUCCESSFUL');
                setComputerText('Descent continues. Critical guidance tasks remain active.');
                setNarrationText(
                    'You followed the system analysis and continued the descent. Critical guidance tasks stayed active, allowing Eagle to land successfully.'
                );
            } else {
                setFinalOutcome('DANGEROUS OUTCOME');
                setComputerText('Danger. GO decision conflicts with system recommendation.');
                setNarrationText(
                    'You ignored the system warning. Critical tasks were not prioritized enough, making the descent unsafe.'
                );
            }
            setCurrentStage('ending');
            return;
        }

        if (choice === 'abort') {
            setUserText('ABORT the mission.');
            setFinalOutcome('MISSION ABORTED');
            setComputerText('Abort sequence confirmed.');
            setNarrationText('The mission is safely aborted, but the landing attempt is lost.');
            setCurrentStage('ending');
        }
    }

    // 5. RESTART GAME
    function restartSimulation() {
        setCurrentStage('alarm');
        setScore(0);
        setComputerLoad(105);
        setRiskLevel('WARNING');
        setRoundNumber(1);
        setRecommendation(null);
        setUserText('...');
        setComputerText('1202 PROGRAM ALARM DETECTED.');
        setNarrationText(
        'The Apollo Guidance Computer is overloaded. Critical tasks may still be running.'
        );
        setFinalOutcome(null);
    }

    return (
        <section>
        {/* FIRST STAGE: ALARM ON */}
        {currentStage === 'alarm' && (
            <div>
            <p>COMPUTER: {computerText}</p>
            <p>{narrationText}</p>
            <p>Alarm Code: 1202</p>
            <p>Computer Load: {computerLoad}%</p>
            <p>Risk Level: {riskLevel}</p>
            <p>YOU: {userText}</p>

            <button onClick={() => handleAlarmChoice('abort')}>ABORT</button>
            <button onClick={() => handleAlarmChoice('continue')}>CONTINUE WITHOUT CHECKING</button>
            <button onClick={() => handleAlarmChoice('check')}>CHECK TASK STATUS</button>
            </div>
        )}

        {/* SECOND STAGE: TASK CHOICE */}
        {currentStage === 'task' && ( 
            <div>
            <p>COMPUTER: {computerText}</p>
            <p>{narrationText}</p>
            <p>Task Priority Round: {Math.min(roundNumber, 3)} / 3</p>
            <p>Current Computer Load: {computerLoad}%</p>
            <p>Current Risk Level: {riskLevel}</p>
            <p>YOU: {userText}</p>

            <p>Choose which task should receive processor priority.</p>

            {criticalTasks.map((task) => (
                <button key={task} onClick={() => handleTaskChoice(task)}>
                    PRIORITIZE {task.toUpperCase()}
                </button>
            ))}

            {lowerPriorityTasks.map((task) => (
                <button key={task} onClick={() => handleTaskChoice(task)}>
                    PRIORITIZE {task.toUpperCase()}
                </button>
            ))}
            </div>
        )}

        {/* THIRD STAGE: SYSTEM STATUS */}
        {currentStage === 'status' && (
            <div>
            <p>COMPUTER: {computerText}</p>
            <p>{narrationText}</p>
            <p>
                {roundNumber < 3 ? `System Status Check: ${roundNumber} / 2` : 'Final System Check'}
            </p>
            <p>Final Score: {score}</p>
            <p>Final Computer Load: {computerLoad}%</p>
            <p>Risk Level: {riskLevel}</p>
            <p>Recommendation: {recommendation}</p>
            <p>YOU: {userText}</p>

            {roundNumber < 3 ? (
                <>
                <button onClick={() => handleStatusChoice('go')}>GO</button>
                <button onClick={() => handleStatusChoice('abort')}>ABORT</button>
                <button onClick={() => handleStatusChoice('check')}>CHECK STATUS</button>
                </>
            ) : (
                <>
                <button onClick={() => handleStatusChoice('go')}>GO</button>
                <button onClick={() => handleStatusChoice('abort')}>ABORT</button>
                </>
            )}
            </div>
        )}

        {/* FINAL STAGE: ENDING */}
        {currentStage === 'ending' && (
            <div>
            <h2>{finalOutcome}</h2>
            <p>COMPUTER: {computerText}</p>
            <p>{narrationText}</p>
            <p>YOU: {userText}</p>
            <button onClick={restartSimulation}>Restart Simulation</button>
            </div>
        )}
        </section>
    );
    }