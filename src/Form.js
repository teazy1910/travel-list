import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [select, setSelect] = useState(1);

  function handleSumbit(e) {
    e.preventDefault();

    // Wenn das Formular leer abgeschickt wird, returne sofort (also tue nix)
    if (!description) return;

    const newItem = { description, select, packed: false, id: Date.now() };

    onAddItems(newItem);
    setDescription("");
    setSelect(1);
  }

  return (
    <form className="add-form" onSubmit={handleSumbit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={select}
        onChange={(e) => setSelect(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
