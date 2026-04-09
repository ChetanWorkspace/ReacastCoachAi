import React from "react";

const Stats = ({ activeTab }: { activeTab: string }) => {
  const statsData = {
    agency: [
      {
        eyebrow: "Right now",
        num: "1 in 7",
        lbl: "U.S. workers already displaced",
        src: "National University, 2025",
      },
      {
        eyebrow: "By 2030",
        num: "92M",
        lbl: "Jobs projected to be displaced globally",
        src: "WEF Future of Jobs Report 2025",
      },
      {
        eyebrow: "The cost",
        num: "95%",
        lbl: "Less than traditional outplacement programs",
        src: "$116 vs. $1,900 avg · WeAreCareer 2026",
        feat: true,
      },
      {
        eyebrow: "The support",
        num: "4mo",
        lbl: "Of dedicated coaching, from first check-in through integration in your new role",
        src: "Full journey. No drop-off.",
      },
    ],
    individual: [
      {
        eyebrow: "Right now",
        num: "1 in 7",
        lbl: "U.S. workers already displaced by automation",
        src: "National University, 2025",
      },
      {
        eyebrow: "With structured coaching",
        num: "3x",
        lbl: "More likely to find a new role within 90 days",
        src: "Coaching effectiveness research, 2024",
      },
      {
        eyebrow: "Your coach starts",
        num: "Day 1",
        lbl: "From first check-in through integration in your new role",
        src: "Full journey. No drop-off.",
        feat: true,
      },
      {
        eyebrow: "Free trial",
        num: "7 days",
        lbl: "Try RecastCoach free. No credit card required.",
        src: "Cancel anytime.",
      },
    ],
  };

  const currentStats = statsData[activeTab as keyof typeof statsData];

  return (
    <section className="stats" id="how-it-works">
      <div className="stats-grid">
        {currentStats.map((stat, i) => (
          <div key={i} className={`stat ${stat.feat ? "stat-feat" : ""}`}>
            <div className="stat-eye">{stat.eyebrow}</div>
            <div className="stat-num">{stat.num}</div>
            <div className="stat-lbl">{stat.lbl}</div>
            <div className="stat-src">{stat.src}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
