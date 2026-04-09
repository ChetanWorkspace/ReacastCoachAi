"use client";

import React, { useState } from "react";

const Carousel = () => {
  const [cur, setCur] = useState(0);
  const [momentumMood, setMomentumMood] = useState(4);
  const [lowMoodValue, setLowMoodValue] = useState(1);

  const momentumMoodData: Record<number, { response: string; xp: string }> = {
    1: {
      response: "I hear you. A 1 is a heavy start, but showing up is the first 90% of the battle. We're going to keep it extremely simple today to just get the gears turning.",
      xp: "⛅ Finding pace · 14-day streak",
    },
    2: {
      response: "I hear you. A little below your best today, and that is okay. Momentum is exactly what lifts that number. We'll focus on small, clear wins.",
      xp: "⛅ Gaining ground · 14-day streak",
    },
    3: {
      response: "Steady. A 3 is a solid baseline. Let's find that 1% extra today to push the needle forward.",
      xp: "✨ Stable · 14-day streak",
    },
    4: {
      response: "Good energy! A 4 is a great place to be. We're going to channel that into clearing your priority list.",
      xp: "🔥 14-day streak · 847 XP",
    },
    5: {
      response: "Peak momentum! You're on fire today. Let's knock out the full plan and see if we can open up some new leads.",
      xp: "⚡ Peak energy · 14-day streak",
    },
  };

  const lowMoodData: Record<number, { greeting: string; response: string }> = {
    1: {
      greeting: "Thank you for being honest. A 1 is not a problem to fix. It is a signal to work with. You do not need to be calmed right now. You need to be ignited. Will you give me 90 seconds?",
      response: "How do you feel? Even a small shift means your system is waking up. You moved the needle yourself. Now let's build on it.",
    },
    2: {
      greeting: "Waking up slowly. A 2 means we focus on activation. No pressure, just warming up the system. Can we try 90 seconds of focus?",
      response: "Better? That little spark is all we need to start. Let's take that energy into your first task.",
    },
    3: {
      greeting: "Middle ground. A 3 is a good place to start an engine. Let's give it some extra fuel. Ready for 90 seconds?",
      response: "Solid. You've cleared the fog. Now let's look at what's next.",
    },
    4: {
      greeting: "Good vibes! A 4 means you're already moving. Let's use this energy to really push through. 90 seconds?",
      response: "Powerful. Use that heat to tackle the hardest thing on your list right now.",
    },
    5: {
      greeting: "You're already at a 5! Let's sustain this peak state. 90 seconds to lock it in?",
      response: "Incredible. You are the momentum today. Let's go make it happen.",
    },
  };

  const screens = [
    {
      tab: "1 · Meet you",
      title: "RecastCoach, Day 1",
      sub: "Day 1. Getting to know you.",
      body: (
        <>
          <div className="bw">
            <div className="bl">RecastCoach</div>
            <div className="bm">
              Before we look at any job postings, I want to understand something
              more important. When you think about the work you have done in
              your life, not just the titles, but the moments you felt genuinely
              useful, what comes to mind?
            </div>
          </div>
          <div className="bw r">
            <div className="bl r">You</div>
            <div className="bu">
              Honestly? The times I trained new people. I loved watching someone
              figure something out for the first time.
            </div>
          </div>
          <div className="bw">
            <div className="bl">RecastCoach</div>
            <div className="bm">
              That is not a small thing. It&apos;s a real signal. Teaching, coaching,
              transferring knowledge are skills that cross industries and
              exactly what the market is paying for right now. What did those
              moments feel like for you?
            </div>
          </div>
          <div className="bw r">
            <div className="bl r">You</div>
            <div className="bu">
              Like I actually mattered. Which is something I have not felt much
              lately.
            </div>
          </div>
          <div className="bw">
            <div className="bl">RecastCoach</div>
            <div className="bm">
              You still matter. That has not changed. Your situation has. That&apos;s
              what we&apos;re going to work on together. Let&apos;s start there.
            </div>
          </div>
        </>
      ),
    },
    {
      tab: "2 · Daily momentum",
      title: "RecastCoach, Day 14 at 8:07am",
      sub: "Day 14. Morning check-in.",
      body: (
        <>
          <div className="bw">
            <div className="bl">RecastCoach</div>
            <div className="bm">
              Good morning. Fourteen days straight. That is real commitment. How
              are you feeling today on a scale of 1 to 5?
            </div>
          </div>
          <div className="bw">
            <div className="mrow">
              {[1, 2, 3, 4, 5].map((n) => (
                <div
                  key={n}
                  className={`mood-circle ${momentumMood === n ? "active" : ""}`}
                  onClick={() => setMomentumMood(n)}
                >
                  {n}
                </div>
              ))}
            </div>
          </div>
          <div className="bw">
            <div className="bl">RecastCoach</div>
            <div className="bm">
              {momentumMoodData[momentumMood].response}
            </div>
          </div>
          <div className="bw r">
            <div className="bl r">You</div>
            <div className="bu">Give me the statistic.</div>
          </div>
          <div className="bw">
            <div className="bl">RecastCoach</div>
            <div className="bm">
              People who check in with a coach daily are 3x more likely to be
              employed within 90 days. You just checked in. That counts. Here is
              today:
            </div>
          </div>
          <div className="bw">
            <div className="tlist">
              <div className="titem">
                <div className="tck done"></div>Morning check-in complete, +10 XP
              </div>
              <div className="titem">
                <div className="tck"></div>Follow up on Monday&apos;s application, +25
                XP
              </div>
              <div className="titem">
                <div className="tck"></div>Add one connection in your target
                industry, +20 XP
              </div>
              <div className="titem">
                <div className="tck"></div>Read one job posting, note 3 skill
                matches, +15 XP
              </div>
            </div>
          </div>
          <div className="bw">
            <div className="phone-xp">
              {momentumMoodData[momentumMood].xp} &nbsp;·&nbsp; Level 3, Recast Builder
            </div>
          </div>
        </>
      ),
    },
    {
      tab: "3 · Interview prep",
      title: "RecastCoach, Interview Simulator",
      sub: "RecastCoach becomes your actual interviewer",
      body: (
        <>
          <div className="bw">
            <div className="bl">RecastCoach</div>
            <div className="bm">
              You pasted the job posting. I have built your interviewer. Here is
              who you are meeting tomorrow:
            </div>
          </div>
          <div className="bw">
            <div className="icard" style={{ padding: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div className="ilbl" style={{ fontSize: '0.6rem', textTransform: 'uppercase', color: 'var(--teal-bright)', fontWeight: 700, marginBottom: '8px' }}>Your interviewer</div>
              <div className="iname" style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '4px' }}>Sarah Chen, Senior Talent Partner</div>
              <div className="irole" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginBottom: '12px' }}>Midwest Regional Operations, TechBridge Inc.</div>
              <div className="inotes" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
                Known for behavioral questions. Values specificity over general
                claims. Tends to probe on team conflict scenarios. Prefers
                STAR-format answers.
              </div>
            </div>
          </div>
          <div className="bw">
            <div className="bl">RecastCoach</div>
            <div className="bm">
              I will stay in character as Sarah for the full simulation: 8
              questions, then a structured debrief with your readiness score.
              Shall we begin?
            </div>
          </div>
          <div className="bw r">
            <div className="bl r">You</div>
            <div className="bu">Yes. Let&apos;s do it.</div>
          </div>
          <div className="bw">
            <div className="bl">RecastCoach (as Sarah Chen)</div>
            <div className="bint" style={{ padding: '14px 20px', background: 'rgba(232, 160, 32, 0.1)', border: '1px solid rgba(232, 160, 32, 0.2)', borderRadius: '4px 20px 20px 20px', color: 'rgba(255,255,255,0.9)', fontSize: '0.88rem' }}>
              &quot;Thanks for coming in. Tell me about a time you had to lead a
              team through a significant change. What was your approach, and how
              did it land?&quot;
            </div>
          </div>
        </>
      ),
    },
    {
      tab: "4 · Rejection",
      title: "RecastCoach, Rejection processing",
      sub: "Every rejection is data, not a verdict.",
      body: (
        <>
          <div className="bw r">
            <div className="bl r">You</div>
            <div className="bu">
              Got the rejection from TechBridge. The one I really wanted. I am
              starting to think maybe I am just not good enough anymore.
            </div>
          </div>
          <div className="bw">
            <div className="bl">RecastCoach</div>
            <div className="bm">
              I hear you. That one genuinely hurts and you are allowed to feel
              it. Sit with it for a moment. I am right here.
            </div>
          </div>
          <div className="bw r">
            <div className="bl r">You</div>
            <div className="bu">I just do not know how many more of these I can take.</div>
          </div>
          <div className="bw">
            <div className="bl">RecastCoach</div>
            <div className="bm">
              That makes complete sense. Can I share something with you? Not to
              minimize what you are feeling, but because the data might actually
              change how you are seeing this right now.
            </div>
          </div>
          <div className="bw r">
            <div className="bl r">You</div>
            <div className="bu">Yeah. Go ahead.</div>
          </div>
          <div className="bw">
            <div className="spill" style={{ padding: '20px', background: 'rgba(232, 87, 42, 0.08)', borderRadius: '16px', border: '1px solid rgba(232, 87, 42, 0.15)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
              Most successful job seekers receive 6 to 10 rejections before
              landing their role, and three in four end up in a job they are
              glad they took. The average time from first application to offer
              is about three months. This is not the end of your story. It is
              page four of a ten-page process. You are on track.
            </div>
          </div>
          <div className="bw">
            <div className="bl">RecastCoach</div>
            <div className="bm">
              Every rejection has sharpened your materials, your story, and your
              presence in the room. You are closer today than you were
              yesterday. What do you need right now?
            </div>
          </div>
        </>
      ),
    },
    {
      tab: "5 · Low mood",
      title: "RecastCoach, Energy activation",
      sub: "Not calm. Ignited.",
      body: (
        <>
          <div className="bw">
            <div className="bl">RecastCoach</div>
            <div className="bm">Good morning. How are you feeling today?</div>
          </div>
          <div className="bw">
            <div className="mrow">
              {[1, 2, 3, 4, 5].map((n) => (
                <div
                  key={n}
                  className={`mood-circle ${lowMoodValue === n ? "active-coral" : ""}`}
                  onClick={() => setLowMoodValue(n)}
                >
                  {n}
                </div>
              ))}
            </div>
          </div>
          <div className="bw">
            <div className="bl">RecastCoach</div>
            <div className="bm">
              {lowMoodData[lowMoodValue].greeting}
            </div>
          </div>
          <div className="bw r">
            <div className="bl r">You</div>
            <div className="bu">What do you want me to do?</div>
          </div>
          <div className="bw">
            <div className="bl">RecastCoach</div>
            <div className="bm">
              Breath of Fire. Rapid, rhythmic exhales that wake your nervous
              system up from the inside. This is not about settling down. It is
              about firing up.
            </div>
          </div>
          <div className="bw">
            <div className="bcard" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '16px', padding: '24px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="btitle" style={{ fontWeight: 700, color: 'var(--white)', fontSize: '0.9rem', marginBottom: '16px' }}>
                Breath of Fire, 90 seconds. Energizing activation.
              </div>
              <div className="bsteps" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div className="bstep" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', display: 'flex', gap: '12px' }}>
                  <div className="bnum" style={{ width: '24px', height: '24px', background: 'var(--teal)', borderRadius: '50%', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>1</div>
                  <span>Sit up straight. Hands on knees. One deep breath in through the
                    nose to prepare.</span>
                </div>
                <div className="bstep" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', display: 'flex', gap: '12px' }}>
                  <div className="bnum" style={{ width: '24px', height: '24px', background: 'var(--teal)', borderRadius: '50%', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>2</div>
                  <span>Rapid, rhythmic pumps: forceful exhale through the nose, passive
                    inhale. One pump per second. Belly drives each exhale.</span>
                </div>
                <div className="bstep" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', display: 'flex', gap: '12px' }}>
                  <div className="bnum" style={{ width: '24px', height: '24px', background: 'var(--teal)', borderRadius: '50%', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>3</div>
                  <span>30 pumps. Full inhale, hold 5 counts, slow exhale. That is one
                    round.</span>
                </div>
                <div className="bstep" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', display: 'flex', gap: '12px' }}>
                  <div className="bnum" style={{ width: '24px', height: '24px', background: 'var(--teal)', borderRadius: '50%', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>4</div>
                  <span>Repeat for 3 rounds. You will feel warmth and clarity. That is
                    your body responding.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bw">
            <div className="bl">RecastCoach</div>
            <div className="phone-xp">
              {lowMoodData[lowMoodValue].response}
            </div>
          </div>
        </>
      ),
    },
  ];

  const next = () => setCur((prev) => (prev + 1) % screens.length);
  const prev = () => setCur((prev) => (prev - 1 + screens.length) % screens.length);

  return (
    <section className="section-wrap meridian-wrap">
      <div className="meridian-inner">
        <div className="meridian-intro">
          <span className="section-label">What RecastCoach actually sounds like</span>
          <h2 className="section-heading">Real conversations. Real support.</h2>
          <p className="section-sub ">
            From the first morning check-in to the first week in a new role.
          </p>
        </div>

        <div className="carousel-tabs">
          {screens.map((s, i) => (
            <button
              key={i}
              className={`ctab ${cur === i ? "active" : ""}`}
              onClick={() => setCur(i)}
            >
              {s.tab}
            </button>
          ))}
        </div>

        <div key={cur} className="cscreen active">
          <div className="chat-card">
            <div className="chat-hdr">
              <div className="chat-av">R</div>
              <div>
                <div className="chat-title">{screens[cur].title}</div>
                <div className="chat-sub">{screens[cur].sub}</div>
              </div>
            </div>
            <div className="chat-body">{screens[cur].body}</div>
          </div>
        </div>

        <div className="carousel-nav">
          <button className="cnav-btn" onClick={prev}>
            Previous
          </button>
          <div className="cnav-dots">
            {screens.map((_, i) => (
              <div
                key={i}
                className={`cnav-dot ${cur === i ? "active" : ""}`}
                onClick={() => setCur(i)}
              />
            ))}
          </div>
          <button className="cnav-btn" onClick={next}>
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
