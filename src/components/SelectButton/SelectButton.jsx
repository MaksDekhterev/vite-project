import s from './SelectButton.module.scss'

export const SelectButton = () => {
  return (
    <div className={s.filters}>
      <select name="gender" className={s.gender}>
        <option value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <select name="sort" className={s.sort}>
        <option value="">Sort</option>
        <option value="az">A-Z</option>
        <option value="za">Z-A</option>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
      </select>
    </div>
  );
};
