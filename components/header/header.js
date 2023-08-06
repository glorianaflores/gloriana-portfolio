import Link from "next/link";
import { Button } from "../shared";
import styles from "./Header.module.scss";

export function Header() {
    return (
        <nav className={styles.header}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Button
                        value="Experience"
                        href="#experience"
                        className={styles.title}
                    />
                </li>
                <li className={styles.navItem}>
                    <Button
                        value="Skills"
                        href="#skills"
                        className={styles.title}
                    />
                </li>
                <li className={styles.navItem}>
                    <Button
                        value="About me"
                        href="/aboutMe"
                        className={styles.title}
                    />
                </li>
            </ul>
        </nav>
    );
}
