import s from './ContactList.module.scss'

export const ContactList = () => {
  return (
    <div>
      <ul className={s.contact}>
        <li className={s.contact__list}>
          <img src="" alt="аватарка контакта" className={s.contact__avatar} />
          <div className={s.contact__info}>
            <p className={s.contact__name}>Curt Cobain</p>
            <p className={s.contact__status}>Best friend</p>
          </div>
          <a href="tel:+71234567890" className={s.contact__tel}>
            8 (123) 456-78-90
          </a>
          <a href="mailto:" className={s.contact__mail}>
            kurtcobain@gmail.com
          </a>
        </li>
      </ul>
    </div>
  );
};
