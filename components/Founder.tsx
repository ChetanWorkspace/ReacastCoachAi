import React from "react";

const Founder = () => {
  return (
    <section className="section-wrap founder-wrap">
      <div className="founder-inner">
        <div className="founder-portrait float-a">
          <div className="founder-initials">CM</div>
          <div className="founder-stat">
            <div className="founder-stat-num">3,000+</div>
            <div className="founder-stat-lbl">Placements</div>
          </div>
        </div>
        <div className="founder-right">
          <span className="section-label">The mission behind the platform</span>
          <h2 className="section-heading">
            Built by someone who has done this before.
          </h2>
          <p className="founder-body">
            RecastCoach.ai was founded by <strong>Christi McAdams</strong>, a
            workforce specialist who ran job placement programs during COVID-19
            and helped more than 3,000 displaced workers find their next role.
            She built RecastCoach because she saw what people actually need
            during a career transition. Not a job listing. A coach who knows
            their name, understands what they&apos;re going through, and shows up
            every day. RecastCoach is that coach, available to every person in
            your program, for far less than traditional outplacement costs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Founder;
