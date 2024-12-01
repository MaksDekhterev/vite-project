import s from "./GreenButton.module.scss";

export const GreenButton = ({ button = false, forInput = "", children, onClick }) => {
  return (
    <div className={s.button}>
      {button ? (
        <button className="main__button" onClick={onClick}>{children}</button>
      ) : (
        <label className="main__button" htmlFor={forInput}>
          {children}
        </label>
      )}
    </div>
  );
};
