import React from "react";
import styles from "./HomePage.module.css"
import AllCards from "../7-AllCards/AllCards";
import Navbar from "../5-Navbar/Navbar"
import Filters from "../9-Filters/Filters";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { filterActivity,getActivities, getCountries } from "../../redux/actions";
// import { useState } from "react";

const HomePage = () => {

    const dispatch = useDispatch();
   
    useEffect(() => {
      dispatch(getCountries());
    }, [dispatch]);
  
    useEffect(() => {
      dispatch(getActivities());
    }, [dispatch]);
  
    const stateActivity = useSelector((state) => state.activities);

    function handleFilterActivity(event) {
        dispatch(filterActivity(event.target.value));
        // setCurrentPage(1);
      }
    return (
        <div className={styles.body}>
            <div className={styles.home}>
                <Filters
                activities={stateActivity}
                handleFilterActivity={handleFilterActivity}
                ></Filters>
                <Navbar></Navbar>
                <AllCards></AllCards>
              
                {/* <CardCountry></CardCountry> */}
                 
            </div>
        </div>
    )
}

export default HomePage;