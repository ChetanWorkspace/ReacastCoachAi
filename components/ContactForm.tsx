"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [activeTab, setActiveTab] = useState("agency"); // agency or individual

  const switchTab = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <section className="section-wrap form-wrap" id="contact">
      <div className="form-top-center">
        <div className="form-audience-tabs">
          <button
            className={`form-audience-tab ${
              activeTab === "agency" ? "active" : ""
            }`}
            onClick={() => switchTab("agency")}
          >
            Agency
          </button>
          <button
            className={`form-audience-tab ${
              activeTab === "individual" ? "active" : ""
            }`}
            onClick={() => switchTab("individual")}
          >
            Individual
          </button>
        </div>
      </div>

      <div className={`form-layout ${activeTab === "individual" ? "flipped" : ""}`}>
        {/* FORM CARD ON THE LEFT (will be on right if flipped) */}
        <div className="form-left">
          <div className="form-card">
            {/* AGENCY FORM */}
            <div
              className={`form-panel ${activeTab === "agency" ? "active" : ""}`}
            >
              <div className="field">
                <label>Your name</label>
                <input type="text" name="name" placeholder="First and last name" />
              </div>
              <div className="field">
                <label>Agency or organization</label>
                <input
                  type="text"
                  name="agency"
                  placeholder="e.g. Kansas Workforce Alliance"
                />
              </div>
              <div className="field">
                <label>Work email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@agency.gov"
                />
              </div>
              <div className="field-row">
                <div className="field">
                  <label>
                    State <span className="opt">optional</span>
                  </label>
                  <input type="text" name="state" placeholder="e.g. Kansas" />
                </div>
                <div className="field">
                  <label>
                    Role <span className="opt">optional</span>
                  </label>
                  <input
                    type="text"
                    name="role"
                    placeholder="e.g. Program Director"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="submit-btn"
                onClick={() =>
                  alert("Thank you for your interest. We will be in touch soon.")
                }
              >
                Request a pilot conversation
              </button>
              <div className="privacy-note">
                Your information is never shared or sold. We will only use it to
                follow up about RecastCoach.
              </div>
            </div>

            {/* INDIVIDUAL FORM */}
            <div
              className={`form-panel ${
                activeTab === "individual" ? "active" : ""
              }`}
            >
              <div className="field">
                <label>Your first name</label>
                <input type="text" name="fname" placeholder="First name" />
              </div>
              <div className="field">
                <label>Email address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                />
              </div>
              <div className="field">
                <label>What field did you work in?</label>
                <input
                  type="text"
                  name="field"
                  placeholder="e.g. Manufacturing, Finance, Healthcare"
                />
              </div>
              <div className="field">
                <label>
                  State <span className="opt">optional</span>
                </label>
                <input type="text" name="state" placeholder="e.g. Kansas" />
              </div>
              <div className="checkbox-row">
                <input type="checkbox" name="sms_consent" id="sms_consent_ind" />
                <label htmlFor="sms_consent_ind">
                  Text me when RecastCoach launches. I want early access.
                </label>
              </div>
              <button
                type="submit"
                className="submit-btn"
                style={{
                  background:
                    "linear-gradient(135deg, var(--teal), var(--teal-bright))",
                }}
              >
                Claim your spot
              </button>
              <div className="privacy-note">
                Your information is never shared or sold. We&apos;ll only reach out
                about RecastCoach.
              </div>
            </div>
          </div>
        </div>

        {/* TEXT CONTENT ON THE RIGHT */}
        <div className="form-right">
          <span className="section-label">Get in touch</span>
          <h2 className="section-heading">
            {activeTab === "agency"
              ? "Tell us about your program."
              : "Save your spot."}
          </h2>
          <p className="section-sub" style={{ marginBottom: "36px" }}>
            {activeTab === "agency"
              ? "Share your information and we'll follow up within one business day. No pressure, no sales call."
              : "RecastCoach is launching soon. Sign up and we'll reach out the moment early access is ready. No pricing commitment required."}
          </p>
          <div className="form-trust">
            <div className="trust-item">
              <div className="trust-icon">&#128205;</div>
              <div className="trust-text">
                <strong>WIOA aligned</strong>Built around the FY2026 WIOA
                appropriations package. $2.9 billion in active workforce funding
                is available right now for programs serving displaced workers.
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">&#128313;</div>
              <div className="trust-text">
                <strong>Built for people</strong>Founded by someone who has done
                this work. Built for the agencies serving people who need it
                most.
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">&#128274;</div>
              <div className="trust-text">
                <strong>Your data stays yours</strong>Your information is never
                shared or sold. We only use it to follow up about RecastCoach.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
