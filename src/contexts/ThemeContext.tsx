import { createContext, useContext, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';
type Section = 'home' | 'art' | 'tech' | 'about';

interface ThemeContextType {
  theme: Theme;
  currentSection: Section;
  setSection: (section: Section) => void;
  showTransition: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [currentSection, setCurrentSection] = useState<Section>('home');
  const [showTransition, setShowTransition] = useState(false);

  const setSection = (section: Section) => {
    const newTheme = section === 'tech' ? 'dark' : 'light';

    if (newTheme !== theme) {
      setShowTransition(true);
      setTimeout(() => {
        setTheme(newTheme);
        setCurrentSection(section);
        setTimeout(() => setShowTransition(false), 1500);
      }, 300);
    } else {
      setCurrentSection(section);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, currentSection, setSection, showTransition }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
