import { useEffect, useRef, useCallback } from "react";

const useHeaderScroll = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const prevScrollY = useRef(0);
  const rafId = useRef(0);

  const handleClick = (anchor: string) => {
    if (!anchor.startsWith("#")) {
      window.open(anchor, "_blank", "noopener, noreferrer");

      return;
    }

    const id = anchor.replace("#", "");
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleScroll = useCallback(() => {
    cancelAnimationFrame(rafId.current);

    rafId.current = requestAnimationFrame(() => {
      if (!headerRef.current) return;

      const currentScrollY = window.scrollY;

      headerRef.current.style.transform =
        currentScrollY > prevScrollY.current
          ? "translateY(-100%)"
          : "translateY(0)";

      prevScrollY.current = currentScrollY;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return { headerRef, handleClick };
};

export default useHeaderScroll;
