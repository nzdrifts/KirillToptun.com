import React from 'react'
import styles from './Contact.module.css'
import {motion } from "framer-motion";

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

export const Contact = () => {
  return (
    <div className={styles.container}>
        <motion.h1
          className={styles.contact}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          transition={{duration: 0.5, delay: 0.1}}
          viewport={{
              once: true
          }}
        >
          Contact<span className={styles.greenDot}>.</span>
        </motion.h1>
        <motion.p
            className={styles.desc}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            transition={{duration: 0.5, delay: 0.1}}
            viewport={{
              once: true
          }}
        >
            Shoot me an email if you want to connect! You can also find me on  
            <a
            className={styles.linkedin}
            href = {"https://www.linkedin.com/in/kirill-toptun-058721218/"}
            target="_blank"
            rel="noopener noreferrer"
            > Linkedin</a>
        </motion.p>
        <motion.a
            className={styles.mail}
            href = {"mailto:kirilltoptun@gmail.com"}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            transition={{duration: 0.5, delay: 0.1}}
            viewport={{
              once: true
          }}
            > kirilltoptun@gmail.com
        </motion.a>
    </div>
  )
}
