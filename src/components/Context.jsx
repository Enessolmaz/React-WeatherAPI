import React,{ createContext, useState } from "react";

const Context = createContext();


export const  ContextProvider = ({children}) => {
  
    const [cityName, setCityName] = useState([]);
    const [wheatherData, setWeatherData] = useState([]);
    const ApiKEY = "c1a5bffd0f9e4956b32204735221505"
    const values = { 
        cityName,
        setCityName,
        ApiKEY,
        wheatherData,
        setWeatherData
    }

    return (
      <Context.Provider value={values}>
        {children}
        
      </Context.Provider>
    )
  }

  export default Context ;