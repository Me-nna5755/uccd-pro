
export default function HousingCard({ title, price, img, location }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">

      {/* الصورة */}
      <img
        src={img}
        alt={title}
        className="w-full h-48 object-cover"
      />

      {/* المحتوى */}
      <div className="p-4">

        <h3 className="text-lg font-semibold text-[#111827]">
          {title}
        </h3>

        <p className="text-sm text-[#64748b] mt-1">
          📍 {location || "بني سويف - شرق النيل"}
        </p>

        <p className="mt-2 text-[#0f172a] font-medium">
          💰 السعر: {price} جنيه
        </p>

        <button className="mt-4 w-full py-2 bg-[#4f46e5] text-white rounded-xl">
          احجز الآن
        </button>

      </div>
    </div>
  );
}