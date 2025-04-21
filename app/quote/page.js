"use client";

import { useState } from "react";
import { Quicksand, Pacifico } from "next/font/google";

const quicksand = Quicksand({ weight: ["400", "600"], subsets: ["latin"], display: "swap" });
const pacifico = Pacifico({ weight: ["400"], subsets: ["latin"], display: "swap" });

const GetQuote = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We'll get back to you soon.");
    setForm({ name: "", email: "", phone: "", eventType: "", message: "" });
  };

  return (
    <div className="px-6 md:px-16 lg:px-24 py-12 space-y-12">
      <div className="text-center">
        <h2 className={`${quicksand.className} text-4xl font-bold text-[#C45C61]`}>Get a Quote</h2>
        <p className="mt-4 text-[#9C6B6B] max-w-2xl mx-auto text-lg">
          Planning something special? Tell us more and we&apos;ll craft a perfect quote just for you!
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-[#FFEFF1] p-8 rounded-xl shadow-lg space-y-5"
      >
        <h3 className={`${pacifico.className} text-2xl text-[#C45C61] mb-4 text-center`}>Tell us about your event</h3>

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

        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C45C61]"
        />

        <select
          name="eventType"
          value={form.eventType}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C45C61]"
        >
          <option value="" disabled>Select Event Type</option>
          <option value="Wedding">Wedding</option>
          <option value="Corporate Event">Corporate Event</option>
          <option value="Birthday Party">Birthday Party</option>
          <option value="Cultural Function">Cultural Function</option>
          <option value="Other">Other</option>
        </select>

        <textarea
          name="message"
          placeholder="Brief Description (Date, Location, etc.)"
          value={form.message}
          onChange={handleChange}
          rows={5}
          className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C45C61]"
        ></textarea>

        <button
          type="submit"
          className="bg-[#C45C61] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#a94c50] transition w-full"
        >
          Request Quote
        </button>
      </form>
    </div>
  );
};

export default GetQuote;