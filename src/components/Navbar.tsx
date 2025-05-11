import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/teams', label: 'Teams' },
    { to: '/products', label: 'Products' },
    { to: '/achievements', label: 'Milestones' },
    { to: '/games', label: 'Games' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm"
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0 font-bold text-2xl"
            style={{ color: '#18995d' }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src='https://res.cloudinary.com/dgwnivpsz/image/upload/v1741418952/15-without_zn6yo2.png' style={{width: '4rem'}} />
              PlanTech Innovations
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={() =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors`
                  }
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? '#18995d' : 'transparent',
                    color: isActive ? '#ffffff' : '#000000',
                  })}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              style={{ color: '#18995d' }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg"
               style={{ backgroundColor: '#e1e7d3' }}>
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium"
                style={({ isActive }) => ({
                  backgroundColor: isActive ? '#18995d' : 'transparent',
                  color: isActive ? '#ffffff' : '#000000',
                })}
                onMouseEnter={(e) => {
                  if (!e.currentTarget.classList.contains('active')) {
                    e.currentTarget.style.backgroundColor = '#ffde59';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!e.currentTarget.classList.contains('active')) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
