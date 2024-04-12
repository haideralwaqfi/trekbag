import Counter from "./Counter";
import Logo from "./Logo";

export default function Header({ totalNumberOfItems, numberOfItemsPacked }) {
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
