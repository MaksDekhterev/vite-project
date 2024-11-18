import s from "./LeftAside.module.scss";

export const LeftAside = () => {
  return (
    <div className={s.wrapper}>
      <h3 className={s.logo}>BitCamp</h3>
      <div className={s.contact}>
        <img src="images/man.png" alt="man" className={s.contact__man} />
        <p className={s.contact__name}>Maksim</p>
        <p className={s.contact__email}>dehterr@mail.ru</p>
      </div>
      <div className={s.contact__detail}>
        <div className={s.contact__text}>
          <img src="images/leftAside/dateIcon.svg" alt="date" />
          <p>16-03-2000</p>
        </div>
        <div className={s.contact__text}>
          <img src="images/leftAside/phoneIcon.svg" alt="phone" />
          <a className={s.contact__tel} href="tel:89956070824">89956070824</a>
        </div>
      </div>
    </div>
  );
};
