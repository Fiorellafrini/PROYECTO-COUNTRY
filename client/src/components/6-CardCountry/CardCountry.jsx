//carta individual, lo que veo en la cart a del home 
import React from "react";
import styles from "./CardCountry.module.css";
// import AllCards from "../7-AllCards/AllCards";
// import { Link } from "react-router-dom";// EN LINK VOY A ENCERRAR DONDE QUIERO QUE SE APRIETE PARA ABRIR




const CardCountry = ({ name, flag, id, continent, capital, subregion, area, population,key }) => {
    return (
        
        <div>
           {/* <Link key={id} to={`/countries/${id}`}> */}
          {/* <button className={styles.button}>{name}</button> */}
          {/* <Link key={id} to={`/countries/${id}`}> */}
          
                <h1>{name}</h1>
                <img src={flag} alt={flag} className={styles.flag}></img>

                {/* </Link> */}
                <h2>{id}</h2>
                {/* <h1>{continent}</h1> */}
                {/* <h3>{capital}</h3> */}
                {/* <h3>{subregion}</h3> */}
                {/* <h3>{area}</h3> */}
                {/* <h3>{population}</h3> */}
                <h3>{key}</h3>

        </div>
    )
}

export default CardCountry;

