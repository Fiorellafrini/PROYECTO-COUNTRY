import React from "react";
import { useParams } from "react-router-dom"; //ME PERMITE TRAER LAS PROPIEDADES, ME TRAE UN OBJ
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../redux/actions";
import styles from "./DetailPage.module.css"
import { Link } from "react-router-dom";



// useParams es hook que me permmite traerme propiedades . 
// useParams me retorna un objeto 

const DetailPage = () => {
    const { id } = useParams()
    const dispatch=useDispatch()
    const {name, flag, continent, capital, subregion, area, population}= useSelector(state => state.detail)


// //cuando se monta
    useEffect(() => {
        dispatch(getDetail(id))
    }, [dispatch, id])

    return (
        <div className={styles.cardsGrid}> 
          <div className={styles.descripcion}>
            <p className={styles.name}>Name :  {name}</p>
            <img className={styles.img} src={flag}alt={flag}></img>
            <p>Id : {id}</p>
            <p>Continent : {continent}</p>
            <p>Capital : {capital}</p>
            <p>Subregion : {subregion}</p>
            <p>Area : {area}</p>
            <p>Population : {population}</p>
            <div className={styles.link}>
            
            <Link to="/home">
              <button className={styles.link}>BACK</button>
            </Link>
            </div>
          </div>
            </div>
    )
}


export default DetailPage;