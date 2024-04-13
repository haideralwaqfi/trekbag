import React, { createContext, useEffect, useState } from "react";
import { initialItems } from "../lib/constants";
export const ItemsContext = createContext();
export default function ItemsListContextProvider({ children }) {
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem("items")) || initialItems
  );
  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleDeleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const handleToggleItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          packed: !item.packed,
        };
      }
      return item;
    });
    setItems(newItems);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleResetToInitial = () => {
    setItems(initialItems);
  };

  const handleMarkedAsComplete = () => {
    const newItems = items.map((item) => {
      return {
        ...item,
        packed: true,
      };
    });
    setItems(newItems);
  };

  const handleMarkedAsIncomplete = () => {
    const newItems = items.map((item) => {
      return {
        ...item,
        packed: false,
      };
    });
    setItems(newItems);
  };
  const totalNumberOfItems = items.length;

  const numberOfItemsPacked = items.filter(
    (item) => item.packed === true
  ).length;
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <ItemsContext.Provider
      value={{
        items,
        handleAddItem,
        handleDeleteItem,
        handleToggleItem,
        handleRemoveAllItems,
        handleResetToInitial,
        handleMarkedAsComplete,
        handleMarkedAsIncomplete,
        totalNumberOfItems,
        numberOfItemsPacked,
      }}>
      {children}
    </ItemsContext.Provider>
  );
}
