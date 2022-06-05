import React from 'react'

function Cards({city, cityName}) {
  return (
    <div className='card-flex'>
        <div className="card">
           <div className="top-text-content">
           <h4 className='cityName'>{cityName}</h4>
            <h4>{city.date}</h4>
           </div>
            <img src={city.day.condition.icon} alt="" />
            <div className="temp">
            <h4>{
            city.day.condition.text === "Sunny" ? "Güneşli" 
            : city.day.condition.text === "Partly cloudy" ? "Parçalı Bulutlu" 
            : city.day.condition.text === "Heavy rain" ? "Sağanak Yağışlı" 
            : city.day.condition.text === "Patchy rain possible" ? "Yağmur Yağabilir" 
            : city.day.condition.text === "Moderate rain" ? "Hafif Yağmurlu" 
            : city.day.condition.text === "Overcast" ? "Bulutlu"
            : city.day.condition.text  }</h4>
            
            <h5 className='centerText'>{city.day.maxtemp_c} °C</h5>
            <h5>{city.day.mintemp_c}</h5>
            </div>
        </div>
      
    </div>
  )
}

export default Cards
