import { useState } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const getTotal = () => {
    if (!checkIn || !checkOut) return 0;

    const diff =
      (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
      (1000 * 60 * 60 * 24);

    return diff > 0 ? diff * price : 0;
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-xl">
      <h3 className="text-2xl font-semibold">${price}/night</h3>

      {/* Check-in */}
      <div className="mt-4">
        <label className="font-medium">Check-in</label>
        <input
          type="date"
          className="border p-2 w-full mt-1 rounded"
          onChange={(e) => setCheckIn(e.target.value)}
        />
      </div>

      {/* Check-out */}
      <div className="mt-4">
        <label className="font-medium">Check-out</label>
        <input
          type="date"
          className="border p-2 w-full mt-1 rounded"
          onChange={(e) => setCheckOut(e.target.value)}
        />
      </div>

      {/* Total */}
      <div className="mt-4 font-medium">
        Total payment:{" "}
        <span className="font-bold">${getTotal()}</span>
      </div>

      <button className="mt-6 bg-green-600 hover:bg-green-700 text-white py-2 px-4 w-full rounded-lg">
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
