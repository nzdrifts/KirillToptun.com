import React from 'react'

import styles from "./Intro.module.css"

export const Intro = () => {
  return (
    <div className={styles.container}>
        <h1>Hey, I'm Kirill<span className={styles.greenDot}>.</span></h1>
        <p className={styles.subtitle}>I'm a <span className={styles.green}>Graduate Computer Science</span> Student</p>
        <p className={styles.description}>
        I've spent yonks' in the search for a stable job and a proper 
        top notch career in software development. Hire me today 
        and I will say thanks mate!
        </p>
        <button className={styles.button}>Contact me</button>
    </div>
  )
}
