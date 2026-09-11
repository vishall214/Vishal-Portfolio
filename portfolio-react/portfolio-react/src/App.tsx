import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import AchievementsAndEducation from "./components/AchievementsAndEducation";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Sidebar />
      <main className="mx-auto max-w-2xl px-6 pb-16 lg:ml-[19rem] lg:max-w-none lg:px-16 lg:pr-24 xl:pr-32">
        <div className="lg:max-w-2xl">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <AchievementsAndEducation />
          <Footer />
        </div>
      </main>
    </div>
  );
}
