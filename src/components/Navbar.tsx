import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/entries', label: 'Entries' },
    { path: '/about', label: 'About' },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-serif text-primary-600">
              English Portfolio
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative text-gray-600 hover:text-primary-600 transition-colors duration-200"
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-[1.5px] left-0 right-0 h-0.5 bg-primary-600"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 