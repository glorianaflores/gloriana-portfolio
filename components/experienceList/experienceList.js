import Text from "../shared/text/text";
import { EXPERIENCE } from "../../libs/constants";
import styles from "./experienceList.module.scss";

export function ExperienceList({}) {
    return (
        <div className={styles.root}>
            <ul className={styles.list}>
                {EXPERIENCE.map((job) => (
                    <li className={styles.listItem}>
                        <div className={styles.leftSide}>
                            <Text
                                value={`${job.startDate} - ${job.startDate}`}
                                tag="h2"
                                style="heading2"
                            />
                        </div>
                        <div className={styles.rightSide}>
                            <Text
                                value={job.position}
                                tag="h3"
                                style="heading3"
                            />
                            <Text
                                value={job.place}
                                tag="h4"
                                style="body5"
                                className={styles.eyebrow}
                            />
                            <Text
                                value={job.description}
                                style="body5"
                                className={styles.description}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
