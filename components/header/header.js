import { Text } from "../shared";
import styles from "./Header.module.scss";

export function Header() {
    return (
        <nav className={styles.header}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    {/* TODO */}
                    <a href="#home">Home</a>
                </li>
                <li className={styles.navItem}>
                    <a href="#about">About</a>
                </li>
                <li className={styles.navItem}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
}
