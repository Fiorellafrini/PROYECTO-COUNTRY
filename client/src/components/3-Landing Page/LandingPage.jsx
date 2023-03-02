import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css"

const LandingPage = () => {
    return (
        <div className={styles.bodyLanding}>
           <div className={styles.title}>
            To travel the world!
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
            
    )
}

export default LandingPage;