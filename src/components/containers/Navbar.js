import { Link } from "react-router-dom"

import Layout from "./Layout"

import styles from './Navbar.module.css'

// import logo from '../../img/logo_navbar.png'

function Navbar() {
    return(
        <nav class={styles.navbar}>
           <Layout>
                <Link to='/'>Logo
                    {/* <img src={logo} alt='logo' /> */}
                </Link>
                <ul class={styles.list}>
                    <li class={styles.item}>
                        <Link to ="/">INÍCIO</Link>
                    </li>
                    
                    <li class={styles.item}>
                        <Link to ="/contact">SOBRE NÓS</Link>
                    </li>
                    
                    <li class={styles.item}>
                        <Link to ="/company">CONTATO</Link>
                    </li>
                    
                    <li class={styles.item}>
                        <Link to ="/newproject">ENTRAR</Link>
                    </li>
                </ul>
           </Layout>
        </nav>
    )

}

export default Navbar