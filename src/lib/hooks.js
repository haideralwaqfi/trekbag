import { useContext } from "react";
import { ItemsContext } from "../context/ItemsListContextProvider";

export function useItemsContext() {
  const context = useContext(ItemsContext);
  if (!context) {
    throw new Error(
      "useItemsContext must be used within an ItemsListContextProvider"
    );
  }
  return context;
}
