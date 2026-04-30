
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-white p-6">

      <h1 className="text-3xl font-bold text-center text-purple-700 mb-10">
        عن مشروع سكني 🏠
      </h1>

      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Text */}
        <div>
          <p className="text-gray-600 leading-8">
            مشروع سكني هو منصة ذكية تساعد الطلاب في العثور على سكن مناسب بالقرب من الجامعة
            بأسعار مختلفة وخدمات مريحة.
            <br /><br />
            يوفر المشروع تجربة سهلة عبر خريطة تفاعلية + نظام بحث + عرض الشقق بطريقة منظمة.
          </p>

          <Link to="/housing">
            <button className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-xl">
              استكشاف السكن
            </button>
          </Link>
        </div>

        {/* Image */}
        <img
          className="rounded-2xl shadow-lg"
          src="https://images.unsplash.com/photo-1502672023488-70e25813eb80"
          alt="housing"
        />

      </div>
    </div>
  );
}