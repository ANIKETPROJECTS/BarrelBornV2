import { useState } from "react";
import type { MenuItem } from "@shared/schema";

import dummyProductImg from "@assets/generated_images/signature_mocktails_drinks.png";

interface ProductCardProps {
  item: MenuItem;
}

export default function ProductCard({ item }: ProductCardProps) {
  const [imgError, setImgError] = useState(false);
  const imageUrl = imgError || !item.image || item.image.includes("example.com") ? dummyProductImg : item.image;

  return (
    <div className="flex flex-col overflow-hidden" style={{ borderRadius: 0 }}>
      <div className="relative w-full aspect-[3/4] overflow-hidden">
        <img
          src={imageUrl}
          alt={item.name}
          className="w-full h-full object-cover"
          style={{ borderRadius: 0 }}
          onError={() => setImgError(true)}
        />
        <div
          className={`absolute top-2 right-2 w-4 h-4 rounded-full border-2 border-white shadow-sm ${
            item.isVeg ? 'bg-green-500' : 'bg-red-500'
          }`}
        />
      </div>

      <div className="pt-3">
        <h3
          className="text-base sm:text-lg font-semibold leading-tight mb-1"
          style={{ 
            color: '#C9A55C', 
            fontFamily: "'Cormorant Garamond', serif",
            letterSpacing: "0.5px"
          }}
        >
          {item.name}
        </h3>
        <p
          className="text-xs sm:text-sm leading-relaxed mb-2 line-clamp-2"
          style={{ 
            color: '#FFFFFF',
            fontFamily: "'Lato', sans-serif"
          }}
        >
          {item.description}
        </p>
        <span
          className="text-sm sm:text-base font-bold"
          style={{ 
            color: '#FFFFFF',
            fontFamily: "'Lato', sans-serif",
            letterSpacing: "0.5px"
          }}
        >
          ₹{item.price}
        </span>
      </div>
    </div>
  );
}