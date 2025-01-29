import { Sidebar } from "@/components/Sidebar";
import { Profile } from "@/components/Profile";
import { AboutMe } from "../components/AboutMe";
import { ProjectGallery } from "@/components/ProjectGallery";
import { Achievements } from "@/components/Achievements";
import { Timeline } from "@/components/Timeline";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";

const Home = () => {
  return (
    <div className="relative bg-black text-white min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="relative flex-1 ml-0 snap-y snap-mandatory overflow-y-auto">
        <section id="profile">
          <Profile />
        </section>
        <section id="about">
          <AboutMe />
        </section>
        <section id="projects">
          <ProjectGallery />
        </section>
        <section id="achievements">
          <Achievements />
        </section>
        <section id="timeline">
          <Timeline />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
        <ThemeToggle />
      </main>
    </div>
  );
};

export default Home;
