// components/Pill.tsx

const Pill = ({ label }: { label: string }) => {
  return (
    <span className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-sm rounded-full cursor-pointer">
      {label}
    </span>
  );
};

export default Pill;
