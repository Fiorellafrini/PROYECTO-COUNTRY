import React from "react";
import styles from "./HomePage.module.css"
import AllCards from "../7-AllCards/AllCards";
import Navbar from "../5-Navbar/Navbar"
// import { useState } from "react";
// import CardCountry from "../6-CardCountry/CardCountry";
// import { Link } from "react-router-dom";

const HomePage = () => {


    // const [allCountries, setCountries] = useState(""); //creo el estado de personajes

    // const onClose = (id) => { 
    //   setCountries(
    //      allCountries.filter((country) => country.id !== id)
    //   ) 
    // }
    

    return (
        <div className={styles.body}>
            <div className={styles.home}>
                <Navbar></Navbar>
                <AllCards></AllCards>
              
                {/* <CardCountry></CardCountry> */}
                 
            </div>
        </div>
    )
}

export default HomePage;