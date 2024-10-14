import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        const scrollToSection = () => {
            if (hash) {
                const element = document.getElementById(hash.replace('#', ''));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                window.scrollTo(0, 0);
            }
        };

        scrollToSection();

        // Scroll to section when clicking on the same link again
        const handleLinkClick = (event) => {
            if (event.target.tagName === 'A' && event.target.hash) {
                const element = document.getElementById(event.target.hash.replace('#', ''));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        // Add event listener to capture link clicks and trigger the scroll
        window.addEventListener('click', handleLinkClick);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('click', handleLinkClick);
        };
    }, [pathname, hash]);

    return null;
}

export default ScrollToTop