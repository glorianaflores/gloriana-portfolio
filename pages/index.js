import { Hero, Layout, ExperienceSection, SkillsSection } from "../components";

export default function Home() {
    return (
        <Layout>
            <Hero />
            <ExperienceSection />
            <SkillsSection />
        </Layout>
    );
}
