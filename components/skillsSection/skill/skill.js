import { Text } from "../../shared";
import styles from "./skill.module.scss";

export function Skill({ language, years, hideShowbar }) {
    const progress = (years / 4) * 100;

    return (
        <div className={styles.skill}>
            <div className={styles.iconContainer}>
                <Text
                    className={styles.title}
                    value={language}
                    tag="h3"
                    style="h5"
                    color="white"
                />
            </div>
            {hideShowbar ? (
                <span className={styles.hiddenprogressBar} />
            ) : (
                <span className={styles.progressBar}>
                    <span
                        style={{ width: `${progress}%` }}
                        className={styles.progressBarContent}
                    />
                </span>
            )}
            <Text
                value={`${years} YEARS`}
                tag="h3"
                style="h6"
                color="white"
                className={styles.years}
            />
        </div>
    );
}
