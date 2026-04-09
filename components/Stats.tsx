import React from "react";

const Stats = () => {
  return (
    <section className="stats" id="how-it-works">
      <div className="stats-grid">
        <div className="stat">
          <div className="stat-eye">Right now</div>
          <div className="stat-num">1 in 7</div>
          <div className="stat-lbl">U.S. workers already displaced</div>
          <div className="stat-src">National University, 2025</div>
        </div>
        <div className="stat">
          <div className="stat-eye">By 2030</div>
          <div className="stat-num">92M</div>
          <div className="stat-lbl">Jobs projected to be displaced globally</div>
          <div className="stat-src">WEF Future of Jobs Report 2025</div>
        </div>
        <div className="stat stat-feat">
          <div className="stat-eye">The cost</div>
          <div className="stat-num">95%</div>
          <div className="stat-lbl">
            Less than traditional outplacement programs
          </div>
          <div className="stat-src">$116 vs. $1,900 avg · WeAreCareer 2026</div>
        </div>
        <div className="stat">
          <div className="stat-eye">The support</div>
          <div className="stat-num">4mo</div>
          <div className="stat-lbl">
            Of dedicated coaching, from first check-in through integration in
            your new role
          </div>
          <div className="stat-src">Full journey. No drop-off.</div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
