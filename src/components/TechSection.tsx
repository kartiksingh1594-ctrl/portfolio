import { Code2, Database, Globe, Sparkles, ExternalLink, Github } from 'lucide-react';

const skills = [
  { name: 'React', icon: Code2, level: 90, color: 'from-cyan-400 to-blue-500' },
  { name: 'TypeScript', icon: Code2, level: 85, color: 'from-blue-400 to-indigo-500' },
  { name: 'Node.js', icon: Database, level: 80, color: 'from-green-400 to-emerald-500' },
  { name: 'Python', icon: Code2, level: 75, color: 'from-yellow-400 to-orange-500' },
  { name: 'Supabase', icon: Database, level: 85, color: 'from-emerald-400 to-teal-500' },
  { name: 'Web Design', icon: Globe, level: 88, color: 'from-pink-400 to-rose-500' }
];

const projects = [
  {
    title: 'AI Task Manager',
    description: 'Smart task management with AI-powered prioritization and time tracking',
    tech: ['React', 'TypeScript', 'Supabase'],
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    title: 'Creative Portfolio CMS',
    description: 'Custom CMS for artists to showcase and sell their digital artwork',
    tech: ['Next.js', 'PostgreSQL', 'Stripe'],
    gradient: 'from-purple-500 to-pink-600'
  },
  {
    title: 'Real-time Collab Tool',
    description: 'WebRTC-based collaboration platform with live editing and chat',
    tech: ['React', 'WebRTC', 'Socket.io'],
    gradient: 'from-emerald-500 to-teal-600'
  }
];

export const TechSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 px-4 transition-all duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Sparkles className="w-8 h-8 text-blue-400 animate-pulse" />
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Tech Arsenal
            </h2>
            <Sparkles className="w-8 h-8 text-purple-400 animate-pulse" />
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Building the future, one line of code at a time
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Code2 className="w-8 h-8 mr-3 text-blue-400" />
            Skills & Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/20 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <skill.icon className="w-6 h-6 text-blue-400" />
                    <span className="text-lg font-semibold text-white">{skill.name}</span>
                  </div>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 rounded-full`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Sparkles className="w-8 h-8 mr-3 text-purple-400" />
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-transparent transition-all duration-500 animate-slide-up overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <h4 className="text-2xl font-bold text-white mb-3">{project.title}</h4>
                  <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-gray-700/50 text-gray-300 rounded-full border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">View</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </button>
                  </div>
                </div>

                <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${project.gradient} rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gray-800/50 backdrop-blur-sm rounded-2xl px-8 py-6 border border-gray-700 shadow-xl">
            <p className="text-lg text-gray-300 font-mono">
              <span className="text-blue-400">const</span> passion = <span className="text-green-400">"Building amazing things"</span>;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
