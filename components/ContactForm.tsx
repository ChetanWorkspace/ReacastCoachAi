"use client";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  const [activeTab, setActiveTab] = useState("agency"); // agency or individual

  const switchTab = (tab: string) => {
    setActiveTab(tab);
  };

  const agencySchema = Yup.object().shape({
    name: Yup.string()
      .required("Full name is required")
      .min(2, "Name too short"),
    agency: Yup.string().required("Agency name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    state: Yup.string(),
    role: Yup.string(),
  });

  const individualSchema = Yup.object().shape({
    fname: Yup.string()
      .required("First name is required")
      .min(2, "Name too short"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    field: Yup.string().required("Field of work is required"),
    state: Yup.string(),
    sms_consent: Yup.boolean(),
  });

  return (
    <section className="section-wrap form-wrap" id="contact">
      <div className="form-top-center">
        <div className="form-audience-tabs">
          <button
            className={`form-audience-tab ${activeTab === "agency" ? "active" : ""
              }`}
            onClick={() => switchTab("agency")}
          >
            Agency
          </button>
          <button
            className={`form-audience-tab ${activeTab === "individual" ? "active" : ""
              }`}
            onClick={() => switchTab("individual")}
          >
            Individual
          </button>
        </div>
      </div>

      <div
        className={`form-layout ${activeTab === "individual" ? "flipped" : ""}`}
      >
        {/* FORM CARD ON THE LEFT (will be on right if flipped) */}
        <div className="form-left">
          <div className="form-card">
            {/* AGENCY FORM */}
            <div
              className={`form-panel ${activeTab === "agency" ? "active" : ""}`}
            >
              <Formik
                initialValues={{
                  name: "",
                  agency: "",
                  email: "",
                  state: "",
                  role: "",
                }}
                validationSchema={agencySchema}
                onSubmit={(values, { resetForm }) => {
                  console.log("Agency form values:", values);
                  alert(
                    "Thank you for your interest. We will be in touch soon.",
                  );
                  resetForm();
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="field">
                      <label>Your name</label>
                      <Field
                        type="text"
                        name="name"
                        placeholder="First and last name"
                        className={errors.name && touched.name ? "error" : ""}
                      />
                      <ErrorMessage
                        name="name"
                        component="span"
                        className="error-msg"
                      />
                    </div>
                    <div className="field">
                      <label>Agency or organization</label>
                      <Field
                        type="text"
                        name="agency"
                        placeholder="e.g. Kansas Workforce Alliance"
                        className={
                          errors.agency && touched.agency ? "error" : ""
                        }
                      />
                      <ErrorMessage
                        name="agency"
                        component="span"
                        className="error-msg"
                      />
                    </div>
                    <div className="field">
                      <label>Work email</label>
                      <Field
                        type="email"
                        name="email"
                        placeholder="you@agency.gov"
                        className={errors.email && touched.email ? "error" : ""}
                      />
                      <ErrorMessage
                        name="email"
                        component="span"
                        className="error-msg"
                      />
                    </div>
                    <div className="field-row">
                      <div className="field">
                        <label>
                          State <span className="opt">(optional)</span>
                        </label>
                        <Field
                          type="text"
                          name="state"
                          placeholder="e.g. Kansas"
                        />
                      </div>
                      <div className="field">
                        <label>
                          Role <span className="opt">(optional)</span>
                        </label>
                        <Field
                          type="text"
                          name="role"
                          placeholder="e.g. Program Director"
                        />
                      </div>
                    </div>
                    <button type="submit" className="submit-btn">
                      Request a pilot conversation
                    </button>
                    <div className="privacy-note">
                      Your information is never shared or sold. We will only use
                      it to follow up about RecastCoach.
                    </div>
                  </Form>
                )}
              </Formik>
            </div>

            {/* INDIVIDUAL FORM */}
            <div
              className={`form-panel ${activeTab === "individual" ? "active" : ""
                }`}
            >
              <Formik
                initialValues={{
                  fname: "",
                  email: "",
                  field: "",
                  state: "",
                  sms_consent: false,
                }}
                validationSchema={individualSchema}
                onSubmit={(values, { resetForm }) => {
                  console.log("Individual form values:", values);
                  alert("Thank you! You've claimed your spot.");
                  resetForm();
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="field">
                      <label>Your first name</label>
                      <Field
                        type="text"
                        name="fname"
                        placeholder="First name"
                        className={errors.fname && touched.fname ? "error" : ""}
                      />
                      <ErrorMessage
                        name="fname"
                        component="span"
                        className="error-msg"
                      />
                    </div>
                    <div className="field">
                      <label>Email address</label>
                      <Field
                        type="email"
                        name="email"
                        placeholder="you@email.com"
                        className={errors.email && touched.email ? "error" : ""}
                      />
                      <ErrorMessage
                        name="email"
                        component="span"
                        className="error-msg"
                      />
                    </div>
                    <div className="field">
                      <label>What field did you work in?</label>
                      <Field
                        type="text"
                        name="field"
                        placeholder="e.g. Manufacturing, Finance, Healthcare"
                        className={errors.field && touched.field ? "error" : ""}
                      />
                      <ErrorMessage
                        name="field"
                        component="span"
                        className="error-msg"
                      />
                    </div>
                    <div className="field">
                      <label>
                        State <span className="opt">(optional)</span>
                      </label>
                      <Field
                        type="text"
                        name="state"
                        placeholder="e.g. Kansas"
                      />
                    </div>
                    <div className="checkbox-row">
                      <Field
                        type="checkbox"
                        name="sms_consent"
                        id="sms_consent_ind"
                      />
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
                      Claim your founding member spot
                    </button>
                    <div className="privacy-note">
                      Your information is never shared or sold. We'll only reach
                      out about RecastCoach. By checking the box above you
                      consent to receive SMS updates. Message and data rates may
                      apply.
                    </div>
                  </Form>
                )}
              </Formik>
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
              <div className="trust-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--teal-bright)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div className="trust-text">
                <strong>WIOA aligned</strong>Built around the FY2026 WIOA
                appropriations package. $2.9 billion in active workforce funding
                is available right now for programs serving displaced workers.
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--teal-bright)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="trust-text">
                <strong>Built for people</strong>Founded by someone who has done
                this work. Built for the agencies serving people who need it
                most.
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--teal-bright)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
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
