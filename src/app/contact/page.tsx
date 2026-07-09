"use client";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "applications/json" },
      body: JSON.stringify({ name, email, phone, message }),
    });

    const data = await response.json();
    setLoading(false);
    if (data.success) setSuccess(true);
  }

  return (
    <main className="max-w-5xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-2 text-white">Get in Touch</h1>
      <p className="mb-10 text-white/90">
        Fill out the form and we&apos;ll get back to you!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
        <form
          className="md:col-span-3 flex flex-col gap-4 shadow-2xl rounded-2xl px-6 py-6 border-2 border-white text-white"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="border rounded-lg px-4 py-2 text-sm text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-pink-300"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="border rounded-lg px-4 py-2 text-sm text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-pink-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold">Phone Number</label>
            <input
              type="tel"
              placeholder="(xxx)-(xxx)-(xxxx)"
              className="border rounded-lg px-4 py-2 text-sm text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-pink-300"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold">Message</label>
            <textarea
              placeholder="Your Message"
              rows={4}
              className="border rounded-lg px-4 py-2 text-sm text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-pink-300"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          {success && (
            <p className="text-green-200 font-semibold text-sm">
              Message Sent! We&apos;ll get back to you soon 🍪
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-pink-600 px-5 py-3 mt-2 font-semibold text-white shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-pink-500 hover:shadow-xl hover:shadow-pink-500/50 active:translate-y-0 disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        <div className="md:col-span-2 flex flex-col gap-6 shadow-2xl rounded-2xl px-6 py-6 border-2 border-white text-white bg-white/10">
          <div>
            <h2 className="text-lg font-semibold mb-1">🍪 Custom Orders</h2>
            <p className="text-white/90 text-sm">
              Have a flavor request or need cookies for a special event?
              Let us know in your message and we&apos;ll do our best to
              accommodate you.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-1">⏱️ Response Time</h2>
            <p className="text-white/90 text-sm">
              We usually reply within 1&ndash;2 days. For time-sensitive
              orders, please mention your date in the message.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-1">🥜 Peanut Free</h2>
            <p className="text-white/90 text-sm">
              All of our cookies are made peanut free in a peanut free
              environment.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
