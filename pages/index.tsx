import React, { useState } from "react";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";

const FilterPill: React.FC<{
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full border ${
        isActive
          ? "bg-blue-600 text-white border-blue-600"
          : "bg-white text-gray-700 border-gray-300"
      } hover:bg-blue-600 hover:text-white transition`}
    >
      {label}
    </button>
  );
};

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{property.name}</h3>
        <p className="text-blue-600 font-bold">${property.price} / night</p>
        <p className="text-yellow-500">⭐ {property.rating.toFixed(1)}</p>
      </div>
    </div>
  );
};

const filterLabels = [
  "Top Villa",
  "Self Checkin",
  "Amazing Pool",
  "Countryside",
  "Rooms",
];

const Home: React.FC = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (label: string) => {
    if (activeFilters.includes(label)) {
      setActiveFilters(activeFilters.filter((f) => f !== label));
    } else {
      setActiveFilters([...activeFilters, label]);
    }
  };

  // Filter properties based on active filters
  const filteredProperties = activeFilters.length
    ? PROPERTYLISTINGSAMPLE.filter((property) =>
        activeFilters.every((filter) => property.category.includes(filter))
      )
    : PROPERTYLISTINGSAMPLE;

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-64 rounded-lg flex items-center justify-center text-white mb-8"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Find your favorite place here!
          </h1>
          <p className="text-lg md:text-xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Pills */}
      <section className="mb-8 flex flex-wrap gap-4">
        {filterLabels.map((label) => (
          <FilterPill
            key={label}
            label={label}
            isActive={activeFilters.includes(label)}
            onClick={() => toggleFilter(label)}
          />
        ))}
      </section>

      {/* Listings */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.name} property={property} />
        ))}
      </section>
    </div>
  );
};

export default Home;
