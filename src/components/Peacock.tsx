import { usePeacock } from '../contexts/PeacockContext';
import { useTheme } from '../contexts/ThemeContext';

const colorPalette = [
  '#E74C3C', '#9B59B6', '#3498DB', '#16A085', '#F39C12',
  '#E67E22', '#C0392B', '#8E44AD', '#2980B9', '#27AE60',
  '#F1C40F', '#D35400', '#2C3E50', '#34495E', '#7F8C8D',
  '#FF6B9D', '#C44569', '#F8B500', '#4ECDC4', '#95E1D3'
];

export const Peacock = () => {
  const { colors, updateColor, selectedFeather, setSelectedFeather } = usePeacock();
  const { theme } = useTheme();

  const handleFeatherClick = (featherId: string) => {
    setSelectedFeather(featherId);
  };

  const handleColorSelect = (color: string) => {
    if (selectedFeather) {
      updateColor(selectedFeather, color);
      setSelectedFeather(null);
    }
  };

  return (
    <div className="relative flex flex-col items-center">
      <svg
        viewBox="0 0 400 400"
        className="w-full max-w-md h-auto transition-all duration-500 hover:scale-105"
        style={{ filter: theme === 'dark' ? 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))' : 'drop-shadow(0 10px 30px rgba(0,0,0,0.1))' }}
      >
        <g id="feathers">
          <ellipse
            id="feather7"
            cx="200"
            cy="100"
            rx="30"
            ry="80"
            fill={colors.feather7}
            onClick={() => handleFeatherClick('feather7')}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          />

          <ellipse
            id="feather1"
            cx="140"
            cy="120"
            rx="28"
            ry="75"
            fill={colors.feather1}
            transform="rotate(-30 140 120)"
            onClick={() => handleFeatherClick('feather1')}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          />

          <ellipse
            id="feather2"
            cx="260"
            cy="120"
            rx="28"
            ry="75"
            fill={colors.feather2}
            transform="rotate(30 260 120)"
            onClick={() => handleFeatherClick('feather2')}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          />

          <ellipse
            id="feather3"
            cx="100"
            cy="160"
            rx="25"
            ry="70"
            fill={colors.feather3}
            transform="rotate(-50 100 160)"
            onClick={() => handleFeatherClick('feather3')}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          />

          <ellipse
            id="feather4"
            cx="300"
            cy="160"
            rx="25"
            ry="70"
            fill={colors.feather4}
            transform="rotate(50 300 160)"
            onClick={() => handleFeatherClick('feather4')}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          />

          <ellipse
            id="feather5"
            cx="70"
            cy="210"
            rx="22"
            ry="65"
            fill={colors.feather5}
            transform="rotate(-70 70 210)"
            onClick={() => handleFeatherClick('feather5')}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          />

          <ellipse
            id="feather6"
            cx="330"
            cy="210"
            rx="22"
            ry="65"
            fill={colors.feather6}
            transform="rotate(70 330 210)"
            onClick={() => handleFeatherClick('feather6')}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          />
        </g>

        <ellipse
          id="body"
          cx="200"
          cy="260"
          rx="45"
          ry="60"
          fill={colors.body}
          onClick={() => handleFeatherClick('body')}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        />

        <ellipse
          id="neck"
          cx="200"
          cy="210"
          rx="25"
          ry="40"
          fill={colors.neck}
          onClick={() => handleFeatherClick('neck')}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        />

        <circle
          id="head"
          cx="200"
          cy="180"
          r="20"
          fill={colors.head}
          onClick={() => handleFeatherClick('head')}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        />

        <circle cx="195" cy="175" r="3" fill="white" />
        <circle cx="193" cy="173" r="1.5" fill="black" />

        <path
          d="M 210 170 Q 220 165 225 170"
          stroke={colors.head}
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 212 168 Q 222 163 227 168"
          stroke={colors.head}
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 214 166 Q 224 161 229 166"
          stroke={colors.head}
          strokeWidth="2"
          fill="none"
        />
      </svg>

      {selectedFeather && (
        <div className="mt-6 p-4 rounded-2xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-xl animate-fade-in">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 text-center">
            Choose a color
          </p>
          <div className="grid grid-cols-10 gap-2">
            {colorPalette.map((color) => (
              <button
                key={color}
                onClick={() => handleColorSelect(color)}
                className="w-8 h-8 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform"
                style={{ backgroundColor: color }}
                aria-label={`Select color ${color}`}
              />
            ))}
          </div>
          <button
            onClick={() => setSelectedFeather(null)}
            className="mt-3 w-full text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};
