import { ExperienceList } from "../components/experienceList/experienceList";
import Layout from "../components/layout/layout";
import Text from "../components/text/text";
import { HOMEPAGE_TITLE, HOMEPAGE_DESCRIPTION } from "../libs/constants";
import styles from "../styles/pages/homepage.module.scss";

export default function Home() {
    return (
        <Layout>
            <section className={styles.heroContainer}>
                <Text value={HOMEPAGE_TITLE} tag="h1" style="hero" />
                <Text value={HOMEPAGE_DESCRIPTION} style="bodyXl" />
            </section>
            <section className={styles.darkContainer}>
                <div className={styles.container}>
                    <Text value="Experience" tag="h2" style="heading1" />
                    <ExperienceList />
                </div>
            </section>
        </Layout>
    );
}
