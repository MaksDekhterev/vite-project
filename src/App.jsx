import { ContactList } from "./components/ContactList/ContactList";
import { LeftAside } from "./components/LeftAside/LeftAside";
import { Header } from "./components/Header/Header";
import { AsideRight } from "./components/AsideRight/AsideRight";
import s from "./App.module.scss";

function App() {
  return (
    <>
      <div className={s.leftAside}>
        <LeftAside />
      </div>

      <div className={s.header}>
        <Header />
      </div>

      <div>
        <ContactList />
      </div>

      <div><AsideRight/></div>
    </>
  );
}

export default App;
