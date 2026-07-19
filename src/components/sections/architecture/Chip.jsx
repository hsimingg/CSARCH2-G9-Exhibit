import { useState } from "react";
import { nodes } from "./data.jsx";

// Each side just needs a pin count — CSS flexbox spaces them evenly,
// so no per-pin left/top math has to live here.
const PIN_SIDES = ["top", "right", "bottom", "left"];
const PINS_PER_SIDE = 15;

function ChipPins({ side, count }) {
    return (
        <div className={`chip-pins chip-pins-${side}`} aria-hidden="true">
            {Array.from({ length: count }, (_, i) => (
                <span key={i} className="chip-pin" />
            ))}
        </div>
    );
}

// Circuit traces as a single SVG layer, viewBox 0-100 so coordinates
// read as plain percentages. Each entry is one path (chip edge -> bend
// -> endpoint) plus the node that sits at its tip, so a line and its
// dot can never end up out of sync.
const traces = [
    { d: "M 33.5 29 L 33.5 9 L 14 9", gold: true }, // endpoint: [14, 9]
    { d: "M 50 29 L 50 0", gold: true }, // endpoint: [50,0], 
    { d: "M 66.5 29 L 66.5 15 L 88 15", endpoint: [88, 15] },
    { d: "M 71 43 L 99 43", gold: true }, //  endpoint: [99, 43],
    { d: "M 71 60 L 92 60 L 92 80", endpoint: [92, 80] },
    { d: "M 62 71 L 62 94 L 82 94", gold: true }, // endpoint: [82, 94],
    { d: "M 38 71 L 38 96", endpoint: [38, 96] },
    { d: "M 29 60 L 6 60 L 6 80", gold: true }, // endpoint: [6, 80], 
    { d: "M 40 34 L 1 34", endpoint: [1, 34] },

];

export default function Chip() {
    const [selected, setSelected] = useState(null);

    const closePanel = () => setSelected(null);

    return (
        <div className="architecture-layout">
            <div className="chip-container">

                <svg className="chip-traces" viewBox="0 0 100 100" aria-hidden="true">
                    {traces.map((trace, i) => (
                        <g key={i}>
                            <path d={trace.d} className={`chip-trace-path ${trace.gold ? "gold" : ""}`} />
                            {trace.endpoint && (
                                <circle cx={trace.endpoint[0]} cy={trace.endpoint[1]} r="3" className="chip-trace-node" />
                            )}
                        </g>
                    ))}
                </svg>



                <h1 className="chip">AGC</h1>

                {nodes.map((node) => (
                    <button
                        key={node.id}
                        className={`chip-node ${selected?.id === node.id ? "active" : ""} ${selected?.id !== node.id ? "hinted" : ""}`}
                        style={node.position}
                        onClick={() => setSelected(selected?.id === node.id ? null : node)}
                        aria-label={node.title}
                    />
                ))}

                {PIN_SIDES.map((side) => (
                    <ChipPins key={side} side={side} count={PINS_PER_SIDE} />
                ))}

            </div>

            <div
                className={`info-overlay ${selected ? "is-open" : ""}`}
                onClick={closePanel}
                aria-hidden={selected ? "false" : "true"}
            >
                <div className="info-panel" onClick={(event) => event.stopPropagation()}>
                    <div className="info-panel-content" key={selected?.id || 'empty'}>
                        {selected ? (
                            <>
                                <h3>{selected.title}</h3>
                                <p className="info-panel-short">{selected.short}</p>
                                <p>{selected.content}</p>
                                <div className="takeaway">
                                    <h4>Key Takeaway & Relevance to the Mission</h4>
                                    <p>{selected.takeaway}</p>
                                </div>
                            </>
                        ) : (
                            <div className="info-panel-empty">
                                <p className="info-panel-hint">
                                    Select a yellow node to learn more about Apollo 11's
                                    AGC architecture!
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
