import { PropertyProps } from "@/interfaces/index";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";
import { useState } from "react";

const tabs = ["What we offer", "Reviews", "About Host"];

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [activeTab, setActiveTab] = useState("What we offer");

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* LEFT SECTION */}
      <div className="lg:col-span-2">
        <h1 className="text-4xl font-bold">{property.name}</h1>

        <div className="flex items-center space-x-3 mt-2 text-gray-600">
          <span className="text-yellow-500 font-semibold">
            ⭐ {property.rating}
          </span>
          <span>
            {property.address.city}, {property.address.country}
          </span>
        </div>

        {/* IMAGE GRID */}
        <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-6">
          <img
            src={property.image}
            className="col-span-4 md:col-span-2 row-span-2 w-full h-96 object-cover rounded-xl"
            alt={property.name}
          />
          {/* Render extra images if available */}
          {property.images?.slice(0, 3).map((img, index) => (
            <img
              key={index}
              src={img}
              className="w-full h-44 object-cover rounded-xl"
              alt="property"
            />
          ))}
        </div>

        {/* TABS */}
        <div className="mt-10 border-b">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`pb-2 text-lg ${
                  activeTab === tab
                    ? "border-b-2 border-black font-semibold"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* TAB CONTENT */}
        <div className="mt-6">
          {activeTab === "What we offer" && (
            <>
              <p className="text-gray-700">{property.description}</p>

              <h2 className="text-2xl font-semibold mt-6">
                What this place offers
              </h2>

              <ul className="flex flex-wrap gap-3 mt-3">
                {property.category.map((amenity, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 bg-gray-200 rounded-lg text-gray-700"
                  >
                    {amenity}
                  </li>
                ))}
              </ul>
            </>
          )}

          {activeTab === "Reviews" && (
            <ReviewSection reviews={property.reviews} />
          )}

          {activeTab === "About Host" && (
            <div>
              <h3 className="text-xl font-semibold">About the Host</h3>
              <p className="mt-2 text-gray-700">{property.host?.bio}</p>
            </div>
          )}
        </div>
      </div>

      {/* RIGHT SECTION - BOOKING */}
      <div className="lg:col-span-1">
        <div className="sticky top-20">
          <BookingSection price={property.price} />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
