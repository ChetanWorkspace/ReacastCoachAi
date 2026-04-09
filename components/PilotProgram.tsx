import React from "react";

const PilotProgram = () => {
  const features = [
    "100 seats",
    "4 months of daily career coaching",
    "All 6 WIOA outcomes tracked",
    "Sponsor dashboard included",
    "Compliance reports on demand",
    "Month-to-month continuation at $29/month after month 4",
  ];

  return (
    <section className="section-wrap pilot-wrap">
      <div className="pilot-inner">
        <div className="pilot-intro">
          <span className="section-label">The pilot program</span>
          <h2 className="section-heading">
            A complete coaching program at a fraction of the cost.
          </h2>
        </div>
        <div className="pilot-card">
          <div className="pilot-flex">
            {/* Left: The Program Context */}
            <div className="p-col-left">
              <div className="pilot-eyebrow">The RecastCoach Pilot Program</div>
              <div className="pilot-divider"></div>
              <div className="pilot-human">
                That&apos;s $29 a month to give a displaced worker their{" "}
                <em>confidence</em>, their <em>direction</em>, and their{" "}
                <em>next chapter</em>.
              </div>
              <div className="pilot-program">
                A 4-month AI career coaching program. 100 participants. One
                cohort.
              </div>
              <div className="pilot-features">
                {features.map((feat, i) => (
                  <div key={i} className="pfeat">
                    <div className="pfeat-dot"></div>
                    {feat}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: The Offer & Comparison */}
            <div className="p-col-right">
              <div className="pilot-price-box-main">
                <div className="pilot-price-row">
                  <div className="pilot-price-num">$116</div>
                  <div className="pilot-price-detail">per person</div>
                </div>
              </div>

              <div className="pilot-comparison">
                <div className="comp-label">How it compares</div>
                <div className="comp-flex">
                  <div className="comp-item ours">
                    <div className="comp-p">$116</div>
                    <div className="comp-val">RecastCoach pilot · per person, 4 months</div>
                  </div>
                  <div className="comp-vs">vs.</div>
                  <div className="comp-item theirs">
                    <div className="comp-p">$1,900</div>
                    <div className="comp-val">Industry average · outplacement, per person</div>
                  </div>
                </div>
                <div className="comp-summary">
                  Daily AI career coaching. WIOA outcome tracking. Four months of dedicated support. For less than 7% of what traditional programs charge.
                </div>
              </div>

              <div className="pilot-cta-wrap">
                <a href="#contact" className="pilot-cta">
                  Request a pilot conversation
                </a>
                <div className="pilot-cta-sub">
                  No commitment. No pitch deck. Just a conversation about what this looks like for your program.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pilot-integration">
          <div className="pint-label">The full journey. No drop-off.</div>
          <div className="pint-heading">
            Four months that follow the person, not the schedule.
          </div>
          <div className="pint-body">
            Whether someone lands a new role in week three or month four,
            RecastCoach keeps going. The coaching shifts from job search to
            career integration, covering workplace dynamics, team relationships,
            manager communication, and how to navigate a new environment. That
            directly supports the WIOA 2nd quarter retention metric. Getting
            hired and staying hired are two different things, and your program
            should get credit for both.
          </div>
        </div>
      </div>
    </section>
  );
};

export default PilotProgram;
