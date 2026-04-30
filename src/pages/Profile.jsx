
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <div style={{ padding: "40px" }}>
      <h2>👤 الملف الشخصي</h2>

      {user ? (
        <div className="card" style={{ padding: "20px" }}>
          <h3>📧 {user.email}</h3>
          <p>مرحباً بك في منصة سكني</p>
        </div>
      ) : (
        <p>يجب تسجيل الدخول أولاً</p>
      )}
    </div>
  );
}