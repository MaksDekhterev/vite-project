import { zodResolver } from "@hookform/resolvers/zod";
import s from "./ContactForm.module.scss";
import { useForm } from "react-hook-form";
import { Input } from "../ui/Input/Input";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // {
  //   resolver: zodResolver(schema);
  // }

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={s.wrapper} onClick={(evt) => evt.stopPropagation()}>
      <p className={s.title}>Add new contact</p>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            type="text"
            forInput="about"
            buttonName="About"
            register={register}
          />
        </div>
        <div>
          <Input
            type="text"
            forInput="name"
            buttonName="Name"
            register={register}
          />
        </div>
        <div>
          <Input
            type="text"
            forInput="subname"
            buttonName="Subname"
            register={register}
          />
        </div>
        <div>
          <Input
            type="tel"
            forInput="phone"
            buttonName="Phone"
            register={register}
          />
        </div>
        <div>
          <Input
            type="email"
            forInput="mail"
            buttonName="Email"
            register={register}
          />
        </div>
        <button>Подтвердить</button>
      </form>
    </div>
  );
};
