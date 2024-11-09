// utils/imageOptimization.js
export const optimizeImage = async (src) => {
  if (typeof window === "undefined") return src;

  // Vérifier si le navigateur supporte les nouveaux formats d'image
  const supportsWebp = await supportsFormat("webp");
  const supportsAvif = await supportsFormat("avif");

  if (supportsAvif) return `${src}?format=avif`;
  if (supportsWebp) return `${src}?format=webp`;

  return src;
};

const supportsFormat = async (format) => {
  const img = document.createElement("img");
  return (
    img.decode !== undefined &&
    img.decode() instanceof Promise &&
    createImageBitmap !== undefined
  );
};
