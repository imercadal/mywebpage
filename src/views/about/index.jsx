import React from 'react';
import styles from './about.module.css';
import Header from "../../components/Header";

const About = () => {
    return(
        <>
            <Header/>
            <div className={ styles.about }>
                <p>Yup, this one too.</p>
                <h6>Coming soon!</h6>
            </div>
        </>
    );
};

export default About;