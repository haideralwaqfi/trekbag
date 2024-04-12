import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItem({ onAddItem }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!itemText) {
      alert("Please Enter a text");
      inputRef.current.focus();
      return;
    }

    onAddItem(itemText);
    setItemText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an Item</h2>
      <input
        autoFocus={true}
        ref={inputRef}
        value={itemText}
        onChange={(e) => {
          setItemText(e.target.value);
        }}
      />
      <Button title={"Add to Item List"} />
    </form>
  );
}
