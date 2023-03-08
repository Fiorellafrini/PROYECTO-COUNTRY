import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";


const Navbar = () => {
return (
    <div className={styles.bodynav}>
        <div className={styles.link}>
            <Link to="/">
                <button>LANDING</button>
            </Link>

            <Link to="/home">
                <button>HOME</button>
            </Link>

            <Link to="/about">
                <button>ABOUT</button>
            </Link>


            <Link to="/create">
                <button>CREATE</button>
            </Link>
           

        </div>
    </div>
)
}

export default Navbar;