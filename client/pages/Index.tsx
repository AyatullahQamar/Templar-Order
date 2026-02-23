import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Sword, Shield, Crown } from "lucide-react";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    {
      title: "Knights of the Crusade",
      image:
        "https://images.unsplash.com/photo-1564577236127-6b6b42ad4f0a?w=1200&h=600&fit=crop",
    },
    {
      title: "Ancient Fortresses",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop",
    },
    {
      title: "Holy Relics and Treasures",
      image:
        "https://images.unsplash.com/photo-1580136579312-94651dfd596d?w=1200&h=600&fit=crop",
    },
    {
      title: "Medieval Armor Legacy",
      image:
        "https://images.unsplash.com/photo-1521747116042-f23626516ea3?w=1200&h=600&fit=crop",
    },
  ];

  const highlights = [
    {
      icon: Shield,
      title: "Brotherhood",
      description:
        "United in faith and purpose, bound by sacred oaths of loyalty and mutual protection.",
    },
    {
      icon: Sword,
      title: "Discipline",
      description:
        "Rigorous training and martial excellence, perfecting the art of combat and virtue.",
    },
    {
      icon: Crown,
      title: "Honor",
      description:
        "Defenders of the realm, upholding justice, chivalry, and the protection of the innocent.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const nextSlide = () => setCurrentSlide((p) => (p + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((p) => (p - 1 + slides.length) % slides.length);

  return (
    <div className="min-h-screen bg-stone pt-16">
      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
      >
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-40" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}
          <div className="absolute inset-0 bg-stone/60" />
        </div>

        {/* Red Glow */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(127,29,29,0.3) 0%, transparent 50%)",
            transform: `translateY(${isVisible ? 0 : -50}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />

        {/* Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-red-800/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.25}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-7xl font-serif font-bold text-red-800 mb-4">
            Templar Order
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Keepers of Ancient Secrets, Guardians of Sacred Truth
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-red-800 text-white font-serif font-bold rounded hover:shadow-lg hover:shadow-red-800/50 transition">
              Join the Order
            </button>

            <button className="px-8 py-3 border-2 border-red-800 text-red-800 font-serif font-bold rounded hover:bg-red-800/10 transition">
              Explore History
            </button>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24">
        <h2 className="text-5xl font-serif font-bold text-center text-red-800 mb-16">
          Core Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="glass-effect p-8 rounded-lg card-hover">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-red-800/20 rounded-lg flex items-center justify-center">
                    <Icon className="w-8 h-8 text-red-800" />
                  </div>
                </div>

                <h3 className="text-2xl font-serif font-bold text-red-800 text-center mb-4">
                  {item.title}
                </h3>

                <p className="text-white/80 text-center">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ✅ NEW SLIDER SECTION BELOW CORE VALUES */}
      <section className="py-20 bg-stone/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-red-800 mb-12">
            Order Chronicles
          </h2>

          <div className="relative h-[420px] md:h-[480px] rounded-xl overflow-hidden group glass-effect">
            {/* Slide */}
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover scale-[1.02] group-hover:scale-[1.05] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone via-stone/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-white/70 text-sm mb-2">Featured Chronicle</p>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-red-800 drop-shadow">
                    {slide.title}
                  </h3>
                </div>
              </div>
            ))}

            {/* Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-red-800/20 hover:bg-red-800/40 text-red-800 p-3 rounded-lg transition opacity-0 group-hover:opacity-100"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-red-800/20 hover:bg-red-800/40 text-red-800 p-3 rounded-lg transition opacity-0 group-hover:opacity-100"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-red-800 w-10" : "bg-red-800/40 w-2"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-5xl font-serif font-bold text-red-800 mb-6">
          Answer the Call
        </h2>

        <p className="text-white/80 mb-10 max-w-3xl mx-auto">
          Step forward and discover what it means to be part of a legacy that spans centuries.
        </p>

        <div className="flex justify-center gap-4">
          <button className="px-10 py-4 bg-red-800 text-white font-serif font-bold rounded hover:shadow-lg hover:shadow-red-800/50 transition">
            Join the Order
          </button>

          <button className="px-10 py-4 border-2 border-red-800 text-red-800 font-serif font-bold rounded hover:bg-red-800/10 transition">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
};

export default Index;