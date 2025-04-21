"use client";

import React, { useEffect } from "react";
import { Pacifico, Quicksand } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";

const pacifico = Pacifico({ weight: ["400"], subsets: ["latin"], display: "swap" });
const quicksand = Quicksand({ weight: ["400", "700"], subsets: ["latin"], display: "swap" });

const Follow = () => {
  const instagramUrl = "https://www.instagram.com/kaivalyaevents";

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgets.sociablekit.com/instagram-feed/widget.js";
    script.async = true;
    document.body.appendChild(script);

    const style = document.createElement("style");
    style.innerHTML = `
      .sk-instagram-feed iframe {
        background-color: #FFEFF1 !important;
        border-radius: 20px;
        padding: 10px;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="w-full bg-[#FFEFF1] py-10 px-4 md:px-12 space-y-10"
    >
      {/* Heading */}
      <div className="text-center space-y-2">
        <h2
          className={`${quicksand.className} text-3xl md:text-4xl font-bold text-[#C45C61]`}
        >
          Follow Us on Instagram
        </h2>
        <p className={`${pacifico.className} text-[#C45C61] text-xl`}>
          <Link href={instagramUrl} target="_blank">
            @KaivalyaEvents
          </Link>
        </p>
      </div>

      {/* Instagram Feed Embed */}
      <div className="max-w-7xl mx-auto w-full rounded-2xl overflow-hidden shadow-lg">
        <div className="sk-instagram-feed" data-embed-id="25548414" />
      </div>
    </motion.div>
  );
};

export default Follow;
