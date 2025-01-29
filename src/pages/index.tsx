import { Sidebar } from "@/components/Sidebar";
import { Profile } from "@/components/Profile";
import { AboutMe } from "../components/AboutMe";
import { ProjectGallery } from "@/components/ProjectGallery";
import { Achievements } from "@/components/Achievements";
import { Timeline } from "@/components/Timeline";
import { Footer } from "@/components/Footer";

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
        <section id="projects" className="py-16 bg-white dark:bg-black text-black dark:text-white">
          <ProjectGallery />
        </section>
        <section id="achievements">
          <Achievements />
        </section>
        <section id="timeline">
          <Timeline />
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
