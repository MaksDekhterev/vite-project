import { SearchBar } from "../SearchBar/SearchBar";
import { SelectButton } from "../SelectButton/SelectButton";
import s from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={s.search__container}>
      <div className={s.search}>
        <h1 className={s.title}>Address book</h1>
        <div className={s.search__wrapper}>
          <SearchBar />
          <SelectButton />
        </div>
      </div>
    </div>
  );
};
