// //carta individual, lo que veo en la cart a del home 
import styles from "./CardCountry.module.css";
import { Link } from "react-router-dom";// EN LINK VOY A ENCERRAR DONDE QUIERO QUE SE APRIETE PARA ABRIR
import React from "react"

const CardCountry = ({name, flag, id, continent}) => {
    return (
        <div className={styles.card}>
            {/* <button onClick={onClose}>X</button> */}
            <Link to= {`/countries/${id}`} className={styles.link}>
            <h3 className={styles.name}>{name}</h3>

            <img className={styles.img} src={flag}alt={flag}></img>
            </Link>
            <h3 className={styles.continent}>{continent}</h3>
           
          
        
        </div>
    )
}
export default CardCountry ;