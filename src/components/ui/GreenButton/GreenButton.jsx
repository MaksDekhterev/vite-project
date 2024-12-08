import s from "./GreenButton.module.scss";

export const GreenButton = ({ button = false, forInput = "", children, onClick, className="" }) => {
  return (
    <div className={s.button}>
      {button ? (
        <button className={"main__button " + className} onClick={onClick}>
          {children}
        </button>
      ) : (
        <label className={"main__button " + className} htmlFor={forInput}>
          {children}
        </label>
      )}
    </div>
  );
};
