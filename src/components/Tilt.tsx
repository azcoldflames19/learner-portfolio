import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

interface TiltProps {
  children: React.ReactNode;
  className?: string;
}

const Tilt = ({ children, className = '' }: TiltProps) => {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 8,
        scale: 1.01,
        speed: 1000,
        glare: true,
        'max-glare': 0.15,
      });
    }

    return () => {
      if (tiltRef.current) {
        (tiltRef.current as any).vanillaTilt?.destroy();
      }
    };
  }, []);

  return (
    <div ref={tiltRef} className={className}>
      {children}
    </div>
  );
};

export default Tilt; 