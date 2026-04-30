
import HousingCard from "../components/HousingCard";

export default function Housing() {
  return (
    <div className="bg-[#f8fafc] min-h-screen px-6 py-10 text-[#1f2937]">

      <h1 className="text-3xl font-bold text-center mb-12">
        السكنات المتاحة
      </h1>

      {/* VIP */}
      <h2 className="text-xl font-semibold mb-6 text-[#4f46e5]">
        🏆 فئة VIP
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mb-12">

        <HousingCard title="شقة فاخرة 1" price="7000"
          img="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688" />

        <HousingCard title="شقة فاخرة 2" price="6500"
          img="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267" />

        <HousingCard title="شقة فاخرة 3" price="7200"
          img="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85" />

      </div>

      {/* Medium */}
      <h2 className="text-xl font-semibold mb-6 text-[#0f172a]">
        🏠 فئة متوسطة
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mb-12">

        <HousingCard title="سكن متوسط 1" price="2500"
          img="https://images.unsplash.com/photo-1560448204-603b3fc33ddc" />

        <HousingCard title="سكن متوسط 2" price="2200"
          img="https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa" />

        <HousingCard title="سكن متوسط 3" price="2000"
          img="https://images.unsplash.com/photo-1586105251261-72a756497a11" />

      </div>

      {/* Economy */}
      <h2 className="text-xl font-semibold mb-6 text-[#64748b]">
        💡 فئة اقتصادية
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <HousingCard title="غرفة طلاب 1" price="1000"
          img="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf" />

        <HousingCard title="غرفة طلاب 2" price="900"
          img="https://images.unsplash.com/photo-1598928506311-c55ded91a20c" />

        <HousingCard title="غرفة طلاب 3" price="800"
          img="https://images.unsplash.com/photo-1616594039964-ae9021a400a0" />

      </div>

    </div>
  );
}