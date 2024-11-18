import s from "./ContactDetails.module.scss";

export const ContactDetails = () => {
  return (
    <div className={s.container}>
      <div className={s.info}>
        <img src="images/man.png" alt="photo" className={s.avatar} />
        <p className={s.name}>Curt Cobain</p>
        <p className={s.contact__label}>Best friend</p>
        <button className={s.button + " main__button"}>Edit contact</button>
      </div>
      <div>
        <div className={s.contact__wrapper}>
          <div>
            <p className={s.contact__label}>Phone number</p>
            <p className={s.contact__text}>0902362954</p>
          </div>
          <button className={s.contact__image + " " + s.contact__image_green}>
            <img src="images/contactDetails/tel.svg" alt="phone" />
          </button>
        </div>
        <div className={s.contact__wrapper}>
          <div>
            <p className={s.contact__label}>Email Address</p>
            <p className={s.contact__text}>onichan@gmail.com</p>
          </div>
          <button className={s.contact__image + " " + s.contact__image_orange}>
            <img src="images/contactDetails/mail.svg" alt="mail" />
          </button>
        </div>
      </div>
      <div className={s.contact__wrapper}>
        <div>
          <p className={s.contact__label}>Date of create</p>
          <p className={s.contact__text}>20.08.2024</p>
        </div>
      </div>
    </div>
  );
};
