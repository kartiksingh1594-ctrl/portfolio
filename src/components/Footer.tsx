import { useTheme } from '../contexts/ThemeContext';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer = () => {
  const { theme } = useTheme();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' }
  ];

  return (
    <footer className={`py-12 px-4 transition-all duration-500 ${
      theme === 'dark'
        ? 'bg-gray-900 border-t border-gray-800'
        : 'bg-white border-t border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div className={`text-center md:text-left ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            <p className="flex items-center justify-center md:justify-start space-x-2">
              <span>Made with</span>
              <Heart className={`w-4 h-4 ${
                theme === 'dark' ? 'text-red-400' : 'text-red-500'
              }`} fill="currentColor" />
              <span>by Pushpak Jadhav</span>
            </p>
            <p className="text-sm mt-2">
              © 2024 All rights reserved
            </p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className={`p-3 rounded-full transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white'
                    : 'bg-gray-100 hover:bg-amber-500 text-gray-600 hover:text-white'
                } hover:scale-110`}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
