import React, { useState } from 'react';

const Card = ({data}) => {
 
 const [cardData, setCardData] = useState (data)
 const cars = cardData.cars

  return (
    <>
      {
        cars.map((car, index) => (
            <div key={index}>
                <p>{car.carname}</p>
            </div>
        ))
      }
    </>
  )
}

export default Card
