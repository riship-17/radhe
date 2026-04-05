import { useInView } from 'react-intersection-observer';

export default function useCountUp() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return { ref, inView };
}
