import Header from './components/header/Header.tsx';
import LandingSection from './components/landing-section/LandingSection.tsx';
import ProjectsSection from './components/projects-section/ProjectsSection.tsx';
import ContactMeSection from './components/contact-me-section/ContactMeSection.tsx';

const App = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center">
        <LandingSection />
        <ProjectsSection />
        <ContactMeSection />
      </main>
      <footer>
        
      </footer>
    </>
  );
};

export default App;
