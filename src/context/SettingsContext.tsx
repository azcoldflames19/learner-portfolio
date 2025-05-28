import { createContext, useContext, useState, ReactNode } from 'react';

interface SettingsContextType {
  hoverEffectsEnabled: boolean;
  toggleHoverEffects: () => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [hoverEffectsEnabled, setHoverEffectsEnabled] = useState(true);

  const toggleHoverEffects = () => {
    setHoverEffectsEnabled(prev => !prev);
  };

  return (
    <SettingsContext.Provider value={{ hoverEffectsEnabled, toggleHoverEffects }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
}; 