import { TOTAL_YEARS_EXPERIENCE } from "../../../libs/constants";
import { Text } from "../../shared";
import styles from "./skill.module.scss";

export function Skill({ language, years, hideShowbar }) {
    const progress = (years / TOTAL_YEARS_EXPERIENCE) * 100;

    return (
        <div className={styles.skill}>
            <Text
                className={styles.title}
                value={language}
                tag="h3"
                style="h5"
                color="white"
            />
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
                value={`${years}/${TOTAL_YEARS_EXPERIENCE}`}
                tag="h3"
                style="h6"
                color="white"
                className={hideShowbar ? styles.float : styles.years}
            />
        </div>
    );
}
