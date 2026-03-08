import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import MusicPlayer from "../components/MusicPlayer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setFormData({ name: "", email: "", message: "" });
          setSubmitted(false);
        }, 3000);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-stone pt-16 relative">
    

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-stone/50">
        <div className="max-w-3xl mx-auto px-4 text-center section-fade">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-red-800 mb-6">
            Join Our Sacred Order
          </h1>
          <p className="text-xl text-white/80 mb-6 leading-relaxed font-light">
            Ready to answer the call of purpose? The path to becoming a Templar begins with a single step—reaching out to us. Whether you have questions about our organization, wish to learn more about our traditions, or feel compelled to join our ranks, we are here to welcome you.
          </p>
          <p className="text-lg text-white/70 leading-relaxed font-light">
            Complete the form below or contact us directly using the information provided. Our representatives stand ready to discuss your journey and help you understand what it means to be part of something greater than yourself.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-red-800 text-center mb-12 animate-fade-up">
            Contact Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            { [
              { icon: Mail, label: "Email", value: "contact@templarorder.com" },
              { icon: Phone, label: "Phone", value: "8952811944" },
              { icon: MapPin, label: "Location", value: "Jaipur, Rajasthan" },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="glass-effect p-8 rounded-lg text-center card-hover"
                  style={{
                    animation: `fade-up 0.6s ease-out ${0.1 * index}s both`,
                  }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-red-800/20 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-red-800" />
                    </div>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-red-800 mb-2">
                    {item.label}
                  </h3>
                  <p className="text-white/70 font-light">{item.value}</p>
                </div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div
            className="max-w-2xl mx-auto mb-16"
            style={{ animation: "fade-up 0.6s ease-out 0.3s both" }}
          >
            <form onSubmit={handleSubmit} className="glass-effect p-8 md:p-12 rounded-lg space-y-6">
              <div>
                <label htmlFor="name" className="block text-red-800 font-serif font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-stone/50 border border-red-800/30 text-white rounded px-4 py-3 focus:outline-none focus:border-red-800 transition-colors duration-300 font-sans"
                  placeholder="Your Full Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-red-800 font-serif font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-stone/50 border border-red-800/30 text-white rounded px-4 py-3 focus:outline-none focus:border-red-800 transition-colors duration-300 font-sans"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-red-800 font-serif font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-stone/50 border border-red-800/30 text-white rounded px-4 py-3 focus:outline-none focus:border-red-800 transition-colors duration-300 font-sans resize-none"
                  placeholder="Your message to the Order..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-red-800 text-white font-serif font-bold text-lg rounded hover:shadow-lg hover:shadow-red-800/50 transition-all duration-300"
              >
                {submitted ? "Message Sent! ⚜️" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* What Happens Next Section */}
      <section className="py-16 md:py-24 bg-stone/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center text-red-800 mb-12 section-fade">
            Your Journey Begins
          </h2>

          <div className="space-y-8">
            { [
              {
                step: "01",
                title: "Initial Contact",
                description:
                  "Submit your inquiry and tell us about your interest in the Templar Order. Our representatives will reach out within 48 hours to discuss your questions and aspirations.",
              },
              {
                step: "02",
                title: "Discovery Process",
                description:
                  "Learn more about our history, values, and community through conversations with our members and access to historical resources and educational materials.",
              },
              {
                step: "03",
                title: "Commitment & Initiation",
                description:
                  "For those who choose to join, participate in meaningful rituals and ceremonies that honor our traditions while welcoming you as a brother or sister in the Order.",
              },
              {
                step: "04",
                title: "Active Membership",
                description:
                  "Engage with our community through events, study groups, charitable work, and spiritual development programs that enrich your life and strengthen our bonds.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="glass-effect p-8 rounded-lg flex gap-8 items-start card-hover"
                style={{
                  animation: `fade-up 0.6s ease-out ${0.1 * index}s both`,
                }}
              >
                <div className="w-16 h-16 bg-red-800/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-red-800 font-serif text-2xl font-bold">{item.step}</span>
                </div>

                <div>
                  <h3 className="text-2xl font-serif font-bold text-red-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed font-light">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 text-center">
        <div className="max-w-3xl mx-auto px-4 section-fade">
          <h2 className="text-4xl font-serif font-bold text-red-800 mb-6">
            The Hour Calls
          </h2>
          <p className="text-xl text-white/80 mb-8 leading-relaxed font-light">
            Throughout history, individuals of strength and character have answered the call to serve something greater than themselves. The legacy continues. The question is not whether the Order needs you—it is whether you are ready to answer.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;