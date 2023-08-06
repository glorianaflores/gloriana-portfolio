import { Text, Container, Card } from "../shared";
import {
    EXPERIENCE_TITLE,
    EXPERIENCE_DESCRIPTION,
    EXPERIENCE,
} from "../../libs/constants";
import styles from "./experienceSection.module.scss";

export function ExperienceSection({}) {
    return (
        <Container bg="secondary" id="experience">
            <div className={styles.content}>
                <Text
                    value={EXPERIENCE_TITLE}
                    tag="h2"
                    style="h1"
                    color="white"
                    className={styles.title}
                />
                <Text
                    value={EXPERIENCE_DESCRIPTION}
                    style="body1"
                    color="white"
                    className={styles.description}
                />
                <div className={styles.experienceList}>
                    {EXPERIENCE.map((item, i) => (
                        <Card key={`experience-item-${i}`} {...item} />
                    ))}
                </div>
            </div>
        </Container>
    );
}
