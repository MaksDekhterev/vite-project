import { SearchBar } from "../SearchBar/SearchBar";
import { SelectButton } from "../SelectButton/SelectButton";
import { GreenButton } from "../ui/GreenButton/GreenButton";
import s from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={s.search}>
      <h1 className={s.title}>Address book</h1>
      <div className={s.search__wrapper}>
        <SearchBar />
        <SelectButton />
        <GreenButton button={true}>
          <img src="images/searchBar/plus.svg" alt="+" />
          New contact
        </GreenButton>
      </div>
    </div>
  );
};
