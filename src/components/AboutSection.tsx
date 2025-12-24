import { useTheme } from '../contexts/ThemeContext';
import { Heart, Lightbulb, Rocket, Target } from 'lucide-react';

export const AboutSection = () => {
  const { theme } = useTheme();

  const passions = [
    {
      icon: Heart,
      title: 'The Creative Coder',
      description: 'I believe code is art. Every function is a brushstroke, every algorithm a masterpiece waiting to unfold.'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solver',
      description: 'Challenges excite me. Whether it\'s debugging complex code or crafting the perfect user experience, I thrive on finding elegant solutions.'
    },
    {
      icon: Rocket,
      title: 'Innovation Seeker',
      description: 'Technology evolves, and so do I. Always learning, always experimenting with the latest tools and frameworks to build the future.'
    },
    {
      icon: Target,
      title: 'Vision to Reality',
      description: 'I don\'t just build websites, I bring visions to life. From concept to deployment, every project is a journey of creativity and precision.'
    }
  ];

  return (
    <div className={`min-h-screen py-20 px-4 transition-all duration-500 ${
      theme === 'dark'
        ? 'bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900'
        : 'bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className={`text-5xl md:text-6xl font-bold mb-4 ${
            theme === 'dark'
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400'
              : 'text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600'
          }`}>
            About Me
          </h2>
          <div className={`h-1 w-32 mx-auto rounded-full ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-blue-400 to-purple-400'
              : 'bg-gradient-to-r from-orange-500 to-amber-500'
          }`} />
        </div>

        <div className={`max-w-3xl mx-auto mb-16 p-8 rounded-3xl shadow-2xl animate-slide-up ${
          theme === 'dark'
            ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700'
            : 'bg-white/80 backdrop-blur-sm border border-amber-200'
        }`}>
          <p className={`text-xl leading-relaxed mb-6 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Hi, I'm <span className={`font-bold ${
              theme === 'dark' ? 'text-blue-400' : 'text-amber-600'
            }`}>Pushpak Jadhav</span> — a developer who sees the world through two lenses:
            the artistic and the technical.
          </p>
          <p className={`text-lg leading-relaxed mb-6 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            By day, I write code that solves problems, builds experiences, and pushes boundaries.
            By night (and honestly, also by day), I capture moments through my lens, find beauty in
            the mundane, and create art that speaks without words.
          </p>
          <p className={`text-lg leading-relaxed ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            This duality isn't a conflict—it's my superpower. The precision of programming meets
            the freedom of creativity, and that's where the magic happens. Welcome to my world,
            where <span className={`font-semibold ${
              theme === 'dark' ? 'text-purple-400' : 'text-rose-600'
            }`}>every line of code is art, and every piece of art tells a story</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {passions.map((passion, index) => (
            <div
              key={passion.title}
              className={`p-6 rounded-2xl transition-all duration-500 hover:scale-105 animate-slide-up ${
                theme === 'dark'
                  ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20'
                  : 'bg-white/80 backdrop-blur-sm border border-amber-200 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/20'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-blue-500 to-purple-500'
                  : 'bg-gradient-to-br from-amber-400 to-orange-500'
              }`}>
                <passion.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {passion.title}
              </h3>
              <p className={`leading-relaxed ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {passion.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className={`inline-block px-8 py-6 rounded-2xl shadow-xl ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-blue-600 to-purple-600'
              : 'bg-gradient-to-r from-amber-500 to-orange-500'
          }`}>
            <p className="text-white text-lg font-medium">
              Let's build something amazing together
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
