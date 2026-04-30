
// import { Link } from "react-router-dom";

// export default function Home() {
//   return (
//     <div className="bg-[#f5f3ff] text-[#1f2937]">

//       {/* ================= HERO ================= */}
//       <section className="relative h-screen flex items-center justify-center">

//         <img
//           src="https://media.elwatannews.com/media/img/mediaarc/large/15247328111563702808.jpg"
//           className="absolute inset-0 w-full h-full object-cover scale-105"
//         />

        
//         <div className="relative text-center max-w-2xl px-6 text-white">

//           <h1 className="text-4xl md:text-5xl font-bold">
//             منصة السكن الطلابي
//           </h1>

//           <p className="mt-4 text-white/90">
//             تجربة حديثة وسهلة للبحث عن سكن مناسب وآمن للطلاب
//           </p>

//           <div className="mt-6 flex justify-center gap-4">

//             <Link to="/housing">
//               <button className="px-6 py-3 rounded-xl bg-white text-[#4f46e5] hover:scale-105 transition">
//                 استكشف السكن
//               </button>
//             </Link>

//             <Link to="/map">
//               <button className="px-6 py-3 rounded-xl border border-white text-white hover:bg-white/10 transition">
//                 الخريطة
//               </button>
//             </Link>

//           </div>
//         </div>
//       </section>

//       {/* ================= NEW SECTION ================= */}
//       <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

//         <img
//           src="https://i.ytimg.com/vi/oG-Qi39O16M/maxresdefault.jpg"
//           className="rounded-2xl shadow-lg object-cover w-full h-[350px]"
//         />

//         <div>

//           <h2 className="text-3xl font-bold mb-4 text-[#4f46e5]">
//             نساعدك في إيجاد سكن مناسب
//           </h2>

//           <p className="text-[#64748b] leading-8">
//             نوفر لك سكن داخل محافظتك أو قريب من مكان دراستك،
//             مع إمكانية اختيار سكن في قلب المدينة أو في مناطق هادئة،
//             مع خدمات أساسية تساعدك على حياة مريحة وآمنة.
//           </p>

//           <div className="mt-6 flex gap-3">

//             <span className="px-4 py-2 bg-[#e0e7ff] text-[#4f46e5] rounded-xl text-sm">
//               داخل المحافظة
//             </span>

//             <span className="px-4 py-2 bg-[#ede9fe] text-[#6d28d9] rounded-xl text-sm">
//               قريب من الجامعة
//             </span>

//             <span className="px-4 py-2 bg-[#f5f3ff] text-[#7c3aed] rounded-xl text-sm">
//               وسط المدينة
//             </span>

//           </div>

//         </div>
//       </section>

//       {/* ================= SERVICES ================= */}
//       <section className="py-20 px-6 bg-white">

//         <h2 className="text-center text-3xl font-bold mb-10 text-[#4f46e5]">
//           خدمات المنصة
//         </h2>

//         <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

//           {[
//             ["🏠 السكن", "اختيار سكن مناسب وآمن"],
//             ["🗺️ الخريطة", "عرض المواقع بسهولة"],
//             ["🔒 الأمان", "بيئة موثوقة للطلاب"],
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="bg-[#f5f3ff] border border-[#e0e7ff] rounded-2xl p-6"
//             >
//               <h3 className="font-bold text-[#4f46e5]">{item[0]}</h3>
//               <p className="text-[#64748b] text-sm mt-2">{item[1]}</p>
//             </div>
//           ))}

//         </div>
//       </section>

//       {/* ================= ABOUT ================= */}
//       <section className="py-20 px-6 bg-[#f5f3ff] text-center">

//         <h2 className="text-3xl font-bold text-[#4f46e5]">
//           عن المنصة
//         </h2>

//         <p className="mt-4 max-w-3xl mx-auto text-[#64748b] leading-8">
//           منصة السكن الطلابي تهدف إلى تسهيل حياة الطلاب من خلال توفير سكنات
//           موثوقة مع عرضها بطريقة سهلة وحديثة تساعدك على اتخاذ القرار بسرعة.
//         </p>

//       </section>

//       {/* ================= CTA ================= */}
//       <section className="py-20 px-6 text-center bg-white">

//         <h2 className="text-2xl font-bold text-[#4f46e5]">
//           ابدأ رحلتك الآن
//         </h2>

//         <p className="text-[#64748b] mt-2">
//           ابحث عن سكنك المثالي خلال دقائق
//         </p>

//         <Link to="/housing">
//           <button className="mt-6 px-6 py-3 bg-gradient-to-r from-[#4f46e5] to-[#9333ea] text-white rounded-xl">
//             ابدأ الآن
//           </button>
//         </Link>

//       </section>

//       {/* ================= FOOTER ================= */}
//       <footer className="bg-gradient-to-r from-[#4f46e5] to-[#9333ea] text-white py-8 text-center">

//         <h3 className="text-lg font-semibold">
//           🏠 منصة السكن الطلابي
//         </h3>

//         <p className="text-white/80 mt-2 text-sm">
//           © 2026 جميع الحقوق محفوظة
//         </p>

//         <p className="text-white/60 text-xs mt-2">
//           تم تصميم المنصة لمساعدة الطلاب في إيجاد سكن آمن وسهل
//         </p>

//       </footer>

//     </div>
//   );
// }


import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Home() {
  const { user } = useContext(AuthContext);

  return (
    <div className="bg-[#f5f3ff] text-[#1f2937]">

      {/* ================= HERO ================= */}
      <section className="relative h-screen flex items-center justify-center">

        <img
          src="https://media.elwatannews.com/media/img/mediaarc/large/15247328111563702808.jpg"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />

        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative text-center max-w-2xl px-6 text-white">

          {/* 👋 ترحيب بالمستخدم */}
          <h2 className="text-lg mb-2 text-white/80">
            👋 أهلاً {user ? user.email.split("@")[0] : "بك"}
          </h2>

          <h1 className="text-4xl md:text-5xl font-bold">
            منصة السكن الطلابي
          </h1>

          <p className="mt-4 text-white/90">
            تجربة حديثة وسهلة للبحث عن سكن مناسب وآمن للطلاب
          </p>

          <div className="mt-6 flex justify-center gap-4">

            <Link to="/housing">
              <button className="px-6 py-3 rounded-xl bg-white text-[#4f46e5] hover:scale-105 transition">
                استكشف السكن
              </button>
            </Link>

            <Link to="/map">
              <button className="px-6 py-3 rounded-xl border border-white text-white hover:bg-white/10 transition">
                الخريطة
              </button>
            </Link>

          </div>
        </div>
      </section>

      {/* ================= NEW SECTION ================= */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <img
          src="https://i.ytimg.com/vi/oG-Qi39O16M/maxresdefault.jpg"
          className="rounded-2xl shadow-lg object-cover w-full h-[350px]"
        />

        <div>

          <h2 className="text-3xl font-bold mb-4 text-[#4f46e5]">
            نساعدك في إيجاد سكن مناسب
          </h2>

          <p className="text-[#64748b] leading-8">
            نوفر لك سكن داخل محافظتك أو قريب من مكان دراستك،
            مع إمكانية اختيار سكن في قلب المدينة أو في مناطق هادئة،
            مع خدمات أساسية تساعدك على حياة مريحة وآمنة.
          </p>

          <div className="mt-6 flex gap-3">

            <span className="px-4 py-2 bg-[#e0e7ff] text-[#4f46e5] rounded-xl text-sm">
              داخل المحافظة
            </span>

            <span className="px-4 py-2 bg-[#ede9fe] text-[#6d28d9] rounded-xl text-sm">
              قريب من الجامعة
            </span>

            <span className="px-4 py-2 bg-[#f5f3ff] text-[#7c3aed] rounded-xl text-sm">
              وسط المدينة
            </span>

          </div>

        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-20 px-6 bg-white">

        <h2 className="text-center text-3xl font-bold mb-10 text-[#4f46e5]">
          خدمات المنصة
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {[
            ["🏠 السكن", "اختيار سكن مناسب وآمن"],
            ["🗺️ الخريطة", "عرض المواقع بسهولة"],
            ["🔒 الأمان", "بيئة موثوقة للطلاب"],
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#f5f3ff] border border-[#e0e7ff] rounded-2xl p-6"
            >
              <h3 className="font-bold text-[#4f46e5]">{item[0]}</h3>
              <p className="text-[#64748b] text-sm mt-2">{item[1]}</p>
            </div>
          ))}

        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-20 px-6 bg-[#f5f3ff] text-center">

        <h2 className="text-3xl font-bold text-[#4f46e5]">
          عن المنصة
        </h2>

        <p className="mt-4 max-w-3xl mx-auto text-[#64748b] leading-8">
          منصة السكن الطلابي تهدف إلى تسهيل حياة الطلاب من خلال توفير سكنات
          موثوقة مع عرضها بطريقة سهلة وحديثة تساعدك على اتخاذ القرار بسرعة.
        </p>

      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 px-6 text-center bg-white">

        <h2 className="text-2xl font-bold text-[#4f46e5]">
          ابدأ رحلتك الآن
        </h2>

        <p className="text-[#64748b] mt-2">
          ابحث عن سكنك المثالي خلال دقائق
        </p>

        <Link to="/housing">
          <button className="mt-6 px-6 py-3 bg-gradient-to-r from-[#4f46e5] to-[#9333ea] text-white rounded-xl">
            ابدأ الآن
          </button>
        </Link>

      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gradient-to-r from-[#4f46e5] to-[#9333ea] text-white py-8 text-center">

        <h3 className="text-lg font-semibold">
          🏠 منصة السكن الطلابي
        </h3>

        <p className="text-white/80 mt-2 text-sm">
          © 2026 جميع الحقوق محفوظة
        </p>

        <p className="text-white/60 text-xs mt-2">
          تم تصميم المنصة لمساعدة الطلاب في إيجاد سكن آمن وسهل
        </p>

      </footer>

    </div>
  );
}