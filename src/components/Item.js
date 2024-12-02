export default function Item({ item, onDeleteItem, onUpdateItem }) {
    return (
      <li style={{ textDecoration: item.packed ? 'line-through' : 'none' }}>
        {item.quantity} x {item.description}
        <button onClick={() => onDeleteItem(item.id)}>❌</button>
        <input type="checkbox" value={item.packed} onChange={() => onUpdateItem(item.id)} />
      </li>
    );
  }