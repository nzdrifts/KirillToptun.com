import React, { useEffect, useRef, useState } from 'react';
import styles from './Navbar.module.css';
import { getImageUrl } from '../../utils';
import icons from '../../data/icons.json';

export const Navbar = () => {
  // Initialize state with the default image URL for the first icon
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <nav className={styles.container}>
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
              <img
                
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
      <ResumeButton/>
    </nav>
  );
};

const ResumeButton = () => {
  const btnRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const {width, height} = e.target.getBoundingClientRect();

      const offsetX = e.offsetX;
      const offsetY = e.offsetY;

      const left = `${(offsetX/width)*100}%`;
      const top = `${(offsetY/height)*100}%`;

      spanRef.current.style.transform = `translate(-50%, -50%) scale(1)`;
      spanRef.current.style.left = left;
      spanRef.current.style.top = top;
    };

    const handleMouseLeave = (e) => {
      spanRef.current.style.transform = `translate(-50%, -50%) scale(0)`;
    };

    btnRef.current.addEventListener("mousemove",
    handleMouseMove)
    btnRef.current.addEventListener("mouseleave",
    handleMouseLeave)

    return () => {
      btnRef.current.removeEventListener("mousemove",
      handleMouseMove)
      btnRef.current.removeEventListener("mouseleave",
      handleMouseLeave)
      
    }
  }, [])


  return ( 
  <button ref={btnRef} className={styles.button}>
    <span className={styles.buttonText}>My resume</span>
    <span
      ref={spanRef}
      className={styles.hoverEffect}
    ></span>
    </button>
  );
};