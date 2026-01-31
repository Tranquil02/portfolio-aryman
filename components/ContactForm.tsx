"use client";
import React from "react";

export default function ContactForm() {
  const [status, setStatus] = React.useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  // Track real submission
  const hasSubmittedRef = React.useRef(false);

  return (
    <>
      {/* Hidden iframe */}
      <iframe
        name="hidden_iframe"
        style={{ display: "none" }}
        onLoad={() => {
          // Ignore initial iframe load
          if (!hasSubmittedRef.current) return;

          // Submission completed
          setStatus("sent");
          hasSubmittedRef.current = false;
        }}
      />

      <form
        action="https://backend-portfolio-aryman.gt.tc/api/contact.php"
        method="POST"
        target="hidden_iframe"
        onSubmit={() => {
          hasSubmittedRef.current = true;
          setStatus("sending");
        }}
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
            : "Send Email"}
        </button>

        {status === "error" && (
          <p className="text-sm text-rose-400">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </>
  );
}
