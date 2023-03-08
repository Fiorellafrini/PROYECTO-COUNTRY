// //carta individual, lo que veo en la cart a del home 
import styles from "./CardCountry.module.css";
import { Link } from "react-router-dom";// EN LINK VOY A ENCERRAR DONDE QUIERO QUE SE APRIETE PARA ABRIR
import React from "react"

const CardCountry = ({name, flag, id, key, continent, capital, subregion, area, population}) => {
    return (
        <div className={styles.card}>
            
            <Link to= {`/countries/${id}`} className={styles.link}>
            <h3 className={styles.name}>{name}</h3>
            <img className={styles.img} src={flag}alt={flag}></img>
            </Link>
            
            <h3>{id}</h3>
            <h3>{key}</h3>
            {/* <h3>{continent}</h3>
            <h3>{capital}</h3>
            <h3>{subregion}</h3>
            <h3>{area}</h3>
            <h3>{population}</h3> */}
        
        </div>
    )
}
export default CardCountry ;