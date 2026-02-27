import { useEffect, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const timelineEvents = [
    {
      year: "1119",
      title: "The Origins",
      description:
        "Founded in the aftermath of the First Crusade, the Templar Order emerged as guardians of sacred pilgrimage routes to the Holy Land.",
    },
    {
      year: "1129",
      title: "Official Recognition",
      description:
        "The Order received official papal approval at the Council of Troyes, becoming the first monastic military order of Christendom.",
    },
    {
      year: "1187-1291",
      title: "The Crusades",
      description:
        "For nearly two centuries, the Knights Templar played a crucial role in the Crusades.",
    },
    {
      year: "1312",
      title: "The Legacy",
      description:
        "Though disbanded in medieval times, the Order's legacy endures through history.",
    },
  ];

  return (
    <div className="min-h-screen bg-stone pt-16">
      {/* 🔥 FULL WIDTH VIDEO HERO */}
<section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
  {/* VIDEO */}
  <video
    src="/about-templar.mp4"   // Put file inside public/
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/60" />

  {/* CONTENT */}
  <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-4xl md:text-6xl font-serif font-bold text-red-800 mb-6">
      The Legacy of the Templar Order
    </h1>

    <p className="text-white/80 max-w-3xl text-lg md:text-xl">
      Forged in faith. Tempered in battle. Remembered through centuries.
    </p>
  </div>
</section>
      {/* Mission Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-98 rounded-lg overflow-hidden">
            <img
              src="/templarr.jpg"
              alt="Templar Knight"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone via-transparent to-transparent opacity-60" />
          </div>

          <div>
            <h2 className="text-5xl font-serif font-bold text-red-800 mb-6">
              Our Mission & Heritage
            </h2>

            <p className="text-white/80 mb-6">
              The Templar Order stands as a beacon of virtue and unwavering
              purpose.
            </p>

            <h3 className="text-2xl font-serif font-bold text-red-800 mb-4">
              Core Principles
            </h3>

            <ul className="space-y-3">
              {[
                "Unwavering Courage",
                "Pursuit of Justice",
                "Sacred Brotherhood",
                "Excellence in Endeavors",
                "Growth Through Virtue",
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-800 rounded-full mt-2" />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="about" className="py-16 md:py-24 bg-stone/50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-red-800 mb-16">
            Our Timeline
          </h2>

          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-red-800 via-red-800/50 to-red-800/20" />

            <div className="space-y-12">
              {timelineEvents.map((event, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <div key={index} className="relative">
                    {/* Dot */}
                    <div className="absolute left-1/2 top-8 -translate-x-1/2 w-5 h-5 bg-red-800 rounded-full border-4 border-stone shadow-lg shadow-red-800/50 z-20" />

                    {/* ✅ MOBILE: single card only (no duplicates) */}
                    <div className="md:hidden pt-16">
                      <div className="glass-effect p-6 rounded-lg w-full">
                        <div className="text-2xl font-serif font-bold text-red-800 mb-2">
                          {event.year}
                        </div>
                        <h3 className="text-xl font-serif font-bold text-white mb-3">
                          {event.title}
                        </h3>
                        <p className="text-white/70 font-light leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>

                    {/* ✅ DESKTOP: zig-zag layout */}
                    <div className="hidden md:grid grid-cols-2 gap-x-16 items-start">
                      {/* LEFT SIDE */}
                      <div className={isLeft ? "justify-self-end" : ""}>
                        {isLeft && (
                          <div className="glass-effect p-6 rounded-lg w-full max-w-md">
                            <div className="text-2xl font-serif font-bold text-red-800 mb-2">
                              {event.year}
                            </div>
                            <h3 className="text-xl font-serif font-bold text-white mb-3">
                              {event.title}
                            </h3>
                            <p className="text-white/70 font-light leading-relaxed">
                              {event.description}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* RIGHT SIDE */}
                      <div className={!isLeft ? "justify-self-start" : ""}>
                        {!isLeft && (
                          <div className="glass-effect p-6 rounded-lg w-full max-w-md">
                            <div className="text-2xl font-serif font-bold text-red-800 mb-2">
                              {event.year}
                            </div>
                            <h3 className="text-xl font-serif font-bold text-white mb-3">
                              {event.title}
                            </h3>
                            <p className="text-white/70 font-light leading-relaxed">
                              {event.description}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Connector line (desktop only) */}
                    <div
                      className={`hidden md:block absolute top-[38px] h-[2px] bg-red-800/40 ${
                        isLeft ? "right-1/2 w-16" : "left-1/2 w-16"
                      }`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-5xl font-serif font-bold text-center text-red-800 mb-16">
            What We Value
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {["Chivalry", "Loyalty", "Wisdom", "Resilience"].map(
              (title, index) => (
                <div key={index} className="glass-effect p-8 rounded-lg">
                  <h3 className="text-2xl font-serif font-bold text-red-800 mb-4">
                    {title}
                  </h3>
                  <p className="text-white/70">
                    Dedicated to timeless virtues and noble ideals.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;