import { useState } from "react";
export default function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    // description must have a value.
    if (!description) {
      return;
    }

    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };

    onAddItem(newItem);

    // after submiting the form, back to initial states.
    setDescription("");
    setQuantity(1);

    // console.log(items);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3> What do you need for your trip? 🔦</h3>

      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))} // e.target.value is always gets a string.
      >
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
      ></input>

      <button type="submit">add</button>
    </form>
  );
}
