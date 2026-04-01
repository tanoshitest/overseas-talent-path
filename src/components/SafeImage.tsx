import { useState } from "react";

interface SafeImageProps {
  src: string;
  alt?: string;
  className?: string;
  loading?: "eager" | "lazy";
}

export default function SafeImage({ src, alt = "", className = "", loading = "lazy" }: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={className}
        style={{
          background: "linear-gradient(135deg, hsl(220, 30%, 88%) 0%, hsl(220, 20%, 78%) 100%)",
        }}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      onError={() => setFailed(true)}
    />
  );
}
