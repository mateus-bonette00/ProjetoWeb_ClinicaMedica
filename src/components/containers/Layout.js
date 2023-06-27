import styles from './Layout.module.css'

function Layout(props) {
    return(
        <div className={`${styles.layout} ${styles[props.customClass]}`}>
            {props.children}
        </div>
    )
}

export default Layout