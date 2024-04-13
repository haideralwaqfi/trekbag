import { useContext } from "react";
import Button from "./Button";
import { ItemsContext } from "../context/ItemsListContextProvider";

export default function ButtonGroup() {
  const {
    handleRemoveAllItems,
    handleResetToInitial,
    handleMarkedAsComplete,
    handleMarkedAsIncomplete,
  } = useContext(ItemsContext);
  const secondaryButton = [
    {
      title: "Remove All Items",
      buttonType: "secondary",
      onClick: handleRemoveAllItems,
    },
    {
      title: "Reset to Initial",
      buttonType: "secondary",
      onClick: handleResetToInitial,
    },
    {
      title: "Mark Complete",
      buttonType: "secondary",
      onClick: handleMarkedAsComplete,
    },
    {
      title: "Mark Incomplete",
      buttonType: "secondary",
      onClick: handleMarkedAsIncomplete,
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
