"use client";

import React, { useEffect } from "react";
import { Pacifico, Quicksand } from "next/font/google";
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

const Follow = () => {
  const instagramUrl = "https://www.instagram.com/kailvalyaevents";

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgets.sociablekit.com/instagram-feed/widget.js";
    script.async = true;
    document.body.appendChild(script);
  
    // Apply custom background to embedded widget
    const style = document.createElement("style");
    style.innerHTML = `
      .sk-instagram-feed iframe {
        background-color: #FFEFF1 !important;
      }
    `;
    document.head.appendChild(style);
  
    return () => {
      document.body.removeChild(script);
      document.head.removeChild(style);
    };
  }, []);
  

  return (
    <div className="w-full bg-[#FFEFF1] px-4 lg:px-10 flex flex-col space-y-6 justify-center items-center">
      <div
        className={`${quicksand.className} font-semibold text-4xl text-center text-[#C45C61]`}
      >
        Follow Us
      </div>
      <div className={`${pacifico.className} text-[#C45C61] text-2xl`}>
        <Link href={instagramUrl} target="_blank">@KaivalyamEvents</Link>
      </div>

      {/* Embedded SociableKIT Instagram Feed */}
      <div className="w-full">
        <div
          className="sk-instagram-feed"
          data-embed-id="25548414"
        ></div>
      </div>
    </div>
  );
};

export default Follow;
