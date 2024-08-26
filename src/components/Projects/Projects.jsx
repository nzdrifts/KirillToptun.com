import React from 'react'
import styles from "./Projects.module.css"
import projects from "../../data/projects.json"

import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  return (
    <div className={styles.container}>
        <div className={styles.titleContainer}>
            <div className={styles.horizontalLine}></div>
            <h1 className={styles.h1}>Projects<span className={styles.greenDot}>.</span></h1>
        </div>
        <div className={styles.projects}>
            {projects.map((project, id) => {
                return <ProjectCard key={id} project={project} />;
            })}
        </div>
    </div>
  )
}
