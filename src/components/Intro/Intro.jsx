import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion"
import { getImageUrl } from '../../utils';
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
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img 
        src={getImageUrl('htmlimg.png')} 
        alt="overlappingImage" 
        className={styles.htmlimg}
        
        style={{ transform : `translateY(${scrollY * -0.2}px)` }}
        />
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
        In my free time I work on
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
    </div>
  )
}
