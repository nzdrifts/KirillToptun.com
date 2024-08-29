import React, { useState } from 'react';
import styles from "./About.module.css"
import skills from "../../data/skills.json";
import {motion } from "framer-motion";
import icons from '../../data/icons.json';
import { getImageUrl } from "../../utils";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.1,
        },
    },
};

const fadeInAnimationVariantsSkills = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (id) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.04 * id,
        },
    }),
};


export const About = () => {
    // Initialize state with the default image URL for the first icon
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (

    <div className={styles.container}>
        <motion.div 
            className={styles.aboutContainer}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            transition={{duration: 0.5, delay: 0.25}}
            viewport={{
                once: true
            }}
        >
            <h1 className={styles.h1}>About<span className={styles.greenDot}>.</span></h1>
            <div className={styles.horizontalLine}></div>
        </motion.div>
        <div className={styles.about}>
            <div className={styles.aboutLeft}>
                <motion.p 
                    className={styles.aboutDescription}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    transition={{duration: 0.5, delay: 0.25}}
                    viewport={{
                        once: true
                    }}
                >
                    I am a former student of the Univerity of Auckland with a Bachelors in Computer Science and Information Technology Managment. 
                    <br/><br/>
                    I am very interested in Full-Stack development, with experience in creating Front-End React websites (such as this one),
                    aswell as managing API calls with Python and JS.
                    <br/><br/>
                    Throughout many of my projects I have also worked with Java, learing how to write native android apps 
                    using Android Studio
                </motion.p>
                <div className={styles.myLinks}>
                    <motion.p 
                        className={styles.myLinksText}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        transition={{duration: 0.5, delay: 0.25}}
                        viewport={{
                            once: true
                        }}
                    >
                        My links
                        <img src={getImageUrl("arrow.png")} alt="arrow" className={styles.arrow} />
                    </motion.p>
                    
                    <div className={styles.iconList}>
                        {icons.map((icon, id) => {
                        // Determine the image source based on whether the icon is hovered
                        const imgSrc = hoveredIcon === id ? getImageUrl(icon.greenImg) : getImageUrl(icon.img);

                        return (
                            <a
                                key={id}
                                href = {icon.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                
                            >
                            <motion.img
                                variants={fadeInAnimationVariantsSkills}
                                initial="initial"
                                whileInView="animate"
                                transition={{duration: 0.5, delay: 0.25}}
                                viewport={{
                                    once: true
                                }}
                                custom={id}
                                src={imgSrc}
                                className={styles.iconButton}
                                onMouseEnter={() => setHoveredIcon(id)}
                                onMouseLeave={() => setHoveredIcon(null)}
                                alt={icon.img}
                            />
                            </a>
                        );
                        })}
                    </div>
                </div>
            </div>
            <div className={styles.aboutRight}>
                <motion.div 
                    className={styles.mySkillsHeading}
                    variants={fadeInAnimationVariantsSkills}
                                initial="initial"
                                whileInView="animate"
                                transition={{duration: 0.5, delay: 0.25}}
                                viewport={{
                                    once: true
                                }}
                >
                    <img src={getImageUrl("about/cmdIcon.png")} alt="My skills image" style={{ maxWidth: '25px'}} />
                    <h3 className={styles.mySkillsHeadingText}>My Skills</h3>
                </motion.div>
                <ul className={styles.skills}>
                    {skills.map((skill, id) => (
                            <motion.li 
                                key = {id} 
                                className={styles.skill}
                                variants={fadeInAnimationVariantsSkills}
                                initial="initial"
                                whileInView="animate"
                                viewport={{
                                    once: true
                                }}
                                custom={id}
                            >
                                {skill.skill}
                            </motion.li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}
