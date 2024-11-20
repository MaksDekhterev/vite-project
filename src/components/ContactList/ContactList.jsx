import { useState } from "react";
import { ContactDetails } from "../ContactDetails/ContactDetails";
import { ContactItem } from "../ContactItem/ContactItem";
import s from "./ContactList.module.scss";

export const ContactList = ({ contacts }) => {
  const [selected, setSelected] = useState(0);
  return (
    <div className={s.container}>
      <ul className={s.contact}>
        {contacts.map((e) => (
          <ContactItem
            key={e.id}
            obj={e}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <ContactDetails />
    </div>
  );
};
