import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
    path: string
  ) => {
    e.preventDefault();
    setIsOpen(false);

    if (location.pathname !== path) {
      navigate(path);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navLinks = [
    { label: "Home", href: "/", id: "home", path: "/" },
    { label: "About", href: "/about", id: "about", path: "/about" },
    { label: "Contact", href: "/contact", id: "contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-stone/80 backdrop-blur-md border-b border-red-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-red-800/50">

              <img
                src="/logo.png"
                alt="Templar Order Logo"
                className="w-full h-full object-contain transition group-hover:scale-110"
              />

            </div>

            <span className="text-red-800 font-serif text-xl font-bold hidden sm:inline">
              Templar Order
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavigation(e, link.id, link.path)}
                className="text-white hover:text-red-800 transition-colors duration-300 font-sans"
              >
                {link.label}
              </a>
            ))}

            <Link
              to="/contact"
              className="px-6 py-2 bg-red-800 text-white font-serif font-bold rounded hover:shadow-lg hover:shadow-red-800/50 transition-all duration-300"
            >
              Join
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-red-800 transition-colors duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavigation(e, link.id, link.path)}
                className="block px-4 py-2 text-white hover:text-red-800 hover:bg-red-800/10 rounded transition-colors duration-300 font-sans"
              >
                {link.label}
              </a>
            ))}

            <Link
              to="/contact"
              className="block px-4 py-2 bg-red-800 text-white font-serif font-bold rounded hover:shadow-lg hover:shadow-red-800/50 transition-all duration-300 text-center"
            >
              Join the Order
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;