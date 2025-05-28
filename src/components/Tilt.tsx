import { useRef, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';
import { useSettings } from '../context/SettingsContext';

interface TiltProps {
  children: React.ReactNode;
  className?: string;
}

const Tilt = ({ children, className = '' }: TiltProps) => {
  const tiltRef = useRef<HTMLDivElement>(null);
  const { hoverEffectsEnabled } = useSettings();

  useEffect(() => {
    if (!tiltRef.current || !hoverEffectsEnabled) return;

    const tilt = VanillaTilt.init(tiltRef.current, {
      max: 15,
      scale: 1.05,
      speed: 400,
      glare: true,
      'max-glare': 0.2,
    });

    return () => {
      tilt.destroy();
    };
  }, [hoverEffectsEnabled]);

  return (
    <div
      ref={tiltRef}
      className={`${className} ${hoverEffectsEnabled ? 'transition-transform duration-200' : ''}`}
      style={{
        transform: hoverEffectsEnabled ? undefined : 'none',
      }}
    >
      {children}
    </div>
  );
};

export default Tilt; 