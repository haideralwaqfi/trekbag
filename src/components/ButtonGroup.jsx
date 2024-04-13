import { useContext } from "react";
import Button from "./Button";
import { ItemsContext } from "../context/ItemsListContextProvider";
import { useItemsStore } from "../store/itemsStore";

export default function ButtonGroup() {
  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const removeAllItems = useItemsStore((state) => state.removeAllItems);
  const markedAsIncomplete = useItemsStore((state) => state.markedAsIncomplete);
  const resetToInitial = useItemsStore((state) => state.resetToInitial);
  const secondaryButton = [
    {
      title: "Remove All Items",
      buttonType: "secondary",
      onClick: removeAllItems,
    },
    {
      title: "Reset to Initial",
      buttonType: "secondary",
      onClick: resetToInitial,
    },
    {
      title: "Mark Complete",
      buttonType: "secondary",
      onClick: markAllAsComplete,
    },
    {
      title: "Mark Incomplete",
      buttonType: "secondary",
      onClick: markedAsIncomplete,
    },
  ];
  return (
    <section className="button-group">
      {secondaryButton.map(({ title, onClick, buttonType }) => (
        <Button
          key={title}
          buttonType={buttonType}
          title={title}
          onClick={onClick}
        />
      ))}
    </section>
  );
}
