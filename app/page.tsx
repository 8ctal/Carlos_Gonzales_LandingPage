import React from "react";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import About from "@/components/Home/About";
import Testimonials from "@/components/Home/Testimonials";
import Contact from "@/components/Home/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Inicio',
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
    </main>
  );
}