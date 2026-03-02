import { useEffect, useRef, useCallback } from 'react';

const useHeaderScroll = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const prevScrollY = useRef(0);

  const handleClick = (anchor: string) => {
    const id = anchor.replace("#", "");
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  const handleScroll = useCallback(() => {
    if (headerRef.current) {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY.current) {
        headerRef.current.style.transform = 'translateY(-100%)';
      } else if (currentScrollY < prevScrollY.current) {
        headerRef.current.style.transform = 'translateY(0)';
      }

      prevScrollY.current = currentScrollY;
    }
  }, []);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { headerRef, handleClick };
};

export default useHeaderScroll;
