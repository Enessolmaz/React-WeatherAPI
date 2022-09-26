import React, { useContext, useState } from 'react'
import axios from 'axios';
import Cards from './Cards';
import Context from './Context'


function Inputs() {
    
        const zeroedInputValue = {city : '' }
        const {cityName, setCityName, ApiKEY, wheatherData,setWeatherData} = useContext(Context)
        const [city, setCity] = useState(zeroedInputValue);


            // Prototurk ALERT 
        let notification = (msg) => {
       
            let old_div = document.querySelector('.alert');
            if (old_div){
                old_div.parentNode.removeChild(old_div);
            }
        
            let div = document.createElement('div');
            div.className = 'alert';
            div.innerHTML = msg;
            document.body.appendChild(div);

            setTimeout(() => div.classList.add('active'), 1);
            setTimeout(() => div.classList.remove('active'), 1000);
        }
        

    let inputHandler = (e) => {
            setCity({...city, [e.target.name]: e.target.value})
           
            // console.log(city.city)
    }
    // http://api.weatherapi.com/v1/forecast.json?key=c1a5bffd0f9e4956b32204735221505&q=London&days=3&aqi=no&alerts=no
    let searchClick = async(e) => {
        if(city.city === ''){
            notification('Lütfen Şehir İsmi Giriniz.')
            return false;
        }

        // FETCH 

        // const data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${ApiKEY}&q=${city.city}&days=3&aqi=no&alert=no`)
        // const result = await data.json();
        // console.log(result)
        // setWeatherData(result.forecast.forecastday)
         //  setCityName(result.location.name)

   else(
    axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${ApiKEY}&q=${city.city}&days=7&aqi=no&alert=no`) 
    .then(res => {
        setWeatherData(res.data.forecast.forecastday)
        setCityName(res.data.location.name)
    })
    .catch(err => {
        console.log("Girilen şehir bulunamadı", err)
        notification("Girilen şehir bulunamadı");
    })
   )



       
        notification(`Girilen Şehir ${city.city}`);
         setCity(zeroedInputValue)
        e.preventDefault()
       
    }



  return (
        <>        
        <div className="container">

        <input className='searchInput' value={city.city} name='city' type="text" placeholder='Search a City' onChange={inputHandler}/>
        <button className='btn' onClick={searchClick}>Search</button>
        </div>

        

            <div className="card-flex">
        {
            wheatherData.map((item, idx) => (
                <Cards key={idx} cityName={cityName} city={item} />
            ))
        }

       </div>

      
       </>

  )
}

export default Inputs
