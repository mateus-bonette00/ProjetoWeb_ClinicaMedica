import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import { Link } from "react-router-dom"

import logo from './logo_navbar.png'
import styles from './Footer.module.css'

function Footer(){
    return(
        
        <footer className={styles.footer}>
                <Link to='/'>
                    <img src={logo} alt='logo' />
                </Link>        
            <ul className={styles.social_list}>
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <FaLinkedin />
                </li>
            </ul>
            <p className={styles.copy_right}>
                <span>Gustavo Noda - Thalles Alexsander- Mateus Bonette</span> &copy; 2023
            </p>
        </footer>
  )
}


export default Footer