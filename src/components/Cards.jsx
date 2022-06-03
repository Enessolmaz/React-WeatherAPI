import React from 'react'

function Cards({city, cityName}) {
  return (
    <div className='card-flex'>
        <div className="card">
           <div className="top-text-content">
           <h4>{cityName}</h4>
            <h4>{city.date}</h4>
           </div>
            <img src={city.day.condition.icon} alt="" />
            <h5>{
            city.day.condition.text === "Sunny" ? "Güneşli" 
            : city.day.condition.text === "Partly cloudy" ? "Parçalı Bulutlu" 
            : city.day.condition.text === "Heavy rain" ? "Sağanak Yağışlı" 
            : city.day.condition.text === "Patchy rain possible" ? "Yağmur Yağabilir" 
            : city.day.condition.text === "Moderate rain" ? "Hafif Yağmurlu" 
            : city.day.condition.text === "Overcast" ? "Bulutlu"
            : city.day.condition.text  }</h5>
            <div className="temp">
            <h5>Gündüz {city.day.maxtemp_c}</h5>
            <h5>Gece {city.day.mintemp_c}</h5>
            </div>
        </div>
      
    </div>
  )
}

export default Cards
