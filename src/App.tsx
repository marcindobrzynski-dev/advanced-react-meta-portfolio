import Header from './components/header/Header.tsx';
import LandingSection from './components/landing-section/LandingSection.tsx';
import ProjectsSection from './components/projects-section/ProjectsSection.tsx';

const App = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center">
        <LandingSection />
        <ProjectsSection />
      </main>
      <footer>
        
      </footer>
    </>
  );
};

export default App;
