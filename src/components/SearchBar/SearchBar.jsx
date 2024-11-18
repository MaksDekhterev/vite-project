import s from "./SearchBar.module.scss";

export const SearchBar = () => {
  return (
    <div>
      <form className={s.form}>
        <button className={s.form__button}>Search</button>
        <input name="search" type="text" className={s.form__bar} />
      </form>
    </div>
  );
};
