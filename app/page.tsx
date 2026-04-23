import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <HeroSection />
                <ProjectsSection />
                <AboutSection />
                <SkillsSection />
                <ContactSection />
            </main>
            <Footer />
        </>
    );
}
