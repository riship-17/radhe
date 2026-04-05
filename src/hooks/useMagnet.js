import { useState, useRef, useCallback } from 'react';

export default function useMagnet(strength = 0.3) {
  const ref = useRef(null);
  const [style, setStyle] = useState({});

  const handleMouseMove = useCallback(
    (e) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      setStyle({
        transform: `translate(${x * strength}px, ${y * strength}px)`,
        transition: 'transform 0.2s ease-out',
      });
    },
    [strength]
  );

  const handleMouseLeave = useCallback(() => {
    setStyle({
      transform: 'translate(0, 0)',
      transition: 'transform 0.5s ease-out',
    });
  }, []);

  return { ref, style, handleMouseMove, handleMouseLeave };
}
