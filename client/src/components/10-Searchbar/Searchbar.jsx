import React, { useState } from "react";
import {useDispatch} from "react-redux";
import { deleteCountry, getCountries, getCountryName } from "../../redux/actions";
import styles from "./Searchbar.module.css"
import { Link } from "react-router-dom";


const Searchbar = () => {
   const dispatch = useDispatch();

   const [name, setName] = useState("");

   function handleChange(event){
    setName(event.target.value);
   }

   function handleSubmit(event){
    event.preventDefault(); // evita que se actualice la pagina 
    dispatch(getCountryName(name));
    setName(" ")
   }
   
   const reset = () => {
    dispatch(deleteCountry())
    dispatch(getCountries())
}
    return (
        <div>
            <input className={styles.input} type="text" placeholder="Search country..." onChange={(event)=> handleChange(event)}></input>
            <button className={styles.button} type="submit" onClick={(event)=> handleSubmit(event)}>🔍</button>
            <Link to="/home">
                <button className={styles.btn} onClick={reset} >Delete Search 🗑</button>
            </Link>
        
        </div>
    )
}

export default Searchbar;