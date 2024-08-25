import React, { useState } from 'react';
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
      <button className={styles.button}>My resume</button>
    </nav>
  );
};
