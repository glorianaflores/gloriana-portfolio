import { Text } from "../../shared";
import styles from "./skill.module.scss";

export function Skill({ language, years, icon }) {
    return (
        <div className={styles.skill}>
            <div className={styles.iconContainer}>
                <Text value={language} tag="h3" style="h4" color="white" />
                {/* <Icon name={icon} /> */}
            </div>
            <div className={styles.progressBarContainer}>
                <span>progress bar</span>
                <span>{years} YEARS</span>
            </div>
        </div>
    );
}
