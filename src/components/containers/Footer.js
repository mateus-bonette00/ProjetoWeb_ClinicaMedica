import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import { Link } from "react-router-dom"

import logo from './logo_navbar.png'
import styles from './Footer.module.css'

function Footer(){
    return(
        
        <footer className='bg-greeny h-[250px]'>
            <div className='flex'>
                <Link to='/'>
                    <img className='h-48 w-72 ml-32 mr-[550px]' src={logo} alt='logo' />
                </Link>        
            <ul className='flex text-6xl mt-10 space-x-8 text-white'>
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