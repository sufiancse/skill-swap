import React, { useState } from "react";


export default function Support({
  title = "Need help?",
  subtitle = "We're here to support you",
  contactEmail = "support@skillswap.com",
  phone = "+880 1234 567890",
  liveChatUrl = "/#",
  faqs = [
    {
      q: "How do I create a profile?",
      a: "Click 'Join' in the header, fill out your skills and interests, then save."
    },
    { q: "How can I become a teacher?", a: "Go to Become a Teacher and submit your class details for review." },
    { q: "How do ratings work?", a: "After each session both parties can leave a rating and review." }
  ]
}) {
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!message.trim()) return;
    // placeholder: wire this to your API
    console.log("support message:", message);
    setSent(true);
    setMessage("");
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <section className="container mx-auto px-6 py-12">
      <div className="bg-white rounded-2xl shadow-sm p-8">
        <div className="md:flex md:items-center md:justify-between gap-6">
          <div className="md:flex-1">
            <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
            <p className="mt-2 text-indigo-600 font-medium">{subtitle}</p>
            <p className="mt-4 text-gray-600 max-w-xl">If you have questions about using SkillSwap — reports, payments, or moderation — reach out and we'll get back within 24 hours.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`mailto:${contactEmail}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold shadow">Email Support</a>
              <a href={`tel:${phone.replace(/\s+/g, "")}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-indigo-200 text-indigo-700 font-semibold">Call Us</a>
              <a href={liveChatUrl} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-indigo-700 font-semibold hover:bg-indigo-50">Live Chat</a>
            </div>
          </div>

          <div className="mt-6 md:mt-0 w-full md:w-96">
            <div className="rounded-lg border p-4 shadow-sm bg-gray-50">
              <h3 className="text-sm font-semibold text-gray-700">Send us a message</h3>
              <form onSubmit={handleSubmit} className="mt-3">
                <label className="sr-only">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  placeholder="Describe your issue or question..."
                  className="w-full rounded-md border-gray-200 resize-none p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
                />
                <div className="mt-3 flex items-center justify-between">
                  <p className="text-xs text-gray-500">Response time: usually within 24 hours</p>
                  <div className="flex items-center gap-2">
                    <button type="submit" className="px-3 py-2 rounded-md bg-indigo-600 text-white text-sm font-semibold">Send</button>
                  </div>
                </div>
                {sent && <p className="mt-2 text-sm text-green-600">Message sent — we'll reply soon.</p>}
              </form>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-6">
          <h3 className="text-xl font-bold text-gray-900">Frequently asked</h3>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {faqs.map((f, idx) => (
              <details key={idx} className="p-4 bg-white rounded-lg shadow-sm">
                <summary className="cursor-pointer font-medium">{f.q}</summary>
                <p className="mt-2 text-sm text-gray-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">If this is an urgent safety or legal issue, please contact local authorities. For account safety concerns, change your password and enable 2FA.</div>
      </div>
    </section>
  );
}
