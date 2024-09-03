"use client";
import React from 'react'
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Master the Guitar",
    description: "Dive into our comprehensive guitar courses designed for beginners and advanced players alike. Learn everything from basic chords to complex solos with interactive lessons."
  },
  {
    title: "Vocal Training for All Levels",
    description: "Unlock the power of your voice with our expert-led vocal training courses. Practice scales, improve pitch, and explore various singing styles."
  },
  {
    title: "Piano Essentials",
    description: "Start your musical journey with our piano courses. Learn to read sheet music, play by ear, and understand music theory with hands-on lessons."
  },
  {
    title: "Music Production 101",
    description: "Learn the art of music production from start to finish. Our courses cover everything from mixing and mastering to beat making and sound design."
  },
  {
    title: "Songwriting Masterclass",
    description: "Unleash your creativity with our songwriting courses. Get tips and techniques from professional songwriters to craft compelling lyrics and memorable melodies."
  }
]

function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
}

export default WhyChooseUs