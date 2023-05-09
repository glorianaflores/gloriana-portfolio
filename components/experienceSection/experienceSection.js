import Text from "../shared/text/text";
import Container from "../shared/container/container";
import {
    EXPERIENCE_TITLE,
    EXPERIENCE_DESCRIPTION,
    EXPERIENCE,
} from "../../libs/constants";
import styles from "./experienceSection.module.scss";
import Card from "../shared/card/card";

export function ExperienceSection({}) {
    return (
        <Container bg="secondary">
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
