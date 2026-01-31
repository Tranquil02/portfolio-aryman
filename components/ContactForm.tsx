"use client";
import React from "react";

export default function ContactForm() {
  const [status, setStatus] = React.useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      console.log(res);
      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error("Request failed");
      }

      setStatus("sent");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 grid gap-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          name="name"
          required
          placeholder="your name"
          className="rounded-lg border border-white/10 bg-white/5 px-3 py-3
                     text-white/90 placeholder:text-white/40"
        />

        <input
          type="email"
          name="email"
          required
          placeholder="yourname@example.com"
          className="rounded-lg border border-white/10 bg-white/5 px-3 py-3
                     text-white/90 placeholder:text-white/40"
        />
      </div>

      <input
        name="subject"
        placeholder="Project Discussion"
        className="rounded-lg border border-white/10 bg-white/5 px-3 py-3
                   text-white/90 placeholder:text-white/40"
      />

      <textarea
        name="message"
        required
        placeholder="Tell me about your project..."
        className="rounded-lg border border-white/10 bg-white/5 px-3 py-3
                   min-h-40 text-white/90 placeholder:text-white/40"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500
                   px-6 py-3 font-semibold text-black
                   hover:opacity-95 disabled:opacity-50"
      >
        {status === "sending"
          ? "Sending..."
          : status === "sent"
          ? "Sent ✓"
          : "Send Message"}
      </button>

      {status === "error" && (
        <p className="text-sm text-rose-400">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
