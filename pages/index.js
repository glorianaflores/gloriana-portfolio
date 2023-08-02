import {
    Header,
    Hero,
    Layout,
    ExperienceSection,
    SkillsSection,
} from "../components";

export default function Home() {
    return (
        <Layout>
            <Header />
            <Hero />
            <ExperienceSection />
            <SkillsSection />
        </Layout>
    );
}
