import React from "react";
import styles from "./HomePage.module.css"
import AllCards from "../7-AllCards/AllCards";
// import CardCountry from "../6-CardCountry/CardCountry";
// import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className={styles.body}>
            <div className={styles.home}>
                <AllCards></AllCards>
                {/* <CardCountry></CardCountry> */}
                 
            </div>
        </div>
    )
}

export default HomePage;