// /components/VehicleImage.tsx
import Image from "next/image";

interface VehicleImageProps {
  name: string; // e.g. "Honda Accord"
}

export default function VehicleImage({ name }: VehicleImageProps) {
  const imageName = name.toLowerCase().replace(/\s+/g, "-"); // "Honda Accord" → "honda-accord"
  const imagePath = `/images/cars/${imageName}.jpg`;

  return (
    <div className="w-64 h-40 relative rounded overflow-hidden border shadow">
      <Image
        src={imagePath}
        alt={name}
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
