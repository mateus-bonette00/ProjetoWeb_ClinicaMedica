import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import { Link } from "react-router-dom"

import logo from './logo_navbar.png'
import styles from './Footer.module.css'

function Footer(){
    return(
        
        <footer className='bg-greeny h-[200px]'>
            <div className='flex justify-center items-center align-middle'>
                <Link to='/'>
                    <img className='h-36 mr-[550px]' src={logo} alt='logo' />
                </Link>        
            <ul className='flex text-6xl space-x-8 text-white'>
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
            </div>
            <p className='flex justify-center items-center bg-white h-12 mt-4'>
                <span>Gustavo Noda - Thalles Alexsander- Mateus Bonette</span> &copy; 2023
            </p>
        </footer>
  )
}


export default Footer