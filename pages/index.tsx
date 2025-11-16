// pages/index.tsx

import Image from "next/image";
import Pill from "@/components/Pill";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import heroImg from "@/public/hero.png"; // Make sure to add this file

export default function Home() {
  const filters = [
    "Top Villa",
    "Self Checkin",
    "Pet Friendly",
    "Free Parking",
    "Luxury",
    "Beachfront",
  ];

  return (
    <div>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src={heroImg}
          alt="Hero background"
          layout="fill"
          className="object-cover brightness-50"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold">Find your favorite place here!</h1>
          <p className="mt-2">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 py-6 flex gap-4 overflow-x-auto">
        {filters.map((filter) => (
          <Pill key={filter} label={filter} />
        ))}
      </section>

      {/* Property Listings */}
      <section className="max-w-7xl mx-auto px-4 pb-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {PROPERTYLISTINGSAMPLE.map((property, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-sm">
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-1">
              <h3 className="font-semibold">{property.name}</h3>
              <p className="text-sm text-gray-500">${property.price} / night</p>
              <p className="text-yellow-500 text-sm">⭐ {property.rating}</p>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
}
