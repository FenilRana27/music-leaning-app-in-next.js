import FeaturesCourses from "@/components/FeaturesCourses";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import Instructor from "@/components/Instructor";
import MusicSchoolsTestimonial from "@/components/TestimonialCards";
import TestimonialCards from "@/components/TestimonialCards";
import UpComingWebinars from "@/components/UpComingWebinars";
import WhyCooseus from "@/components/WhyCooseus";
import Image from "next/image";

export default function Home() {
  return (
    
    <main className="min-h-screen bg-black/[0.96] antialised bg-grid-white/[0.02]">
      <Herosection />
      <FeaturesCourses />
      <WhyCooseus />
      <MusicSchoolsTestimonial />
      <UpComingWebinars />
      <Instructor />
      <Footer/>
    </main>
  );
}
