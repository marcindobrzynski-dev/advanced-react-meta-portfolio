import Header from './components/header/Header.tsx';
import LandingSection from './components/landing-section/LandingSection.tsx';
import ProjectsSection from './components/projects-section/ProjectsSection.tsx';
import ContactMeSection from './components/contact-me-section/ContactMeSection.tsx';
import AppAlert from './components/shared/AppAlert.tsx';
import Footer from './components/footer/Footer.tsx';

const App = () => {
  return (
    <>
      <AppAlert />
      <Header />
      <main className="flex flex-col items-center justify-center">
        <LandingSection />
        <ProjectsSection />
        <ContactMeSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
