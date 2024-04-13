import { useItemsStore } from "../store/itemsStore";
import Counter from "./Counter";
import Logo from "./Logo";

export default function Header() {
  const totalNumberOfItems = useItemsStore((state) => state.totalNumberOfItems);
  const numberOfItemsPacked = useItemsStore(
    (state) => state.numberOfItemsPacked
  );

  return (
    <header>
      <Logo />
      <Counter
        numberOfItemsPacked={numberOfItemsPacked}
        totalNumberOfItems={totalNumberOfItems}
      />
    </header>
  );
}
