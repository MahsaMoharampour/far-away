export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>let's start adding some items to your packing list 😄</em>
      </footer>
    );
  }
  const itemsCount = items.length;
  const packedCount = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round((packedCount / itemsCount) * 100);
  return (
    <div className="stats">
      <footer>
        <em>
          {packedPercentage === 100
            ? "You've already got eveything. let's go 🚂"
            : `🧣 You have ${itemsCount} items in your list, and u already have packed
          ${packedCount} of them. (${packedPercentage}%)`}
        </em>
      </footer>
    </div>
  );
}
