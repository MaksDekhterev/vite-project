import s from "./ContactItem.module.scss";

export const ContactItem = ({ obj, selected, setSelected }) => {
  const { id, name, surname, about, gender, mail, phone, image } = obj;
  return (
    <li
      className={s.contact__list}
      style={selected === id ? { border: "2px solid lightgreen" } : {}}
      onClick={() => {
        setSelected(id);
      }}
    >
      <div className={s.contact__description}>
        <img
          src={image ? import.meta.env.VITE_BASE_URL + image : gender === "male" ? "images/man.png" : "images/women.png"}
          alt="аватарка контакта"
          className={s.contact__avatar}
        />
        <div className={s.contact__text}>
          <p className={s.contact__name}>{name}</p>
          <p className={s.contact__name}>{surname}</p>
          <p className={s.contact__status}>{about}</p>
        </div>
        <a href={"tel:" + phone} className={s.contact__tel}>
          {phone}
        </a>
      </div>

      <a href={"mailto:" + mail} className={s.contact__mail}>
        {mail}
      </a>
    </li>
  );
};
