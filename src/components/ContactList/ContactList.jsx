import { useState } from "react";
import { ContactDetails } from "../ContactDetails/ContactDetails";
import { ContactItem } from "../ContactItem/ContactItem";
import s from "./ContactList.module.scss";

export const ContactList = ({ contacts, deleteContactRefresh }) => {
  const [selected, setSelected] = useState(contacts.data[0].id);
  async function resetSelectedDelete(id) {
    try {
      await deleteContactRefresh(id);
      setSelected(contacts.data[0].id);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className={s.container}>
      <ul className={s.contact}>
        {contacts.data.map((e) => (
          <ContactItem
            key={e.id}
            obj={e}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <ContactDetails
        contactObj={
          contacts.data.find((e) => e.id === selected) || contacts.data[0]
        }
        resetSelectedDelete={resetSelectedDelete}
      />
    </div>
  );
};
