import { useState, useEffect } from 'react';

export const useMediaSize = () => {
  const getMediaSize = () => {
    const width = window.innerWidth;
    if (width >= 1280) return 'desktop';
    if (width >= 768 && width < 1280) return 'tablet';
    return 'mobile';
  };

  const [mediaSize, setMediaSize] = useState(getMediaSize());

  useEffect(() => {
    const handleResize = () => {
      setMediaSize(getMediaSize());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return mediaSize;
};
