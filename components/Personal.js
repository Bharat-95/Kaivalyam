import React from "react";
import Image from "next/image";
import { Pacifico, Quicksand, Poppins } from "next/font/google";
import Link from "next/link";

const pacifico = Pacifico({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});
const quicksand = Quicksand({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});
const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const Personal = () => {
  return (
    <div className="space-y-20  px-6 md:px-10">
      <div
        className={`${quicksand.className} font-semibold text-4xl text-center text-[#C45C61]`}
      >
        Personal Touch
      </div>
      <div className="w-full lg:flex md:flex h-auto gap-20 lg:space-y-0 md:space-y-0 space-y-10">
        <div className="lg:w-[50%] md:w-[50%] w-full lg:h-[70vh] md:h-[50vh] h-[50vh]">
          <Image
            src="/Personal.jpeg"
            alt="no Image Found"
            width={1000}
            height={1000}
            className="w-full h-full rounded-xl"
          />
        </div>
        <div className={`lg:w-[50%] md:w-[50%] w-ful ${poppins.className} flex flex-col justify-center items-center text-justify text-[#9C6B6B] font-normal text-lg`}>
         <p> At Kaivalyam Events, we believe every celebration holds a unique story
          — yours. From custom décor touches to thoughtful guest experiences, we
          focus on the details that make your event truly personal. Whether it’s
          a grand celebration or an intimate gathering, we’re here to design
          moments that reflect your vision and leave lasting impressions.
          </p>
          <div><Link href='/'>Our Services</Link></div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
