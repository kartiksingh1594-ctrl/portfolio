import { useTheme } from '../contexts/ThemeContext';
import { Palette, Code2, Home, User } from 'lucide-react';

export const Navigation = () => {
  const { currentSection, setSection, theme } = useTheme();

  const navItems = [
    { id: 'home' as const, label: 'Home', icon: Home },
    { id: 'art' as const, label: 'Art', icon: Palette },
    { id: 'tech' as const, label: 'Tech', icon: Code2 },
    { id: 'about' as const, label: 'About', icon: User },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-500">
      <div
        className={`${
          theme === 'dark'
            ? 'bg-gray-900/80 border-gray-700'
            : 'bg-white/80 border-gray-200'
        } border-b transition-colors duration-500`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1
                className={`text-xl font-bold ${
                  theme === 'dark'
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400'
                    : 'text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-600'
                } transition-all duration-500`}
              >
                PJ
              </h1>
            </div>

            <div className="flex space-x-1 sm:space-x-4">
              {navItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setSection(id)}
                  className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg transition-all duration-300 ${
                    currentSection === id
                      ? theme === 'dark'
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
                        : 'bg-amber-500 text-white shadow-lg shadow-amber-500/50'
                      : theme === 'dark'
                      ? 'text-gray-300 hover:bg-gray-800 hover:text-white'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline text-sm font-medium">{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
