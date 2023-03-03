import React from "react";
import styles from "./HomePage.module.css"
import CardsCountry from "../7-CardsCountry/CardsCountry";
// import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className={styles.body}>
            <div className={styles.home}>
                <CardsCountry></CardsCountry>
                 
            </div>
        </div>
    )
}

export default HomePage;