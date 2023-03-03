//voy a hacer la logica para traer la info y renderizar lo que quiera
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardCountry from "../6-CardCountry/CardCountry";
import { Link } from "react-router-dom";
import { getCountries } from "../../redux/actions";
import styles from "./CardsCountry.module.css"



const CardsCountry = () => {
  
        let stateCountry = useSelector((state) => state.countries);

        const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getCountries())
    },[dispatch])


    return(
        <div>
            <div className={styles.cards}>
                {stateCountry.length > 0 ? stateCountry.map(countries => 
                <Link to={`/detailpage/${countries.id}`}>
                <CardCountry 
                name={countries.name}
                flag={countries.flag}
                // continent={countries.continent}
                // capital={countries.capital}
                // subregion={countries.subregion}
                // area={countries.area}
                // population={countries.population}
                // key={countries.id}
                // id={countries.id}
                ></CardCountry>
                </Link>)
                : <h2>NADA</h2>}

            </div>


        </div>

    )

}

export default CardsCountry;