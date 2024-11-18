import { ContactList } from "./components/ContactList/ContactList";
import { LeftAside } from "./components/LeftAside/LeftAside";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div className="container">
      <LeftAside />
      <div className="container__right">
        <Header />
        <ContactList />
      </div>
    </div>
  );
}

export default App;
