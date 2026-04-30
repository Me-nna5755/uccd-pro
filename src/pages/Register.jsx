
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const nav = useNavigate();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const register = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, pass);
    nav("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-pink-600 to-indigo-600">

      <div className="w-[92%] max-w-md bg-white/20 backdrop-blur-2xl border border-white/30 rounded-3xl p-8 text-white shadow-2xl">

        <h2 className="text-3xl font-bold text-center mb-2">
          Create Account ✨
        </h2>

        <p className="text-center text-white/70 mb-6 text-sm">
          Join us and find your housing
        </p>

        <form onSubmit={register} className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-xl bg-white/10 outline-none focus:ring-2 focus:ring-pink-300"
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPass(e.target.value)}
            className="w-full p-3 rounded-xl bg-white/10 outline-none focus:ring-2 focus:ring-pink-300"
          />

          <button className="w-full p-3 bg-white text-black rounded-xl font-bold hover:scale-105 transition">
            Register
          </button>

        </form>

        <p className="text-center text-sm mt-5 text-white/70">
          لديك حساب؟{" "}
          <Link to="/login" className="text-white font-bold underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}