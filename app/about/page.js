"use client";

import Image from "next/image";
import { Quicksand, Pacifico } from "next/font/google";

const quicksand = Quicksand({ weight: ["400", "600"], subsets: ["latin"], display: "swap" });
const pacifico = Pacifico({ weight: ["400"], subsets: ["latin"], display: "swap" });

const About = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 py-12 space-y-16">
      {/* Header */}
      <div className="text-center">
        <h2 className={`${quicksand.className} text-4xl font-bold text-[#C45C61] `}>About Us</h2>
        <p className="mt-4 text-[#9C6B6B] max-w-2xl mx-auto text-lg">
          We are Kaivalya Events — curating unforgettable moments with passion and style.
        </p>
      </div>

      {/* Two-Column Section */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-5 text-justify text-[#9C6B6B] text-lg">
          <p>
            With a flair for design and an eye for detail, Kaivalya Events is where creativity meets precision.
            From lavish weddings to intimate soirées, we tailor every experience to reflect your vision.
          </p>
          <p>
            Our team believes every celebration should tell a story — your story. That’s why we combine personal touches,
            fresh concepts, and meticulous planning to bring your dream event to life.
          </p>
          <p>
            Whether it&apos;s a destination wedding, a cultural festivity, or a corporate gala, Kaivalya Events ensures a seamless,
            joyful, and trendsetting experience.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image src="/Image3.webp" alt="Event Planning" width={600} height={400} className="w-full h-auto object-cover" />
        </div>
      </div>

      {/* Highlight Section */}
      <div className="bg-[#FFEFF1] rounded-xl shadow-md p-8 text-center space-y-4">
        <h3 className={`${pacifico.className} text-3xl text-[#C45C61]`}>Why Choose Us?</h3>
        <p className="text-[#9C6B6B] max-w-3xl mx-auto text-lg">
          We go beyond aesthetics. With our professional coordination and heartfelt service, you get an experience that
         ’s beautifully executed and deeply memorable.
        </p>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {['/about2.webp', '/about3.webp', '/about4.jpg'].map((img, i) => (
          <div key={i} className="rounded-lg overflow-hidden shadow-md">
            <Image src={img} alt={`Gallery ${i + 1}`} width={400} height={300} className="w-full h-64 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;