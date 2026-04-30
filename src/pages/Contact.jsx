

import { useState } from "react";
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) return;

    await addDoc(collection(db, "messages"), {
      name,
      email,
      message,
      createdAt: new Date(),
    });

    alert("💌 تم إرسال رسالتك بنجاح");

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-[#f8f7fb] flex items-center justify-center px-4">

      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#6d28d9] mb-2">
          تواصل معنا
        </h1>

        <p className="text-center text-gray-500 mb-8 text-sm">
          نحن هنا لمساعدتك في أي وقت ✨
        </p>

        {/* Form */}
        <form onSubmit={sendMessage} className="space-y-5">

          {/* Name */}
          <div>
            <label className="text-sm text-gray-600">الاسم</label>
            <input
              className="w-full mt-1 p-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-300"
              placeholder="اكتب اسمك"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-600">الإيميل</label>
            <input
              className="w-full mt-1 p-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-300"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Message */}
          <div>
            <label className="text-sm text-gray-600">الرسالة</label>
            <textarea
              className="w-full mt-1 p-3 rounded-xl bg-gray-50 border border-gray-200 h-36 resize-none focus:outline-none focus:ring-2 focus:ring-purple-300"
              placeholder="اكتبي رسالتك هنا..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-md hover:opacity-90 transition"
          >
            إرسال الرسالة
          </button>

        </form>

        {/* Footer note */}
        <p className="text-center text-xs text-gray-400 mt-6">
          نرد عليك خلال 24 ساعة
        </p>

      </div>
    </div>
  );
}