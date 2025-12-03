import React from "react";

export default function AboutUs({
  title = "About SkillSwap",
  subtitle = "Learn, Teach & Trade Skills",
  mission =
    "SkillSwap connects learners and teachers across the community so everyone can teach what they know and learn what they love.",
  values = [
    { title: "Community-first", desc: "People over profit — we grow together." },
    { title: "Practical", desc: "Hands-on sessions, real projects, real progress." },
    { title: "Accessible", desc: "Low barrier to entry; everyone can share skills." },
  ],
  team = [
    { name: "Aisha Rahman", role: "Founder & Product", bio: "Lifelong learner and product maker." },
    { name: "Rafi Khan", role: "Lead Engineer", bio: "Builds delightful developer experiences." },
    { name: "Mina Alam", role: "Community Manager", bio: "Brings learners and mentors together." },
  ],
}) {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="bg-linear-to-r from-indigo-50 to-white rounded-2xl p-8 shadow-sm">
        <div className="md:flex md:items-center md:justify-between gap-8">
          <div className="md:flex-1">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">{title}</h2>
            <p className="mt-2 text-lg text-indigo-600 font-medium">{subtitle}</p>
            <p className="mt-4 text-gray-700 max-w-2xl">{mission}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/#"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold shadow hover:opacity-95"
              >
                Join SkillSwap
              </a>
              <a
                href="/#"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-indigo-200 text-indigo-700 font-semibold hover:bg-indigo-50"
              >
                Become a Teacher
              </a>
            </div>
          </div>

          <div className="mt-8 md:mt-0 md:w-72 lg:w-96">
            <div className="rounded-xl bg-white p-4 shadow-md">
              <h3 className="text-sm font-semibold text-gray-600">How it works</h3>
              <ol className="mt-3 space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="flex-none w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 grid place-items-center font-semibold">1</span>
                  <div>
                    <div className="font-medium">Create a profile</div>
                    <div className="text-xs text-gray-500">Share what you can teach or what you want to learn.</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-none w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 grid place-items-center font-semibold">2</span>
                  <div>
                    <div className="font-medium">Match & schedule</div>
                    <div className="text-xs text-gray-500">Find people nearby or online and schedule sessions.</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-none w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 grid place-items-center font-semibold">3</span>
                  <div>
                    <div className="font-medium">Swap skills</div>
                    <div className="text-xs text-gray-500">Teach, learn, rate — repeat.</div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t pt-8">
          <h3 className="text-2xl font-bold text-gray-900">Our values</h3>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {values.map((v) => (
              <div key={v.title} className="p-4 bg-white rounded-lg shadow-sm">
                <h4 className="font-semibold">{v.title}</h4>
                <p className="text-sm text-gray-600 mt-2">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-gray-900">Meet the team</h3>
            <p className="text-sm text-gray-500">Open to contributors — join us!</p>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {team.map((m) => (
              <article key={m.name} className="flex gap-4 items-center p-4 bg-white rounded-lg shadow-sm">
                <div className="flex-none">
                  <div className="w-14 h-14 rounded-full bg-indigo-50 grid place-items-center text-indigo-700 font-semibold">{m.name.split(" ")[0].charAt(0)}</div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{m.name}</h4>
                  <p className="text-xs text-indigo-600">{m.role}</p>
                  <p className="text-sm text-gray-600 mt-1">{m.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500">Want us to craft a special About section for your landing page? We can add animations, translations, or connect it to your CMS.</p>
        </div>
      </div>
    </section>
  );
}
