import { useState, useEffect } from 'react';

const usePreloadImages = (imagePaths, setLoading) => {
  const [preloadedImages, setPreloadedImages] = useState([]);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  useEffect(() => {
    let isCancelled = false;
    const images = [];
    let loadedImagesCount = 0;

    const handleImageLoad = () => {
      loadedImagesCount++;
      if (loadedImagesCount === imagePaths.length && !isCancelled) {
        setAllImagesLoaded(true);
        setLoading(false);
      }
    };

    if (imagePaths.length > 0) {
      setLoading(true);
    }

    imagePaths.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = handleImageLoad;
      img.onerror = handleImageLoad;
      images.push(img);
    });

    if (!isCancelled) {
      setPreloadedImages(images);
    }

    return () => {
      isCancelled = true;
    };
  }, [imagePaths, setLoading]);

  return { preloadedImages, allImagesLoaded };
};

export default usePreloadImages;
