import s from "./Select.module.scss";

export const Select = ({ name, options, register, ...selectProps }) => {
  return (
    <select
      name={name}
      className={s.select}
      {...(register && { ...register(name) })}
      {...selectProps}
    >
      {options.map((e, i) => (
        <option key={i} value={e.value}>
          {e.text}
        </option>
      ))}
    </select>
  );
};
