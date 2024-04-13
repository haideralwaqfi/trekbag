import { persist } from "zustand/middleware";
import { create } from "zustand";
import { initialItems } from "../lib/constants";

export const useItemsStore = create(
  persist(
    (set) => ({
      items: initialItems,
      addItem: (newItemText) => {
        const newItem = {
          id: new Date().getTime(),
          name: newItemText,
          packed: false,
        };
        set((state) => ({ items: [...state.items, newItem] }));
      },
      deleteItem: (id) => {
        set((state) => {
          const newItems = state.items.filter((item) => item.id !== id);
          return { items: newItems };
        });
      },
      toggleItem: (id) => {
        set((state) => {
          const newItems = state.items.map((item) => {
            if (item.id === id) {
              return {
                ...item,
                packed: !item.packed,
              };
            }
            return item;
          });
          return { items: newItems };
        });
      },

      removeAllItems: () => {
        set(() => ({ items: [] }));
      },
      resetToInitial: () => {
        set(() => ({ items: initialItems }));
      },

      markAllAsComplete: () => {
        set((state) => {
          const newItems = state.items.map((item) => {
            return { ...item, packed: true };
          });
          console.log(newItems);
          return { items: newItems };
        });
      },
      markedAsIncomplete: () => {
        set((state) => {
          const newItems = state.items.map((item) => {
            return { ...item, packed: false };
          });
          console.log(newItems);
          return { items: newItems };
        });
      },
      resetToInitial: () => {
        set(() => ({ items: initialItems }));
      },
      totalNumberOfItems: () => {
        set((state) => {
          return state.items.length;
        });
      },
      numberOfItemsPacked: () => {
        set((state) => {
          return state.items.filter((item) => item.packed === true).length;
        });
      },
    }),
    { name: "items" }
  )
);
