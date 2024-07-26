import React from 'react'
import styles from "./card.module.css"

const Card = ({ imageSrc, title, description, date, location, price }) => {
    return (
           <div className={ styles.card}>
          <img className={ styles.image} src={imageSrc} alt="" />
          <h3>{title}</h3>
          <p>{description}</p>
          <p>Date : {date}</p>
          <p>Location : {location}</p>
        <p style={{fontWeight:"600"}}>Price : ${ price}</p>
        </div>
  )
}

export default Card