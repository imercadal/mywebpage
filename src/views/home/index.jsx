import Header from "../../components/Header";
import styles from "./Home.module.css";
import { motion } from 'framer-motion';


const Home = () => {

    return(
        <>
            <Header/>
            <div className={ styles.main }>
                <h3>This page is under construction.</h3>
                <p>Meanwhile, you can contact me using the links on the upper right,</p>
                <p>and check out my  
                    <motion.a 
                        whileHover={{ 
                            scale: 1.1,
                            textShadow: "0px 0px 8px rgb(255,255,255)"
                        }}
                        className={ styles.link }href="https://vimeo.com/708494331"> cinematography reel</motion.a>.</p>
            </div>
        </>
    )
}

export default Home;