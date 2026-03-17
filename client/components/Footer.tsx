import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Github, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-stone/50 border-t border-red-800/30 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded flex items-center justify-center">
  <img
    src="/logo.png"
    alt="Templar Order Logo"
    className="w-full h-full object-contain"
  />
</div>
              <span className="text-red-800 font-serif text-lg font-bold">Templar Order</span>
            </div>

            <p className="text-white/60 text-sm font-light mb-4">
              Guardians of honor and keepers of ancient traditions. Standing as a beacon of virtue and purpose.
            </p>

            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-red-800/20 rounded hover:bg-red-800/40 flex items-center justify-center text-red-800 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-red-800 font-serif font-bold mb-4 text-lg">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "History", href: "/" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-red-800 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-red-800 font-serif font-bold mb-4 text-lg">Resources</h4>
            <ul className="space-y-3">
              {["Code of Conduct", "Historical Archives", "Membership FAQ", "Events Calendar"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/60 hover:text-red-800 transition-colors duration-300 text-sm"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-red-800 font-serif font-bold mb-4 text-lg">Contact</h4>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/60 hover:text-red-800 transition text-sm cursor-pointer">
                <Mail size={16} className="text-red-800" />
                <span>contact@templarorder.com</span>
              </div>

              <div className="flex items-center gap-3 text-white/60 hover:text-red-800 transition text-sm cursor-pointer">
                <Phone size={16} className="text-red-800" />
                <span>+91 8952811944</span>
              </div>

             
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-red-800/30 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-white/60 text-sm">
              © 2024 Templar Order. All rights reserved.
            </p>

            <div className="flex gap-6 text-white/60 text-sm">
              {["Privacy Policy", "Terms of Service", "Sitemap"].map((item) => (
                <a key={item} href="#" className="hover:text-red-800 transition">
                  {item}
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;