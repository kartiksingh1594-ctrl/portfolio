import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { PeacockProvider } from './contexts/PeacockContext';
import { Navigation } from './components/Navigation';
import { TransitionQuote } from './components/TransitionQuote';
import { HomeSection } from './components/HomeSection';
import { ArtSection } from './components/ArtSection';
import { TechSection } from './components/TechSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';

const AppContent = () => {
  const { currentSection, theme } = useTheme();

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <HomeSection />;
      case 'art':
        return <ArtSection />;
      case 'tech':
        return <TechSection />;
      case 'about':
        return <AboutSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    }`}>
      <Navigation />
      <TransitionQuote />
      <main className="pt-16">
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <PeacockProvider>
        <AppContent />
      </PeacockProvider>
    </ThemeProvider>
  );
}

export default App;
