import React from 'react'
import styles from "./Projects.module.css"
import projects from "../../data/projects.json"
import {motion } from "framer-motion";

import { ProjectCard } from './ProjectCard';

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
export const Projects = () => {
  return (
    <div className={styles.container}>
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
            <div className={styles.horizontalLine}></div>
            <h1 className={styles.h1}>Projects<span className={styles.greenDot}>.</span></h1>
        </motion.div>
        <div className={styles.projects}>
            {projects.map((project, id) => {
                return <ProjectCard key={id} project={project} />;
            })}
        </div>
    </div>
  )
}
