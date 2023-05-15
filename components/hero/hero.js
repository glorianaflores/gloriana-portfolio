import { Text, Container } from "../shared";
import {
    HOMEPAGE_TITLE,
    HOMEPAGE_DESCRIPTION,
    CV_NAME,
} from "../../libs/constants";
import styles from "./Hero.module.scss";

export function Hero() {
    return (
        <div className={styles.hero}>
            <Container bg="primary">
                <div className={styles.content}>
                    <Text value={CV_NAME} tag="span" style="label" />
                    <Text
                        value={HOMEPAGE_TITLE}
                        tag="h1"
                        style="h1"
                        color="white"
                        className={styles.title}
                    />
                    <Text
                        value={HOMEPAGE_DESCRIPTION}
                        style="body1"
                        color="white"
                        className={styles.title}
                    />
                </div>
            </Container>
            <div className={styles.logo} />
        </div>
    );
}
