import { useEffect, useState } from "react";

export function useCountUp(target: number, isVisible: boolean, duration = 1500) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return value;
}
