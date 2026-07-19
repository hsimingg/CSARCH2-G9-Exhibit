import React, { useState } from 'react';

export default function ConstellationTimeline() {
  const [activeStep, setActiveStep] = useState(-1);


  const events = [
    { 
      id: 0, x: 8, y: 80, title: "1. Lunar Descent Begins", 
      desc: "The Apollo 11 Lunar Module initiates its Powered Descent. The Apollo Guidance Computer manages complex real-time calculations to guide the module.",
      popupStyle: { bottom: '35px', left: '0px' } 
    },
    { 
      id: 1, x: 26, y: 20, title: "2. Unexpected Workload", 
      desc: "A hardware radar switch left in the wrong position feeds useless pulses into the system, 'stealing' critical processing cycles from the AGC.",
      popupStyle: { top: '35px', left: '-20px' } 
    },
    { 
      id: 2, x: 44, y: 80, title: "3. 1201/1202 Alarms", 
      desc: "The AGC triggers the 1202 'Executive Overflow' alarm. It runs out of memory space and drops lower-priority background jobs to survive.",
      popupStyle: { bottom: '35px', left: '-20px' } 
    },
    { 
      id: 3, x: 62, y: 20, title: "4. Mission Control Evaluates", 
      desc: "Flight controllers evaluate the situation. Because the AGC used preemptive priority scheduling, it intentionally sheds unimportant tasks.",
      popupStyle: { top: '35px', left: '-160px' } 
    },
    { 
      id: 4, x: 80, y: 80, title: "5. The 'GO' Signal", 
      desc: "Trusting the priority-based error recovery, computer specialists confidently tell the Flight Director, 'We're Go on that alarm.'",
      popupStyle: { bottom: '35px', left: '-100px' } 
    },
    { 
      id: 5, x: 96, y: 20, title: "6. Eagle Lands", 
      desc: "Critical guidance never fails. Commander Neil Armstrong avoids a boulder field, and the Eagle lands safely.",
      popupStyle: { top: '35px', right: '0px' } 
    }
  ];

  const handleStarClick = (id) => {
    if (id === activeStep + 1) {
      setActiveStep(id);
    }
  };

   {/* Outer wrapper for mobile horizontal scrolling */}
   <div style={{ 
     width: '100%', 
     overflowX: 'auto', 
     WebkitOverflowScrolling: 'touch', 
     paddingBottom: '20px' 
    }}></div>


return (
    <div style={{ width: '100%', margin: '2rem 0' }}>

      {/* HORIZONTAL SCROLL WRAPPER */}
      <div style={{ 
        width: '100%', 
        overflowX: 'auto', 
        WebkitOverflowScrolling: 'touch', 
        paddingBottom: '20px' 
      }}>
        
        {/* INNER TIMELINE CONTAINER */}
        <div className="card timeline-container" style={{ 
          position: 'relative', 
          width: '100%', 
          minWidth: '1000px', 
          height: '700px', 
          padding: 'var(--space-md)', 
          overflow: 'hidden'
        }}>
          
          {/* Connecting Lines */}
          <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
            {events.map((ev, index) => {
              if (index === 0) return null;
              const prev = events[index - 1];
              const isConnected = activeStep >= index;
              return (
                <line 
                  key={`line-${index}`}
                  x1={`${prev.x}%`} y1={`${prev.y}%`}
                  x2={`${ev.x}%`} y2={`${ev.y}%`}
                  stroke={isConnected ? "var(--amber)" : "var(--border)"}
                  strokeWidth={isConnected ? "4" : "2"}
                  style={{ transition: "stroke 1s ease-in-out" }}
                />
              );
            })}
          </svg>
          
        {/* Render Stars & Popups */}
          {events.map((ev, index) => {
            const isVisited = activeStep >= index;
            const isNext = activeStep + 1 === index;

            return (
              <div key={ev.id} style={{ position: 'absolute', left: `${ev.x}%`, top: `${ev.y}%` }}>
                
                {/* Clickable Star */}
                <button 
                  onClick={() => handleStarClick(ev.id)}
                  className={`${isVisited ? 'star-glow' : ''} ${isNext ? 'star-flash' : ''}`}
                  style={{
                    position: 'absolute', 
                    transform: 'translate(-50%, -50%)', 
                    zIndex: isNext ? 10 : 5,
                    width: '32px', 
                    height: '32px', 
                    backgroundColor: 'transparent',
                    border: 'none',
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: isNext ? 'pointer' : 'default',
                    transition: 'var(--transition)'
                  }}
                  aria-label={ev.title}
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    style={{ width: '100%', height: '100%', overflow: 'visible' }}
                  >
                    <path 
                      d="M 12 2 Q 13 11 22 12 Q 13 13 12 22 Q 11 13 2 12 Q 11 11 12 2 Z"
                      fill={isVisited ? 'var(--amber)' : (isNext ? 'var(--primary-light)' : 'var(--bg-primary)')} 
                      stroke="var(--text-primary)"
                      strokeWidth="1.5"
                    />
                  </svg>
                </button>

                {/* Event Info Card */}
                {isVisited && (
                  <div 
                    className="card-popup border"
                    style={{
                      position: 'absolute', 
                      ...ev.popupStyle, 
                      width: '220px', 
                      backgroundColor: 'var(--bg-secondary)',
                      padding: 'var(--space-sm)', 
                      borderRadius: 'var(--radius-sm)', 
                      zIndex: 200, 
                      boxShadow: 'var(--shadow-md)'
                    }}
                  >
                    <h4 style={{ margin: '0 0 var(--space-xs) 0', color: 'var(--amber)', fontSize: '0.9rem' }}>{ev.title}</h4>
                    <p style={{ margin: 0, fontSize: '0.8rem', lineHeight: '1.4' }}>{ev.desc}</p>
                  </div>
                )}
              </div>
            );
          })}

          {/* Rocket Icon */}
          <div 
            className="rocket-transition"
            style={{
              position: 'absolute',
              left: `${activeStep >= 0 ? events[activeStep].x : events[0].x}%`,
              top: `${activeStep >= 0 ? events[activeStep].y : events[0].y}%`,
              transform: 'translate(-50%, -50%) rotate(45deg)',
              fontSize: '2rem', 
              zIndex: 50, 
              pointerEvents: 'none'
            }}
          >
            🚀
          </div>

        </div>
      </div>
    </div>
  );
}