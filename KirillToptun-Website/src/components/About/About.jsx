import React from 'react'
import styles from "./About.module.css"
import skills from "../../data/skills.json";


import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <div className={styles.container}>
        <div className={styles.aboutContainer}>
            <h1 className={styles.h1}>About<span className={styles.greenDot}>.</span></h1>
            <div className={styles.horizontalLine}></div>
        </div>
        <div className={styles.about}>
            <div className={styles.aboutLeft}>
                <p className={styles.aboutDescription}>
                Hey! I'm Bob, if you haven't already gathered that by now. I'm a painter turned software engineer from Daytona, Florida. I specialize in the backend, primarily Node and Rust, but love building with whatever tools are right for the job. I currently work for Google on Google Photos. I also toss in my ¢2 with the design systems teams from time to time (once an artist, always an artist, amirite?). Outside of work, I still love to paint. Any given Sunday you'll find me scribbling some happy clouds with my son ☁️ I even teach courses online if you're looking to learn! I'm passively looking for new positions where I can merge my love for code with my love for the canvas. If you think you've got an opening that I might like, let's connect 🔗
                </p>
                <div className={styles.myLinks}>

                </div>
            </div>
            <div className={styles.aboutRight}>
                <div className={styles.mySkillsHeading}>
                    <img src={getImageUrl("about/cmdIcon.png")} alt="My skills image" style={{ maxWidth: '25px'}} />
                    <h3 className={styles.mySkillsHeadingText}>My Skills</h3>
                </div>
                <ul className={styles.skills}>
                    {skills.map((skill, id) => {
                        return(
                            <div className={styles.skill}>
                                {skill.skill}
                            </div>
                        );
                    })}
                </ul>
            </div>
        </div>
    </div>
  )
}
