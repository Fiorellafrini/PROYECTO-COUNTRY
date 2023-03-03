import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css"

const LandingPage = () => {
    return (
      
      <div className={styles.bodyLanding}>
      {/* <video autoPlay muted loop className={styles.vid}> */}
        {/* <source src="videolanding" type="video/mp4"></source> */}
      {/* </video> */}
       <div className={styles.title1}>           
        Welcome 
         {/* To travel the world! */}
     </div>

     <div className={styles.title2}>
         to the 
      <br></br>
         world of travel!
         {/* To travel the world! */}
     </div>

        <div className={styles.land}>
        <Link  to="/home">
          <button>HOME</button>
        </Link>

        <Link to="/about">
          <button>ABOUT</button>
        </Link>
        </div>
    
    
  </div>
        // <div className={styles.bodyLanding}>
        //    <div className={styles.title}>
        //     To travel the world!
        //     </div>
        //   <div className={styles.land}>
        //     <Link  to="/home">
        //       <button>HOME</button>
        //     </Link>

        //     <Link to="/about">
        //       <button>ABOUT</button>
        //     </Link>
        //     </div>
        // </div>
            
    )
}

export default LandingPage;