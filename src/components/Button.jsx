
export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 15px",
        borderRadius: "10px",
        border: "none",
        background: "linear-gradient(135deg,#4f46e5,#9333ea)",
        color: "white",
        cursor: "pointer",
        marginTop: "10px",
      }}
    >
      {text}
    </button>
  );
}