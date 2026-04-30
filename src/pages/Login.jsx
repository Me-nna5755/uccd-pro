

import { useState, useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const nav = useNavigate();
  const { googleLogin } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const login = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, pass);
    nav("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">

      <div className="w-[92%] max-w-md bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 text-white shadow-2xl">

        <h2 className="text-3xl font-bold text-center mb-2">
          Welcome Back 👋
        </h2>

        <p className="text-center text-white/70 mb-6 text-sm">
          Login to continue
        </p>

        <form onSubmit={login} className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-xl bg-white/10 outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPass(e.target.value)}
            className="w-full p-3 rounded-xl bg-white/10 outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <button className="w-full p-3 bg-indigo-500 rounded-xl font-bold hover:scale-105 transition">
            Login
          </button>

        </form>

        <button
          onClick={googleLogin}
          className="w-full mt-4 p-3 bg-white text-black rounded-xl font-bold hover:scale-105 transition"
        >
          Continue with Google
        </button>

        <p className="text-center text-sm mt-5 text-white/70">
          ليس لديك حساب؟{" "}
          <Link to="/register" className="text-indigo-300 font-bold">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}