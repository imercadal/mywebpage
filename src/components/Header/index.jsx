import * as React from "react";
import styles from './Header.module.css';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import igLogo from "../../assets/logos/ig-logo-morado.png";
import emailLogo from "../../assets/logos/email-logo-morado.png";
import githubLogo from "../../assets/logos/github-logo-morado.png"

const Header = () => {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    }

    const goToAbout = () => {
        navigate('/about');
    }
    
    const goToCinematography = () => {
        navigate('/cinematography');
    }
    
    return (
        <div className={ styles.navbar }>
            <div className={ styles.leftNav }>
                <motion.h2 className={styles.navTitle} onClick={ goToHome }
                    whileHover={{ 
                        scale: 1.1,
                        textShadow: "0px 0px 8px rgb(255,255,255)"
                    }}
                >
                    irene Mercadal
                </motion.h2>
                <ul className={ styles.navLink}>
                    <motion.li onClick={ goToCinematography }
                        whileHover={{ 
                            scale: 1.1,
                            textShadow: "0px 0px 8px rgb(255,255,255)"
                        }}
                    >
                        cinematography</motion.li>
                    <motion.li onClick={ goToAbout }
                        whileHover={{ 
                            scale: 1.1,
                            textShadow: "0px 0px 8px rgb(255,255,255)"
                        }}
                    >
                        about</motion.li>
                </ul>
            </div>
            <div className={ styles.rightNav }>
                <a href="https://www.instagram.com/imercadal/" target="_blank" rel="noopener noreferrer">
                    <motion.img src={ igLogo } height="30" alt="Instagram Logo"
                        whileHover={{ 
                            scale: 1.1
                        }}
                    ></motion.img>
                </a>
                <a href="mailto:irenemercadal@nyu.edu">
                    <motion.img src={ emailLogo } alt="Email Logo" height="15"
                    whileHover={{ 
                        scale: 1.1
                    }}
                    ></motion.img>
                </a>
                <a href="https://github.com/imercadal" target="_blank" rel="noopener noreferrer">
                    <motion.img src={ githubLogo } alt="Github Logo" height="30"
                        whileHover={{ 
                            scale: 1.1
                        }}
                    ></motion.img>
                </a>
            </div>
        </div>

    )
}

export default Header;