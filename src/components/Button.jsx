export default function Button({ title, buttonType, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`btn ${buttonType === "secondary" ? "btn--secondary" : ""}`}>
      {title}
    </button>
  );
}
