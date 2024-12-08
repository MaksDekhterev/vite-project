import { Select } from "../ui/Select/Select";
import s from "./SelectButton.module.scss";

export const SelectButton = ({ setGender, setSort }) => {
  return (
    <div className={s.filters}>
      <Select
        onChange={(evt) => setGender(evt.target.value)}
        name="gender"
        options={[
          { value: "", text: "Gender" },
          { value: "male", text: "Male" },
          { value: "female", text: "Female" },
        ]}
      />
      <Select
        onChange={(evt) => setSort(evt.target.value)}
        name="sort"
        options={[
          { value: "date", text: "Sort" },
          { value: "a-z", text: "A-Z" },
          { value: "z", text: "Z-A" },
          { value: "", text: "Oldest" },
        ]}
      />
    </div>
  );
};
