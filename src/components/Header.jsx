import { useItemsContext } from "../lib/hooks";
import Counter from "./Counter";
import Logo from "./Logo";

export default function Header() {
  const { totalNumberOfItems, numberOfItemsPacked } = useItemsContext();
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
