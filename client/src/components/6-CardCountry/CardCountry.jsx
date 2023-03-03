import React from "react";



const CardCountry = ({ name, flag, id, continent, capital, subregion, area, population,key }) => {
    return (
        <div>
           
            <div>
                <h2>{id}</h2>
                <h4>{name}</h4>

            </div>
            
            <div>
                <h1>{continent}</h1>
                <h3>{capital}</h3>
                <h3>{subregion}</h3>
                <h3>{area}</h3>
                <h3>{population}</h3>
                <h3>{key}</h3>
            </div>
           
            <div>
                <img src={flag} alt="flags"></img>
            </div>
           
      
        </div>
    )
}

export default CardCountry;