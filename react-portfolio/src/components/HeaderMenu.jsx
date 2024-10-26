import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeaderMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Close the menu when clicking outside of it
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    // Close the menu when a link is clicked
    const closeMenuOnClick = () => {
        setIsOpen(false);
    };

    // Framer Motion variants for animations (mobile)
    const menuVariants = {
        open: {
            opacity: 1,
            transform: 'translateX(0%)',  // Slide in for mobile
            transition: { duration: 0.5, ease: 'easeInOut' }
        },
        closed: {
            opacity: 0,
            transform: 'translateX(100%)',  // Start off-screen (right)
            transition: { duration: 0.5, ease: 'easeInOut' }
        }
    };

    return (
        <div className="menu-container" ref={menuRef}>
            <button className="menu-button" onClick={toggleMenu}>
                {isOpen ? 'Close' : 'Menu'}
            </button>

            <motion.div
                className={`menu-content ${isOpen ? 'open' : ''}`}
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={menuVariants}
            >
                <nav className="menu-links">
                    <ul>
                        <li><Link to="/" onClick={closeMenuOnClick}>Home</Link></li>
                        <li><Link to="/#works" onClick={closeMenuOnClick}>Works</Link></li>
                        <li><Link to="/#about" onClick={closeMenuOnClick}>About</Link></li>
                        <li><Link to="/#contact" onClick={closeMenuOnClick}>Contact</Link></li>
                    </ul>
                </nav>
            </motion.div>
        </div>
    );
};

export default HeaderMenu;

