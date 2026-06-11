"use client";
import Link from "next/link";
import React from 'react'
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";    
 
const instructors = [
    {
      id: 1,
      name: 'Shreya Ghosal',
      designation: 'Vocal Coach',
      image:'https://stat4.bollywoodhungama.in/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-24-at-4.43.34-PM.jpeg',
    },
    {
      id: 2,
      name: 'Sonu Nigam',
      designation: 'Guitar Instructor',
      image:'https://www.yugmarg.com/images/news/full19127.jpg',
    },
    {
      id: 3,
      name: 'Kailash Kher',
      designation: 'Piano Teacher',
      image:'https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2017/10/27/Pictures/_9beaa2a2-bb17-11e7-970b-e502f534a12e.jpg',
    },
    {
      id: 4,
      name: 'A.R Rahman',
      designation: 'Drumming Expert',
      image:'https://songsall.com/wp-content/uploads/2024/08/Untitled-design-6.png',
    },
  ];

 function Instructor() {
   return (
     <div  className="relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Instructors</h2>
            <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professionals who will guide your musical journey</p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={instructors} 
                />
            </div>
        </WavyBackground>
     </div>
   )
 }
 
 export default Instructor