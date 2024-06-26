import { useContext, useMemo, useState } from "react";
import EmptyView from "./EmptyView";
import Select from "react-select";

import { useItemsStore } from "../store/itemsStore";

const sortingOptions = [
  { value: "default", label: "Sort By Default" },
  { value: "packed", label: "Sort By Packed" },
  { value: "unpacked", label: "Sort By Unpacked" },
];

export default function ItemList() {
  const [sortBy, setSortBy] = useState("default");

  const items = useItemsStore((state) => state.items);
  const deleteItem = useItemsStore((state) => state.deleteItem);
  const toggleItem = useItemsStore((state) => state.toggleItem);
  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      if (sortBy === "packed") {
        return b.packed - a.packed;
      }
      if (sortBy === "unpacked") {
        return a.packed - b.packed;
      }
      return;
    });
  }, [items, sortBy]);

  return (
    <ul className="item-list">
      {!items.length && <EmptyView />}
      {items.length > 0 ? (
        <section className="sorting">
          <Select
            onChange={(option) => setSortBy(option.value)}
            options={sortingOptions}
            defaultValue={sortingOptions[0]}
          />
        </section>
      ) : null}
      {sortedItems.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={deleteItem}
            onToggleItem={toggleItem}
          />
        );
      })}
    </ul>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => {
            onToggleItem(item.id);
          }}
        />
        {item.name}
      </label>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
