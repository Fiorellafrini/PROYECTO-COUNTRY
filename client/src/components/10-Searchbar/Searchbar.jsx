import React, { useState } from "react";
import {useDispatch} from "react-redux";
import { getCountryName } from "../../redux/actions";
import styles from "./Searchbar.module.css"
// import { Link } from "react-router-dom";


const Searchbar = () => {
   const dispatch = useDispatch();
   const [name, setName] = useState("");

   function handleChange(event){
    setName(event.target.value);
   }

   function handlSubmit(event){
    event.preventDefault();
    dispatch(getCountryName(name));
    setName("")
   }
   

    return (
        <div>
            <input
            className={styles.input}
            type="text"
            placeholder="Search country..."e
            onChange={(event)=> handleChange(event)}
            ></input>
            <button
            className={styles.button}
            type="submit"
            onClick={(event)=> handlSubmit(event)}
            >🔍</button>


        </div>
    )
}

export default Searchbar;