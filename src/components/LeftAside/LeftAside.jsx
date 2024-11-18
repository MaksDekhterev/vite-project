import s from "./LeftAside.module.scss"

export const LeftAside = () => {
  return (
    <div>
      <h3 className={s.logo}>BitCamp</h3>
      <div className={s.contact}>
        <img src="images/man.png" alt="man" className={s.contact__man}/>
        <p className={s.contact__name}>Maksim</p>
        <p>dehterr@mail.ru</p>
      </div>
      <div>
        <img src="images/leftAside/dateIcon.svg" alt="date" />
        <p>16-03-2000</p>
      </div>
      <div>
        <img src="images/leftAside/phoneIcon.svg" alt="phone" />
        <a href="tel:89956070824">89956070824</a>
      </div>
    </div>
  );
};
