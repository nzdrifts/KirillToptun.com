import React from 'react'
import { motion } from "framer-motion"

import styles from "./Intro.module.css"

const fadeInAnimationVariants = {
  initial: {
      opacity: 0,
      y: 100,
  },
  animate: {
      opacity: 1,
      y: 0,
  },
};

export const Intro = () => {
  return (
    <div className={styles.container}>
        <motion.h1
          className={styles.myLinksText}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          transition={{duration: 0.5, delay: 0.1}}
          viewport={{
              once: true
          }}
        >
          Hey, I'm Kirill<span className={styles.greenDot}>.</span>
        </motion.h1>
        <motion.p 
          className={styles.subtitle}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          transition={{duration: 0.5, delay: 0.15}}
          viewport={{
              once: true
          }}
        >
          I'm a <span className={styles.green}>Graduate Computer Science</span> Student
        </motion.p>
        <motion.p 
          className={styles.description}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          transition={{duration: 0.5, delay: 0.2}}
          viewport={{
              once: true
          }}
        >
        I've spent yonks' in the search for a stable job and a proper 
        top notch career in software development. Hire me today 
        and I will say thanks mate!
        </motion.p>
        <a href = {""}>
        <motion.button
          className={styles.button}
          
          target="_blank"
          rel="noopener noreferrer"
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          transition={{duration: 0.5, delay: 0.25}}
          viewport={{
              once: true
          }}
        >
          Contact me
        </motion.button></a>
    </div>
  )
}
