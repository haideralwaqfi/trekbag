import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({
  handleAddItem,
  handleRemoveAllItems,
  handleResetToInitial,
  handleMarkedAsComplete,
  handleMarkedAsIncomplete,
  handleDeleteItem,
}) {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup
        handleRemoveAllItems={handleRemoveAllItems}
        handleResetToInitial={handleResetToInitial}
        handleMarkedAsComplete={handleMarkedAsComplete}
        handleMarkedAsIncomplete={handleMarkedAsIncomplete}
      />
    </div>
  );
}
