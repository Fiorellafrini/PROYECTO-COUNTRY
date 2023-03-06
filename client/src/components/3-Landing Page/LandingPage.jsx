import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css"
import videolanding from "../images-font/videolanding.mp4";

const LandingPage = () => {
    return (
      
      <div className={styles.bodyLanding}>
        
       
       <div className={styles.title1}>           
        Welcome 
       </div>

       <div className={styles.title2}>
        to the 
          <br></br>
        world of travel!
       </div>

        <div className={styles.land}>
          <Link  to="/home">
            <button>HOME</button>
          </Link>

          <Link to="/about">
            <button>ABOUT</button>
          </Link>
        </div>
      
        <video autoPlay muted loop className={styles.video}>
          <source src={videolanding} type="video/mp4"></source>
        </video>
    
      </div>   
    )
  }

export default LandingPage;