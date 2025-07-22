// /components/VehicleImage.tsx
// import Image from "next/image";

// interface VehicleImageProps {
//   name: string; // e.g. "Honda Accord"
// }

// export default function VehicleImage({ name }: VehicleImageProps) {
//   const imageName = name.toLowerCase().replace(/\s+/g, "-"); // "Honda Accord" → "honda-accord"
//   const imagePath = `/images/cars/${imageName}.jpg`;

//   return (
//     <div className="w-full h-full relative rounded overflow-hidden border shadow">
//       <Image
//         src={imagePath}
//         alt={name}
//         fill
//         className="object-cover"
//         priority
//       />
//     </div>
//   );
// }
// VehicleImage.tsx
import Image from "next/image"

export default function VehicleImage({ name }: { name: string }) {
  const imageName = name.toLowerCase().replace(/ /g, "-") + ".jpg"
  return (
    <Image
      src={`/images/cars/${imageName}`}
      alt={name}
      width={300}
      height={200}
      className="object-contain h-full w-full"
    />
  )
}

