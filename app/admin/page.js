"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const AdminPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState("weddings");
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const correctEmail = "kaivalyamevents@gmail.com";
  const correctPassword = "Obsvector@123";

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    if (authStatus === "true") setIsAuthenticated(true);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === correctEmail && password === correctPassword) {
      localStorage.setItem("isAuthenticated", "true");
      setIsAuthenticated(true);
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file");

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("category", category);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setUploading(false);

      if (res.ok) {
        setImageUrl(data.url);
        alert("File uploaded successfully!");
        setFile(null);
      } else {
        alert(data.error || "Upload failed");
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("An error occurred while uploading.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[#fff6f7]">
      {!isAuthenticated ? (
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm space-y-4"
        >
          <h2 className="text-3xl font-bold text-center text-[#C45C61]">Admin Login</h2>
          <input
            type="email"
            placeholder="Email"
            className="border p-3 w-full rounded-md focus:ring-2 focus:ring-[#C45C61] outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-3 w-full rounded-md focus:ring-2 focus:ring-[#C45C61] outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-[#C45C61] hover:bg-[#b44d56] text-white font-semibold p-3 w-full rounded-md transition"
          >
            Login
          </button>
        </form>
      ) : (
        <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md text-center space-y-6">
          <h2 className="text-3xl font-bold text-[#C45C61]">Upload Image</h2>
          <div className="flex flex-col gap-4 text-left">
            <input
              type="file"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="border p-3 rounded-md focus:ring-2 focus:ring-[#C45C61] outline-none"
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border p-3 rounded-md focus:ring-2 focus:ring-[#C45C61] outline-none"
            >
              <option value="weddings">Weddings</option>
              <option value="birthdays">Birthdays</option>
              <option value="conferences">Conferences</option>
              <option value="babyshowers">Baby Showers</option>
              <option value="corporate">Corporate</option>
              <option value="outdoor">Outdoor Event Decorations</option>
            </select>

            <button
              onClick={handleUpload}
              className="bg-[#C45C61] hover:bg-[#b44d56] text-white font-semibold p-3 rounded-md transition"
            >
              {uploading ? "Uploading..." : "Upload"}
            </button>

            {imageUrl && (
              <div className="mt-4">
                <Image
                  src={imageUrl}
                  alt="Uploaded"
                  width={200}
                  height={200}
                  className="rounded-lg shadow-md"
                />
              </div>
            )}

            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold p-2 w-full mt-4 rounded-md transition"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
