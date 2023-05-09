import Layout from "../components/layout/layout";
import { Hero } from "../components/hero/hero";
import { ExperienceSection } from "../components/experienceSection/experienceSection";

export default function Home() {
    return (
        <Layout>
            <Hero />
            <ExperienceSection />
        </Layout>
    );
}
