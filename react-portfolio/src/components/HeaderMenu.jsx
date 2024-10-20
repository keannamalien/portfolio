import React, { useState } from 'react';
import { motion } from 'framer-motion';

const HeaderMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Framer Motion variants for animations
    const menuVariants = {
        open: {
            opacity: 1,
            height: '20rem',
            transition: { duration: 0.5, ease: 'easeInOut' }
        },
        closed: {
            opacity: 0,
            height: 0,
            transition: { duration: 0.5, ease: 'easeInOut' }
        }
    };

    return (
        <div className="menu-container">
            {/* Menu button fixed in the bottom right */}
            <button className="menu-button" onClick={toggleMenu}>
                {isOpen ? 'Close' : 'Menu'}
            </button>

            {/* Animated Menu */}
            <motion.div
                className="menu-content"
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={menuVariants}
            >
                {/* Menu items (the navigation links, resume, etc.) */}
                <nav className="menu-links">
                    <a href="#works" className="menu-item">👌 Works</a>
                    <a href="#me" className="menu-item">👤 Me</a>
                </nav>

                <div className="social-links">
                    <a href="https://linkedin.com" className="social-item">LinkedIn</a>
                    <a href="mailto:youremail@example.com" className="social-item">Email</a>
                    <a href="https://twitter.com" className="social-item">Twitter</a>
                </div>

                <div className="download-resume">
                    <a href="/path-to-resume.pdf" download className="resume-link">
                        ⬇️ Download Resume
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default HeaderMenu;
