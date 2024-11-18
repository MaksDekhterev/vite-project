import { SearchBar } from "../SearchBar/SearchBar";
import { SelectButton } from "../SelectButton/SelectButton";
import s from './Header.module.scss'

export const Header = () => {
  return (
    <div className={s.search}>
      <SearchBar/>
      <SelectButton/>
    </div>
  );
};
