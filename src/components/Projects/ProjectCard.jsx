import React, { useState, useEffect } from 'react';

import {motion } from "framer-motion";
import styles from "./ProjectCard.module.css";
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


export const ProjectCard = ({project: {img, title, githubLink, skills, description, orientation},}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isHoveredimgBox, setIsHoveredimgBox] = useState(false);

    const [isPortrait, setIsPortrait] = useState(false);
    useEffect(() => {
        setIsPortrait(orientation === 'true');
    }, [orientation]);


  return (
    <div className={styles.container}>
        <motion.div 
            className={styles.imgBox}
            onMouseEnter={() => setIsHoveredimgBox(true)}
            onMouseLeave={() => setIsHoveredimgBox(false)}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            transition={{duration: 0.5, delay: 0.25}}
            viewport={{
                once: true
            }}
        >
            <motion.div 
                animate={isHoveredimgBox ? { scale: 1.2, rotate: 2 } : { scale: 1 }}
                transition={{ duration: 0.1 }}
                style={{
                    top: isPortrait ? '30%': '45%',
                    position: 'relative'}}
            >
                <img
                    style={{
                        width: isPortrait ? '40%': '80%'
                    }}
                    src={getImageUrl(img)} 
                    alt={title} 
                    className={styles.projectImg}
                    
                />
            </motion.div>
        </motion.div>
        <motion.div 
            className={styles.titleContainer}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            transition={{duration: 0.5, delay: 0.25}}
            viewport={{
                once: true
            }}
        >
            <div className={styles.projectTitle}>{title}</div>
            <div className={styles.horizontalLine}></div>
            <a
                href = {githubLink}
                target="_blank"
                rel="noopener noreferrer"
                
            >
            <img
                src={isHovered ? getImageUrl("icons/githubGreen.png") : getImageUrl("icons/github.png")}
                className={styles.githubButton}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                alt="GitHub"
            />
            </a>
        </motion.div>
        <motion.div 
            className={styles.skillsContainer}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            transition={{duration: 0.5, delay: 0.25}}
            viewport={{
                once: true
            }}
        >
            {skills.join(' - ')}
        </motion.div>
        <motion.div 
            className={styles.descriptionContainer}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            transition={{duration: 0.5, delay: 0.25}}
            viewport={{
                once: true
            }}
        >
            <p>{description}</p>
        </motion.div>
    </div>
  )
}
