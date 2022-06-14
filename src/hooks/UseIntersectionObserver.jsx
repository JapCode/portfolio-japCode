import { useEffect, useRef, useState } from 'react';

function useIntersectionObserver(options, value = false) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(value);

  function callbackFunction(entries) {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  }
  useEffect(() => {
    let observerRefValue = null;
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) {
      observer.observe(containerRef.current);
      observerRefValue = containerRef.current;
    }
    return () => {
      if (observerRefValue) observer.unobserve(observerRefValue);
    };
  }, [containerRef, options]);
  return [containerRef, isVisible];
}
export default useIntersectionObserver;
