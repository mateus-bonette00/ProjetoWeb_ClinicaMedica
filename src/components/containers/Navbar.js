import { Link } from "react-router-dom"

// import Layout from "./Layout"

import styles from './Navbar.module.css'

import logo from './logo_navbar.png'

function Navbar() {
    return(
        <nav class={styles.navbar}>
                <Link to='/'>
                    <img src={logo} alt='logo' />
                </Link>
                <ul class={styles.list}>
                    <li class={styles.item}>
                        <Link to ="/">INÍCIO</Link>
                    </li>
                    
                    <li class={styles.item}>
                        <Link to ="/sobrenos">SOBRE NÓS</Link>
                    </li>
                    
                    <li class={styles.item}>
                        <Link to ="/contato">CONTATO</Link>
                    </li>
                    
                    <li class={styles.item}>
                        <Link to ="/login">ENTRAR</Link>
                    </li>

                    <li class={styles.item}>
                        <Link to ="/cadastro">CADASTRAR</Link>
                    </li>
                </ul>
           
        </nav>
    )

}

export default Navbar