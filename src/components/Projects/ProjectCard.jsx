import React, { useState } from 'react';

import {motion } from "framer-motion";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({project: {img, title, githubLink, skills, description},}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isHoveredimgBox, setIsHoveredimgBox] = useState(false)

    


  return (
    <div className={styles.container}>
        <div 
            className={styles.imgBox}
            onMouseEnter={() => setIsHoveredimgBox(true)}
            onMouseLeave={() => setIsHoveredimgBox(false)}
        >
            <motion.div
                animate={isHoveredimgBox ? { scale: 1.2, rotate: 2 } : { scale: 1 }}
                transition={{ duration: 0.1 }}
            >
                <img 
                    src={getImageUrl(img)} 
                    alt={title} 
                    className={styles.projectImg}
                    
                />
            </motion.div>
        </div>
        <div className={styles.titleContainer}>
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
        </div>
        <div className={styles.skillsContainer}>
            {skills.join(' - ')}
        </div>
        <div className={styles.descriptionContainer}>
            <p>{description}</p>
        </div>
    </div>
  )
}
