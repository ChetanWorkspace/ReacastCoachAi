import React from "react";

const WioaCompliance = () => {
  const cards = [
    {
      title: "Employment entered",
      desc: "Confirmed at job placement milestone. User-verified with RecastCoach and timestamped.",
    },
    {
      title: "Employment retention, 2nd quarter",
      desc: "30-day post-placement check-in with RecastCoach confirms continued employment status.",
    },
    {
      title: "Median earnings",
      desc: "Collected at placement via salary confirmation. Benchmarked against pre-displacement income.",
    },
    {
      title: "Credential attainment",
      desc: "Logged when a user completes a course or certification through the upskilling pathway.",
    },
    {
      title: "Participation hours",
      desc: "Session time tracked automatically across every coaching interaction, check-in, and activity.",
    },
    {
      title: "Service activity logs",
      desc: "Every interaction, task, and milestone logged with timestamps. Full audit trail, always ready.",
    },
  ];

  return (
    <section className="section-wrap wioa-wrap">
      <div className="wioa-layout">
        {/* Cards now on the left */}
        <div className="wioa-right">
          <div className="wioa-grid">
            {cards.map((card, i) => (
              <div key={i} className="wioa-card">
                <div className="wioa-check">
                  <svg viewBox="0 0 10 10" fill="none">
                    <polyline
                      points="1.5,5 4,7.5 8.5,2.5"
                      stroke="#fff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <div className="wioa-title">{card.title}</div>
                  <div className="wioa-desc">{card.desc}</div>
                  <div className="auto-tag">auto-captured</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Text now on the right */}
        <div className="wioa-left">
          <span className="section-label">WIOA compliance</span>
          <h2 className="section-heading">The Six WIOA Outcomes.</h2>
          <p className="section-sub" style={{ marginBottom: "24px" }}>
            Clean reports. Accessible anytime. RecastCoach captures the six
            outcomes your program works hardest to deliver so you can focus on
            the people, not the paperwork.
          </p>
          <div className="wioa-callout-card">
            <h3>No scrambling at reporting time.</h3>
            <p>
              Your program dashboard shows real-time progress across all six
              outcomes for every participant, updated automatically as users
              engage with their coach.
            </p>
          </div>
          <div className="wioa-export-card">
            <div style={{ flex: 1 }}>
              <div className="wioa-export-label">
                Export your compliance report anytime.
              </div>
              <div className="wioa-export-sub">
                Formatted to federal reporting standards. Ready to submit.
              </div>
            </div>
            <div className="export-btns">
              <div className="ebtn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "8px", opacity: 0.7 }}>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                CSV
              </div>
              <div className="ebtn primary">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "8px" }}>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <path d="M12 18v-6"></path>
                  <path d="m9 15 3 3 3-3"></path>
                </svg>
                PDF Report
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WioaCompliance;
