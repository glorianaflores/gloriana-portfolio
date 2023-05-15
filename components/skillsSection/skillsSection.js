import { Text, Container, Card } from "../shared";
import {
    SKILLS_TITLE,
    SKILLS_DESCRIPTION,
    SKILLS_LIST,
} from "../../libs/constants";
import { Skill } from "./skill/skill";
import styles from "./skillsSection.module.scss";

export function SkillsSection({}) {
    return (
        <Container bg="primary">
            <div className={styles.content}>
                <Text
                    value={SKILLS_TITLE}
                    tag="h2"
                    style="h1"
                    color="white"
                    className={styles.title}
                />
                <Text
                    value={SKILLS_DESCRIPTION}
                    style="body1"
                    color="white"
                    className={styles.description}
                />
                <div className={styles.skillsList}>
                    {SKILLS_LIST.map((lg, i) => (
                        <Skill key={`skill-item-${i}`} {...lg} />
                    ))}
                </div>
            </div>
        </Container>
    );
}
