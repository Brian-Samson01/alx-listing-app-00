import { useRouter } from "next/router";
import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import PropertyDetail from "@/components/property/PropertyDetail";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;

  // match by property name OR id depending on your dataset
  const property = PROPERTYLISTINGSAMPLE.find(
    (item) => item.name === id
  );

  if (!property) return <p className="p-6 text-red-500">Property not found</p>;

  return (
    <div className="min-h-screen bg-gray-50">
      <PropertyDetail property={property} />
    </div>
  );
}
