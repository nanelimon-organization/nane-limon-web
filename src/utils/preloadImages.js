const preloadImages = (imagePaths) => {
    return new Promise((resolve) => {
      const preloadedImages = [];
      const loadImage = (src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve(img);
          img.onerror = () => resolve(img); 
        });
      };
  
      const promises = Object.values(imagePaths.banner).map((image) =>
        loadImage(image)
      );
  
      Promise.all(promises).then((images) => {
        preloadedImages.push(...images);
        resolve(preloadedImages);
      });
    });
  };
  
  export default preloadImages;