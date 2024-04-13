import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import ItemsListContextProvider from "./context/ItemsListContextProvider";

function App() {
  return (
    <>
      <BackgroundHeading />
      <main>
        <ItemsListContextProvider>
          <Header />
          <ItemList />
          <Sidebar />
        </ItemsListContextProvider>
      </main>
      <Footer />
    </>
  );
}

export default App;
