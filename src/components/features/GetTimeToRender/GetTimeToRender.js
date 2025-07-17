import { useEffect, useState } from 'react';

const useRenderTime = () => {
  const [renderTime, setRenderTime] = useState(null);

  useEffect(() => {
    const start = performance.now();

    requestAnimationFrame(() => {
      const end = performance.now();
      const duration = ((end - start) / 1000).toFixed(2);
      setRenderTime(duration);
    });
  }, []);

  return renderTime;
};

export default useRenderTime;
