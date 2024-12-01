import { GreenButton } from "../GreenButton/GreenButton";
import s from "./Input.module.scss";

export const Input = ({
  button = false,
  register,
  forInput = "",
  buttonName,
  ...inputProps
}) => {
  return (
    <div className={s.form}>
      <div className={s.button__wrapper}>
        <GreenButton button={button} forInput={forInput}>
          {buttonName}
        </GreenButton>
      </div>
      <input
        id={forInput}
        {...(register && { ...register(forInput) })}
        {...inputProps}
        className={s.form__bar}
      />
    </div>
  );
};
