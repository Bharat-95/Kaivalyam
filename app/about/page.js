"use client";

import Image from "next/image";
import { Quicksand, Pacifico } from "next/font/google";
import { motion } from "framer-motion";

const quicksand = Quicksand({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
});
const pacifico = Pacifico({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="px-6 md:px-16 lg:px-24 py-12 space-y-16"
    >
      {/* Header */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className={`${quicksand.className} text-4xl font-bold text-[#C45C61]`}>About Us</h2>
        <p className="mt-4 text-[#9C6B6B] max-w-2xl mx-auto text-lg">
          We are Kaivalya Events — curating unforgettable moments with passion and style.
        </p>
      </motion.div>

      {/* Two-Column Section */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-5 text-justify text-[#9C6B6B] text-lg"
        >
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
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <Image
            src="/Image3.webp"
            alt="Event Planning"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>

      {/* Highlight Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-[#FFEFF1] rounded-xl shadow-md p-8 text-center space-y-4"
      >
        <h3 className={`${pacifico.className} text-3xl text-[#C45C61]`}>Why Choose Us?</h3>
        <p className="text-[#9C6B6B] max-w-3xl mx-auto text-lg">
          We go beyond aesthetics. With our professional coordination and heartfelt service, you get an experience that’s
          beautifully executed and deeply memorable.
        </p>
      </motion.div>

      {/* Image Gallery */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {["/about2.webp", "/about3.webp", "/about4.jpg"].map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-md"
          >
            <Image
              src={img}
              alt={`Gallery ${i + 1}`}
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default About;
