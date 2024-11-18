import s from "./SearchBar.module.scss";

export const SearchBar = () => {
  return (
    <div>
      <form className={s.form}>
        <div className={s.form__button}>
          <button className="main__button">Search</button>
        </div>
        <input name="search" type="text" className={s.form__bar} />
      </form>
    </div>
  );
};
