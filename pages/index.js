import Container from "../components/container/container";
import { ExperienceList } from "../components/experienceList/experienceList";
import Layout from "../components/layout/layout";
import Text from "../components/text/text";
import {
    HOMEPAGE_TITLE,
    HOMEPAGE_DESCRIPTION,
    CV_NAME,
} from "../libs/constants";
import styles from "../styles/pages/homepage.module.scss";

export default function Home() {
    return (
        <Layout>
            <div className={styles.wrapper}>
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
            <Container bg="secondary">
                <div className={styles.container}>
                    <Text value="Experience" tag="h2" style="heading1" />
                    <ExperienceList />
                </div>
            </Container>
        </Layout>
    );
}
