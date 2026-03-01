import Header from './components/header/Header.tsx';
import LandingSection from './components/landing-section/LandingSection.tsx';

const App = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center">
        <LandingSection />
      </main>
      <footer>
        
      </footer>
    </>
  );
};

export default App;
