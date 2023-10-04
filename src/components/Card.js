import React, { useState } from 'react';

const Card = ({data}) => {

const [currentPage, setCurreentPage] = useState(1);
    
 const totalCars = data.cars;
 const carsPerPage = 6;
 const startIndex = (currentPage - 1) *  carsPerPage;
 const endIndex = startIndex + carsPerPage;
 const cars = totalCars.slice(startIndex, endIndex);

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
