import styles from "../styles/navbar.module.css";
import logo from "../assets/Infinite-Flight-Logo-Vector.svg-.png"

export const  Navbar = () => {
    return(
        <div id={styles.nav}>
            <div id={styles.navcontain}>
            <img src={logo} alt="logo" />
            <div>
            <button>Login</button>
            <button>signup</button>
            </div>
            </div>
        </div>
    )
}