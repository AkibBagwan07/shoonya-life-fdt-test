import React from 'react'
import styles from "./hero.module.css"
const Hero = () => {
  return (
      <div className={ styles.parent}>
          <img className={ styles.heroImage} src="https://cdn.midjourney.com/873b60f7-f026-40f9-b2d7-184e981ee1f5/0_3.jpeg" alt="heroImage" />
          <p className={ styles.quote}>Discover Your Inner Peace</p>
          <p className={styles.advertise}>Join us for a series of wellness retreats designed to help you find tranquility and rejuvanation</p>
      </div>
  )
}

export default Hero