import s from "./ContactDetails.module.scss";

export const ContactDetails = ({ contactObj, resetSelectedDelete }) => {
  const { name, surname, image, id, phone, mail, gender } = contactObj;
  return (
    <div className={s.container}>
      <div className={s.info}>
        <img
          src={
            image
              ? import.meta.env.VITE_BASE_URL + image
              : gender === "male"
              ? "images/man.png"
              : "images/women.png"
          }
          className={s.avatar}
        />
        <p className={s.name}>{name}</p>
        <p className={s.contact__label}>{surname}</p>
        <button
          onClick={() => resetSelectedDelete(id)}
          className={s.button + " main__button"}
        >
          Delete contact
        </button>
      </div>
      <div>
        <div className={s.contact__wrapper}>
          <div>
            <p className={s.contact__label}>Phone number</p>
            <p className={s.contact__text}>{phone}</p>
          </div>
          <button className={s.contact__image + " " + s.contact__image_green}>
            <img src="images/contactDetails/tel.svg" alt="phone" />
          </button>
        </div>
        <div className={s.contact__wrapper}>
          <div>
            <p className={s.contact__label}>Email Address</p>
            <p className={s.contact__text}>{mail}</p>
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
