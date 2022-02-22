import { useEffect, useRef, useState } from 'react';

function useIntersectionObserver(options, value = false) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(value);

  function callbackFunction(entries) {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  }
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);
  return [containerRef, isVisible];
}
export default useIntersectionObserver;