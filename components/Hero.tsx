"use client";

import React, { useState } from "react";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("agency");
  const [mood, setMood] = useState(4); // 1-5

  const moodData: Record<number, { greeting: string; response: string; user: string; xp: string }> = {
    1: {
      greeting: "Rough morning? I hear you. Let's look at things differently.",
      response:
        "A 1 is just a starting point. Let's start with a simple grounding exercise.",
      user: "Okay, I'll try.",
      xp: "🌱 New start · 0 streak",
    },
    2: {
      greeting: "Waking up slowly. That is perfectly fine. The momentum will come.",
      response:
        "A 2 means we take it one step at a time today. No pressure, just progress.",
      user: "One step at a time.",
      xp: "⛅ Finding pace · 2-day streak",
    },
    3: {
      greeting: "Middle of the road. Let's find that extra 1 percent today.",
      response:
        "A 3 is a solid base. We'll identify one key task to conquer today.",
      user: "I'm ready to focus.",
      xp: "✨ Stable · 7-day streak",
    },
    4: {
      greeting: "Good morning. How are you feeling today on a scale of 1 to 5?",
      response:
        "A 4, and momentum is exactly what builds on it. Ready for today's plan?",
      user: "Let's do this.",
      xp: " 🔥 14-day streak · 847 XP",
    },
    5: {
      greeting: "You're on fire today! Let's channel that energy into something big.",
      response:
        "A 5! Your superpower is active. Ready to knock out the full plan?",
      user: "Absolutely!",
      xp: "⚡ Peak energy · 21-day streak",
    },
  };

  const currentMoodContent = moodData[mood];

  return (
    <section className="hero">
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.09,
          pointerEvents: "none",
          zIndex: 1,
        }}
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="#12A892" fill="none" strokeWidth="0.8">
          <path d="M0 180 Q150 158 300 183 Q450 208 600 186 Q750 164 900 188 Q1050 212 1200 192" />
          <path d="M0 220 Q150 200 300 222 Q450 244 600 224 Q750 204 900 226 Q1050 248 1200 230" />
          <path d="M0 140 Q150 120 300 143 Q450 166 600 146 Q750 126 900 148 Q1050 170 1200 152" />
          <path d="M0 260 Q150 242 300 262 Q450 282 600 264 Q750 246 900 266 Q1050 286 1200 270" />
          <path d="M0 100 Q150 82 300 104 Q450 126 600 108 Q750 90 900 110 Q1050 130 1200 114" />
          <path d="M0 300 Q150 284 300 302 Q450 320 600 304 Q750 288 900 306 Q1050 324 1200 310" />
          <path d="M0 60 Q150 44 300 64 Q450 84 600 68 Q750 52 900 70 Q1050 88 1200 74" />
          <path d="M0 340 Q150 326 300 342 Q450 358 600 344 Q750 330 900 346 Q1050 362 1200 350" />
          <path d="M0 380 Q150 368 300 382 Q450 396 600 384 Q750 372 900 386 Q1050 400 1200 390" />
          <path d="M0 420 Q150 410 300 422 Q450 434 600 424 Q750 414 900 426 Q1050 438 1200 430" />
          <path d="M0 460 Q150 452 300 462 Q450 472 600 464 Q750 456 900 466 Q1050 476 1200 470" />
          <path d="M0 500 Q150 494 300 502 Q450 510 600 504 Q750 498 900 506 Q1050 514 1200 510" />
          <path d="M0 20 Q150 6 300 24 Q450 42 600 28 Q750 14 900 30 Q1050 46 1200 34" />
        </g>
        <g stroke="#12A892" fill="none" strokeWidth="0.5" strokeOpacity="0.5">
          <line x1="300" y1="0" x2="300" y2="600" />
          <line x1="600" y1="0" x2="600" y2="600" />
          <line x1="900" y1="0" x2="900" y2="600" />
          <line x1="150" y1="0" x2="150" y2="600" />
          <line x1="450" y1="0" x2="450" y2="600" />
          <line x1="750" y1="0" x2="750" y2="600" />
          <line x1="1050" y1="0" x2="1050" y2="600" />
          <line x1="0" y1="150" x2="1200" y2="150" />
          <line x1="0" y1="300" x2="1200" y2="300" />
          <line x1="0" y1="450" x2="1200" y2="450" />
        </g>
        <g stroke="#12A892" fill="none" transform="translate(600,280)">
          <circle cx="0" cy="0" r="180" strokeWidth="0.6" />
          <circle cx="0" cy="0" r="144" strokeWidth="0.5" />
          <circle cx="0" cy="0" r="108" strokeWidth="0.8" />
          <circle cx="0" cy="0" r="72" strokeWidth="0.5" />
          <circle cx="0" cy="0" r="36" strokeWidth="0.5" />
          <circle cx="0" cy="0" r="14" strokeWidth="0.5" />
          <line x1="0" y1="-180" x2="0" y2="180" strokeWidth="0.6" />
          <line x1="-180" y1="0" x2="180" y2="0" strokeWidth="0.6" />
          <line x1="-127" y1="-127" x2="127" y2="127" strokeWidth="0.4" />
          <line x1="127" y1="-127" x2="-127" y2="127" strokeWidth="0.4" />
          <line x1="-69" y1="-166" x2="69" y2="166" strokeWidth="0.3" />
          <line x1="69" y1="-166" x2="-69" y2="166" strokeWidth="0.3" />
          <line x1="-166" y1="-69" x2="166" y2="69" strokeWidth="0.3" />
          <line x1="-166" y1="69" x2="166" y2="-69" strokeWidth="0.3" />
          <polygon points="0,-180 7,-42 0,-58 -7,-42" fill="#12A892" />
          <polygon
            points="0,180 -7,42 0,58 7,42"
            fill="#12A892"
            fillOpacity="0.5"
          />
          <polygon
            points="180,0 42,7 58,0 42,-7"
            fill="#12A892"
            fillOpacity="0.45"
          />
          <polygon
            points="-180,0 -42,-7 -58,0 -42,7"
            fill="#12A892"
            fillOpacity="0.45"
          />
          <polygon
            points="127,-127 38,-28 30,-38 42,-42"
            fill="#E8572A"
            fillOpacity="0.7"
          />
          <polygon
            points="-127,127 -38,28 -42,42 -30,38"
            fill="#12A892"
            fillOpacity="0.35"
          />
          <polygon
            points="-127,-127 -28,-38 -42,-42 -38,-28"
            fill="#12A892"
            fillOpacity="0.35"
          />
          <polygon
            points="127,127 28,38 42,42 38,28"
            fill="#12A892"
            fillOpacity="0.35"
          />
          <circle
            cx="0"
            cy="0"
            r="9"
            fill="#0D2B3E"
            stroke="#12A892"
            strokeWidth="0.8"
          />
          <circle cx="0" cy="0" r="4" fill="#12A892" fillOpacity="0.8" />
          <text
            x="0"
            y="-192"
            fontFamily="Georgia,serif"
            fontSize="16"
            fill="#12A892"
            textAnchor="middle"
            fontStyle="italic"
          >
            N
          </text>
          <text
            x="192"
            y="6"
            fontFamily="Georgia,serif"
            fontSize="13"
            fill="#12A892"
            textAnchor="middle"
          >
            E
          </text>
          <text
            x="0"
            y="208"
            fontFamily="Georgia,serif"
            fontSize="13"
            fill="#12A892"
            textAnchor="middle"
          >
            S
          </text>
          <text
            x="-192"
            y="6"
            fontFamily="Georgia,serif"
            fontSize="13"
            fill="#12A892"
            textAnchor="middle"
          >
            W
          </text>
          <text
            x="136"
            y="-132"
            fontFamily="Georgia,serif"
            fontSize="11"
            fill="#12A892"
            textAnchor="middle"
          >
            NE
          </text>
          <text
            x="-136"
            y="-132"
            fontFamily="Georgia,serif"
            fontSize="11"
            fill="#12A892"
            textAnchor="middle"
          >
            NW
          </text>
          <text
            x="136"
            y="140"
            fontFamily="Georgia,serif"
            fontSize="11"
            fill="#12A892"
            textAnchor="middle"
          >
            SE
          </text>
          <text
            x="-136"
            y="140"
            fontFamily="Georgia,serif"
            fontSize="11"
            fill="#12A892"
            textAnchor="middle"
          >
            SW
          </text>
        </g>
        <g stroke="#12A892" fill="none" transform="translate(1060,80)" strokeOpacity="0.7">
          <circle cx="0" cy="0" r="32" strokeWidth="0.5" />
          <circle cx="0" cy="0" r="22" strokeWidth="0.4" />
          <line x1="0" y1="-32" x2="0" y2="32" strokeWidth="0.4" />
          <line x1="-32" y1="0" x2="32" y2="0" strokeWidth="0.4" />
          <line x1="-23" y1="-23" x2="23" y2="23" strokeWidth="0.3" />
          <line x1="23" y1="-23" x2="-23" y2="23" strokeWidth="0.3" />
          <polygon
            points="0,-32 3,-9 0,-14 -3,-9"
            fill="#12A892"
            fillOpacity="0.7"
          />
          <polygon points="0,32 -3,9 0,14 3,9" fill="#12A892" fillOpacity="0.4" />
          <polygon points="32,0 9,3 14,0 9,-3" fill="#12A892" fillOpacity="0.4" />
          <polygon
            points="-32,0 -9,-3 -14,0 -9,3"
            fill="#12A892"
            fillOpacity="0.4"
          />
          <polygon
            points="23,-23 7,-5 5,-7 9,-9"
            fill="#E8572A"
            fillOpacity="0.5"
          />
        </g>
        <g fill="#12A892" fillOpacity="0.4">
          <circle cx="300" cy="150" r="2.5" />
          <circle cx="600" cy="300" r="2.5" />
          <circle cx="900" cy="450" r="2.5" />
          <circle cx="450" cy="150" r="2" />
          <circle cx="750" cy="300" r="2" />
          <circle cx="150" cy="300" r="2" />
          <circle cx="1050" cy="150" r="2" />
        </g>
      </svg>

      <div className="hero-inner">
        <div className="hero-left fade-up">
          <div className="hero-header">
            <div className="hero-eyebrow">RecastCoach.ai</div>
            <div className="hero-tabs">
              <button
                className={`hero-tab ${activeTab === "agency" ? "active" : ""}`}
                onClick={() => setActiveTab("agency")}
              >
                Agency
              </button>
              <button
                className={`hero-tab ${activeTab === "individual" ? "active" : ""
                  }`}
                onClick={() => setActiveTab("individual")}
              >
                Individual
              </button>
            </div>
          </div>

          <div 
            className="hero-content" 
            style={{ 
              display: "grid", 
              gridTemplateColumns: "1fr", 
              gridTemplateRows: "1fr",
              minHeight: "360px"
            }}
          >
            {/* Agency Content */}
            <div
              style={{
                gridArea: "1/1",
                opacity: activeTab === "agency" ? 1 : 0,
                visibility: activeTab === "agency" ? "visible" : "hidden",
                transform: `translateX(${activeTab === "agency" ? "0" : "-20px"})`,
                transition: "all 0.6s cubic-bezier(0.19, 1, 0.22, 1)",
                pointerEvents: activeTab === "agency" ? "auto" : "none",
                display: "flex",
                flexDirection: "column"
              }}
            >
              <h1 id="hero-h1" className="hero-h1">
                Millions of U.S. workers have lost their jobs to automation.
                <br />
                Another job board won&apos;t help them.
                <br />
                <em>A dedicated career coach will.</em>
              </h1>
              <p className="hero-sub">
                RecastCoach gives every participant in your program a personal
                AI career coach. Daily check-ins, resume rebuilding, interview
                prep, and all six WIOA outcome metrics tracked automatically.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="hero-cta-primary">
                  Request a pilot conversation
                </a>
                <a href="#how-it-works" className="hero-cta-secondary">
                  See how it works &rarr;
                </a>
              </div>
            </div>

            {/* Individual Content */}
            <div
              style={{
                gridArea: "1/1",
                opacity: activeTab === "individual" ? 1 : 0,
                visibility: activeTab === "individual" ? "visible" : "hidden",
                transform: `translateX(${activeTab === "individual" ? "0" : "20px"})`,
                transition: "all 0.6s cubic-bezier(0.19, 1, 0.22, 1)",
                pointerEvents: activeTab === "individual" ? "auto" : "none",
                display: "flex",
                flexDirection: "column"
              }}
            >
              <h1 id="hero-h1" className="hero-h1">
                You didn&apos;t see this coming.
                <br />
                But your next chapter is
                <br />
                <em>closer than you think.</em>
              </h1>
              <p className="hero-sub">
                RecastCoach gives you a personal AI career coach, available
                every morning, built entirely around you. Daily check-ins.
                Resume rebuilding. Interview prep. Breathwork for the hard
                days. Support through your job search and into your new role.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="hero-cta-primary">
                   Save my spot
                </a>
                <a href="#how-it-works" className="hero-cta-secondary">
                  Learn how it works &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="visual-stack">
            {/* Agency Card (Behind) */}
            <div
              className="platform-back"
              style={{
                opacity: activeTab === "agency" ? 1 : 0,
                visibility: activeTab === "agency" ? "visible" : "hidden",
                transform: `translateY(${activeTab === "agency" ? "0" : "15px"}) scale(${activeTab === "agency" ? 1 : 0.98})`,
                transition: "all 0.7s cubic-bezier(0.19, 1, 0.22, 1)",
                pointerEvents: activeTab === "agency" ? "auto" : "none",
                position: "relative",
                zIndex: activeTab === "agency" ? 2 : 1,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "32px",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--teal-bright)",
                      fontWeight: 800,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      marginBottom: "4px",
                    }}
                  >
                    Live Cohort Status
                  </div>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: 700,
                      color: "var(--white)",
                      fontFamily: "var(--serif)",
                    }}
                  >
                    Active Placements
                  </div>
                </div>
                <div
                  style={{
                    padding: "8px 16px",
                    background: "rgba(18,168,146,0.1)",
                    border: "1px solid rgba(18,168,146,0.2)",
                    borderRadius: "12px",
                    color: "var(--teal-bright)",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                  }}
                >
                  +12.4%
                </div>
              </div>

              <div
                style={{
                  height: "80px",
                  display: "flex",
                  alignItems: "flex-end",
                  gap: "6px",
                  marginBottom: "40px",
                }}
              >
                <div style={{ flex: 1, height: "40%", background: "rgba(255,255,255,0.05)", borderRadius: "4px" }}></div>
                <div style={{ flex: 1, height: "60%", background: "rgba(255,255,255,0.08)", borderRadius: "4px" }}></div>
                <div style={{ flex: 1, height: "50%", background: "rgba(255,255,255,0.06)", borderRadius: "4px" }}></div>
                <div style={{ flex: 1, height: "80%", background: "rgba(18,168,146,0.25)", borderRadius: "4px", boxShadow: "0 0 15px rgba(18,168,146,0.2)" }}></div>
                <div style={{ flex: 1, height: "65%", background: "rgba(255,255,255,0.07)", borderRadius: "4px" }}></div>
                <div style={{ flex: 1, height: "90%", background: "var(--teal-bright)", borderRadius: "4px", boxShadow: "0 0 20px rgba(18,168,146,0.3)" }}></div>
                <div style={{ flex: 1, height: "75%", background: "rgba(255,255,255,0.06)", borderRadius: "4px" }}></div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1px 1fr", gap: "24px", marginTop: "auto" }}>
                <div style={{ background: "rgba(255,255,255,0.1)", width: "1px" }}></div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
                  <div>
                    <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.4)", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Retention</div>
                    <div style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--white)" }}>94.8%</div>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.4)", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Engagement</div>
                    <div style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--white)" }}>82%</div>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.4)", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.05em" }}>ROI</div>
                    <div style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--white)" }}>4.2x</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Individual Card (Behind) */}
            <div
              className="platform-back"
              style={{
                opacity: activeTab === "individual" ? 1 : 0,
                visibility: activeTab === "individual" ? "visible" : "hidden",
                transform: `translateY(${activeTab === "individual" ? "0" : "15px"}) scale(${activeTab === "individual" ? 1 : 0.98})`,
                transition: "all 0.7s cubic-bezier(0.19, 1, 0.22, 1)",
                pointerEvents: activeTab === "individual" ? "auto" : "none",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: activeTab === "individual" ? 2 : 1,
                borderColor: "rgba(232, 87, 42, 0.15)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "32px",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--coral)",
                      fontWeight: 800,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      marginBottom: "4px",
                    }}
                  >
                    My Growth Journey
                  </div>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: 700,
                      color: "var(--white)",
                      fontFamily: "var(--serif)",
                    }}
                  >
                    Confidence Index
                  </div>
                </div>
                <div
                  style={{
                    padding: "8px 16px",
                    background: "rgba(232, 87, 42, 0.1)",
                    border: "1px solid rgba(232, 87, 42, 0.2)",
                    borderRadius: "12px",
                    color: "var(--coral)",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                  }}
                >
                  +6.2%
                </div>
              </div>

              <div
                style={{
                  height: "80px",
                  display: "flex",
                  alignItems: "flex-end",
                  gap: "6px",
                  marginBottom: "40px",
                }}
              >
                <div style={{ flex: 1, height: "30%", background: "rgba(255,255,255,0.05)", borderRadius: "4px" }}></div>
                <div style={{ flex: 1, height: "45%", background: "rgba(255,255,255,0.08)", borderRadius: "4px" }}></div>
                <div style={{ flex: 1, height: "60%", background: "rgba(255,255,255,0.06)", borderRadius: "4px" }}></div>
                <div style={{ flex: 1, height: "75%", background: "rgba(232, 87, 42, 0.2)", borderRadius: "4px" }}></div>
                <div style={{ flex: 1, height: "90%", background: "var(--coral)", borderRadius: "4px", boxShadow: "0 0 20px rgba(232, 87, 42, 0.3)" }}></div>
                <div style={{ flex: 1, height: "80%", background: "rgba(255,255,255,0.07)", borderRadius: "4px" }}></div>
                <div style={{ flex: 1, height: "85%", background: "rgba(255,255,255,0.06)", borderRadius: "4px" }}></div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1px 1fr", gap: "24px", marginTop: "auto" }}>
                <div style={{ background: "rgba(255,255,255,0.1)", width: "1px" }}></div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
                  <div>
                    <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.4)", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Resumes</div>
                    <div style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--white)" }}>4</div>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.4)", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Network</div>
                    <div style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--white)" }}>18</div>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.4)", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Score</div>
                    <div style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--white)" }}>92%</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-phone">
              <div className="phone-top-bar">
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "8px",
                    background:
                      "linear-gradient(135deg, var(--teal), var(--teal-bright))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--serif)",
                    fontSize: "0.75rem",
                    color: "var(--white)",
                    fontWeight: 700,
                    boxShadow: "0 6px 12px rgba(14,124,110,0.3)",
                  }}
                >
                  R
                </div>
                <div
                  className="phone-title"
                  style={{ fontSize: "0.85rem", letterSpacing: "0.02em" }}
                >
                  {activeTab === "agency"
                    ? "RecastCoach, your career coach"
                    : "RecastCoach, your coach"}
                </div>
              </div>
              <div className="phone-body">
                <div style={{ display: "grid", gridTemplateColumns: "1fr", gridTemplateRows: "1fr", minHeight: "330px" }}>
                  {/* Agency Phone Content */}
                  <div
                    style={{
                      gridArea: "1/1",
                      opacity: activeTab === "agency" ? 1 : 0,
                      visibility: activeTab === "agency" ? "visible" : "hidden",
                      transition: "all 0.4s ease",
                      pointerEvents: activeTab === "agency" ? "auto" : "none",
                    }}
                  >
                    <div className="phone-bubble-m">
                      {currentMoodContent.greeting}
                    </div>
                    <div className="phone-mood">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <div
                          key={n}
                          className={`mood-circle ${mood === n ? "active" : ""}`}
                          onClick={() => setMood(n)}
                        >
                          {n}
                        </div>
                      ))}
                    </div>
                    <div className="phone-bubble-m">
                      {currentMoodContent.response}
                    </div>
                    <div className="phone-bubble-u">
                      {currentMoodContent.user}
                    </div>
                    <div className="phone-xp">{currentMoodContent.xp}</div>
                  </div>

                  {/* Individual Phone Content */}
                  <div
                    style={{
                      gridArea: "1/1",
                      opacity: activeTab === "individual" ? 1 : 0,
                      visibility: activeTab === "individual" ? "visible" : "hidden",
                      transition: "all 0.4s ease",
                      pointerEvents: activeTab === "individual" ? "auto" : "none"
                    }}
                  >
                    <div className="phone-bubble-m">
                      Good morning. How are you feeling today, honestly?
                    </div>
                    <div className="phone-bubble-u">
                      Honestly? Scared. But I showed up.
                    </div>
                    <div className="phone-bubble-m">
                      That&apos;s enough. Let&apos;s build on that. You have three
                      things on your list today. Want to start with the one that
                      feels most doable?
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
