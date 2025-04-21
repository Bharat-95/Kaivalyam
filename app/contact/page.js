"use client";

import { useState } from "react";
import { Quicksand, Pacifico } from "next/font/google";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const quicksand = Quicksand({ weight: ["400", "600"], subsets: ["latin"], display: "swap" });
const pacifico = Pacifico({ weight: ["400"], subsets: ["latin"], display: "swap" });

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="px-6 md:px-16 lg:px-24 py-12 space-y-16"
    >
      {/* Section Heading */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className={`${quicksand.className} text-4xl font-bold text-[#C45C61]`}>Contact Us</h2>
        <p className="mt-4 text-[#9C6B6B] max-w-2xl mx-auto text-lg">
          We&apos;d love to hear from you! Whether you&apos;re planning an event or just want to say hi.
        </p>
      </motion.div>

      {/* Grid: Info + Form */}
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Info Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-6 text-[#9C6B6B]"
        >
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-[#C45C61]" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-[#C45C61]" />
            <span>info@kaivalyaevents.com</span>
          </div>
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-[#C45C61] mt-1" />
            <span>
              Kaivalya Events,<br />
              123 Bliss Avenue,<br />
              Hyderabad, Telangana - 500001
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-6 rounded-xl overflow-hidden shadow-md"
          >
            <iframe
              className="w-full h-64"
              src="https://www.google.com/maps/embed?..."
              allowFullScreen
              loading="lazy"
              title="Kaivalya Events Location"
            ></iframe>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-[#FFEFF1] p-6 rounded-xl shadow-lg space-y-4 text-[#333]"
        >
          <h3 className={`${pacifico.className} text-2xl text-[#C45C61] mb-2`}>Send a Message</h3>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C45C61]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C45C61]"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            required
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C45C61]"
          ></textarea>
          <button
            type="submit"
            className="bg-[#C45C61] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#a94c50] transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
