"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Carousel from "@/components/Carousel";
import WioaCompliance from "@/components/WioaCompliance";
import Founder from "@/components/Founder";
import PilotProgram from "@/components/PilotProgram";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeTab, setActiveTab] = useState("agency"); // agency or individual

  return (
    <main>
      <Navbar />
      <Hero activeTab={activeTab} setActiveTab={setActiveTab} />
      <Stats activeTab={activeTab} />
      <Carousel />
      <WioaCompliance />
      <Founder />
      <PilotProgram />
      <ContactForm />
      <Footer />
    </main>
  );
}
