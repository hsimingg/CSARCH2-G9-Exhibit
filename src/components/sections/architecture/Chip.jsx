import { useState } from "react";
import { nodes } from "./data";

export default function Chip() {

    const [selected, setSelected] = useState(nodes[0]);

    return (

        <div className="architecture-layout">

            <div className="chip-container">

                <div className="chip">
                    AGC
                </div>

                {nodes.map(node => (

                    <button

                        key={node.id}

                        className={`chip-node ${selected.id === node.id ? "active" : ""}`}

                        style={node.position}

                        onClick={() => setSelected(node)}

                    />

                ))}

            </div>

            <div className="info-panel">

                <h3>{selected.title}</h3>

                <p>{selected.content}</p>

                <div className="takeaway">

                    <h4>Key Takeaway</h4>

                    <p>{selected.takeaway}</p>

                </div>

            </div>

        </div>

    );

}