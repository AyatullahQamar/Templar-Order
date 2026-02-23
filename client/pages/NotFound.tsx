import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-stone flex items-center justify-center pt-16">
      <div className="text-center max-w-xl mx-auto px-4 animate-fade-up">
        <h1 className="text-8xl md:text-9xl font-serif font-bold text-gold mb-4">404</h1>
        <p className="text-2xl font-serif text-white mb-4">This Path Does Not Exist</p>
        <p className="text-lg text-white/70 mb-8 font-light">
          The page you seek is lost to history. Return to the main order and continue your journey.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-gold text-stone font-serif font-bold text-lg rounded hover:shadow-lg hover:shadow-gold/50 transition-all duration-300 button-glow"
        >
          Return to the Order
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
