import React from 'react'
import styles from "./cardWrapper.module.css"
import Card from '../card/card'

const CardWrapper = ({ data }) => {
  return (
    <div className={styles.cardsParent}>{data?.map((ele, idx) => {
     const months = ["Jan","Feb","Mar","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];
     const month = months[new Date(ele.date).getMonth()]
     const date = new Date(ele.date).getDate()
     const duration = date + ele.duration 
     const year = new Date(ele.date).getFullYear() 
      
      return (
        <Card key={idx} imageSrc={ele.image}
          title={ele.title}
          description={ele.description}
          date={`${month} ${date}- ${duration},${year}`}
          location={ele.location}
          price={ ele.price} /> 
      )
    })}</div>
  )
}

export default CardWrapper