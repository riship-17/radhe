import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';

export default function useReveal(threshold = 0.12) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
  });

  return { ref, inView };
}
