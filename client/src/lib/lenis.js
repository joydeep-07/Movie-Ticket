import Lenis from "@studio-freight/lenis";

let lenisInstance = null;

export const initLenis = () => {
  if (lenisInstance) return lenisInstance;

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
    smoothTouch: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  lenisInstance = lenis;
  return lenis;
};

export const destroyLenis = () => {
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
};
