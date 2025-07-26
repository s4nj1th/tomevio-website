import { useEffect, useState } from "react";

export default function AuthorImage({ author_id, name }: { author_id: string; name: string }) {
  const [imageAvailable, setImageAvailable] = useState(true);

  const imageUrl = `https://covers.openlibrary.org/a/olid/${author_id}-M.jpg`;

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;

    if (img.naturalWidth <= 1) {
      setImageAvailable(false);
    }
  };

  const handleImageError = () => {
    setImageAvailable(false);
  };

  if (!imageAvailable) {
    return (
      <div
        className="w-[80px] h-[120px] bg-gray-200 text-gray-600 text-[10px] flex items-center justify-center text-center px-1 shadow-[var(--shadow-hard)]"
        style={{ fontFamily: "var(--font-averia)" }}
      >
        {name}
      </div>
    );
  }

  return (
    <img
      src={imageUrl}
      alt={name}
      className="w-full h-full object-cover"
      onLoad={handleImageLoad}
      onError={handleImageError}
    />
  );
}
