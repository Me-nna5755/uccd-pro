
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="bg-white shadow p-4 flex justify-center gap-6">

//       <Link to="/" className="text-pink-600 font-bold">الرئيسية</Link>
//       <Link to="/housing">السكن</Link>
//       <Link to="/map">الخريطة</Link>
//       {/* 👇 رابط تواصل معنا */}
//       <Link to="/contact" className="text-purple-600 font-semibold">
//         تواصل معنا
//       </Link>

//     </nav>
//   );
// }
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";

export default function Navbar() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const logout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-md px-6 py-4 flex justify-between items-center">

      {/* Logo */}
      <Link to="/" className="text-xl font-bold text-indigo-600">
        🏠 Sokny
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6 items-center text-gray-700">

        <Link to="/" className="hover:text-indigo-600">الرئيسية</Link>
        <Link to="/housing" className="hover:text-indigo-600">السكن</Link>
        <Link to="/map" className="hover:text-indigo-600">الخريطة</Link>
        <Link to="/contact" className="hover:text-indigo-600">تواصل</Link>

        {!user ? (
          <>
            <Link to="/login" className="text-indigo-600 font-semibold">
              دخول
            </Link>
            <Link to="/register" className="bg-indigo-600 text-white px-3 py-1 rounded-lg">
              تسجيل
            </Link>
          </>
        ) : (
          <>
            <span className="text-green-600 font-semibold">
              👋 {user.email.split("@")[0]}
            </span>

            <button
              onClick={logout}
              className="text-red-500 font-semibold"
            >
              خروج
            </button>
          </>
        )}

      </div>

      {/* Mobile Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-2xl"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col p-4 gap-3 md:hidden">

          <Link to="/" onClick={() => setOpen(false)}>الرئيسية</Link>
          <Link to="/housing" onClick={() => setOpen(false)}>السكن</Link>
          <Link to="/map" onClick={() => setOpen(false)}>الخريطة</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>تواصل</Link>

          {!user ? (
            <>
              <Link to="/login" onClick={() => setOpen(false)}>دخول</Link>
              <Link to="/register" onClick={() => setOpen(false)}>تسجيل</Link>
            </>
          ) : (
            <>
              <span>👋 {user.email.split("@")[0]}</span>
              <button onClick={logout} className="text-red-500">
                خروج
              </button>
            </>
          )}

        </div>
      )}

    </nav>
  );
}