import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'

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
            <button className="menu-button" onClick={toggleMenu}>
                {isOpen ? 'Close' : 'Menu'}
            </button>

            <motion.div
                className="menu-content"
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={menuVariants}
            >
                <nav className="menu-links">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/#works">Works</Link></li>
                        <li><Link to="/#about">About</Link></li>
                        <li><Link to="/#contact">Contact</Link></li>
                    </ul>
                </nav>

            </motion.div>
        </div>
    );
};

export default HeaderMenu;
