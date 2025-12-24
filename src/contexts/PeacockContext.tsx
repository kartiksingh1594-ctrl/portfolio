import { createContext, useContext, useState, ReactNode } from 'react';

interface PeacockColors {
  [key: string]: string;
}

interface PeacockContextType {
  colors: PeacockColors;
  updateColor: (featherId: string, color: string) => void;
  selectedFeather: string | null;
  setSelectedFeather: (id: string | null) => void;
}

const defaultColors: PeacockColors = {
  body: '#4A90E2',
  neck: '#2E5C8A',
  head: '#1E3A5F',
  feather1: '#9B59B6',
  feather2: '#E74C3C',
  feather3: '#F39C12',
  feather4: '#16A085',
  feather5: '#E67E22',
  feather6: '#C0392B',
  feather7: '#8E44AD',
};

const PeacockContext = createContext<PeacockContextType | undefined>(undefined);

export const PeacockProvider = ({ children }: { children: ReactNode }) => {
  const [colors, setColors] = useState<PeacockColors>(defaultColors);
  const [selectedFeather, setSelectedFeather] = useState<string | null>(null);

  const updateColor = (featherId: string, color: string) => {
    setColors(prev => ({ ...prev, [featherId]: color }));
  };

  return (
    <PeacockContext.Provider value={{ colors, updateColor, selectedFeather, setSelectedFeather }}>
      {children}
    </PeacockContext.Provider>
  );
};

export const usePeacock = () => {
  const context = useContext(PeacockContext);
  if (!context) throw new Error('usePeacock must be used within PeacockProvider');
  return context;
};
