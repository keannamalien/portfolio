import React from 'react'
import { useState, useEffect } from 'react'
import Loading from '../utilities/Loading'
import { restBase } from '../utilities/Utilities'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

const About = () => {
    const restPath = restBase + 'pages/8?acf_format=standard'
    const [restData, setData] = useState([])
    const [isLoaded, setLoadStatus] = useState(false)
    const [openIndex, setOpenIndex] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath)
            if (response.ok) {
                const data = await response.json()
                setData(data)
                setLoadStatus(true)
            } else {
                setLoadStatus(false)
            }
        }
        fetchData()
    }, [restPath]);

    const toggleAccordion = (index) => {
        setOpenIndex(index === openIndex ? null : index);

    };

    const AccordionItem = ({ title, content, index, skillType }) => {
        const isOpen = openIndex === index; // Determine if this accordion should be open
        return (
            <div className="accordion-item">
                <div
                    className="accordion-header"
                    onClick={() => toggleAccordion(index)}
                    style={{ cursor: 'pointer', padding: '10px', display: 'flex', justifyContent: 'space-between' }}
                >
                    <h3>{title}</h3>
                    <span>{isOpen ? '-' : '+'}</span>
                </div>

                <motion.div
                    className="accordion-content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{
                        duration: 0.5,
                        ease: [0.25, 0.46, 0.45, 0.94],
                    }}

                    style={{ overflow: 'hidden' }}
                >

                    {Array.isArray(content) ? (
                        <ul style={{ padding: '10px', listStyleType: 'disc' }}>
                            {content.map((item, index) => (
                                <li key={index}>
                                    {item[skillType]}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>{content}</p>
                    )}
                </motion.div>
            </div>
        );
    };

    return (
        <>
            {isLoaded &&
                <>
                    <section id="about" className='about-section'>
                        <h2>About Me</h2>
                        {/* <div className='separator about'>
                        </div> */}
                        <div className='about-text'>
                            <h3>{restData.acf.about_heading}</h3>
                            <p>{restData.acf.about_paragraph[0].about_text}<strong className='bold'>{restData.acf.about_paragraph[1].about_text}</strong></p>
                        </div>

                        <div className="accordion">
                            <AccordionItem
                                title="Development"
                                content={restData.acf?.development}
                                index={0}
                                skillType="development"
                            />
                            <AccordionItem
                                title="Design"
                                content={restData.acf?.design}
                                index={1}
                                skillType="design"
                            />
                            <AccordionItem
                                title="Architectural"
                                content={restData.acf?.architectural}
                                index={2}
                                skillType="architectural"
                            />

                        </div>
                    </section>
                </>
            }
        </>
    )
}

export default About