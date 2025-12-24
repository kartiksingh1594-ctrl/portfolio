import { Camera, Video, Heart } from 'lucide-react';

const artItems = [
  {
    type: 'image',
    title: 'Urban Sunset',
    url: 'https://images.pexels.com/photos/3335049/pexels-photo-3335049.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Photography'
  },
  {
    type: 'image',
    title: 'Abstract Flow',
    url: 'https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Digital Art'
  },
  {
    type: 'image',
    title: 'Nature Harmony',
    url: 'https://images.pexels.com/photos/1424745/pexels-photo-1424745.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Photography'
  },
  {
    type: 'image',
    title: 'Color Burst',
    url: 'https://images.pexels.com/photos/2693212/pexels-photo-2693212.png?auto=compress&cs=tinysrgb&w=800',
    category: 'Abstract'
  },
  {
    type: 'image',
    title: 'Golden Hour',
    url: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Photography'
  },
  {
    type: 'image',
    title: 'Minimalist Beauty',
    url: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Design'
  }
];

export const ArtSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-orange-50 py-20 px-4 transition-all duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-600 mb-4">
            Artistic Soul
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Where creativity meets vision, and moments become memories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden bg-white">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center space-x-2 mb-2">
                    {item.type === 'image' ? (
                      <Camera className="w-4 h-4" />
                    ) : (
                      <Video className="w-4 h-4" />
                    )}
                    <span className="text-sm font-medium">{item.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <button className="flex items-center space-x-2 text-sm bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-colors">
                    <Heart className="w-4 h-4" />
                    <span>Save</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-xl">
            <p className="text-lg text-gray-700 italic">
              "Every picture tells a story, every frame captures a feeling"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
