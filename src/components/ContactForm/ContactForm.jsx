import { zodResolver } from "@hookform/resolvers/zod";
import s from "./ContactForm.module.scss";
import { useForm, useWatch } from "react-hook-form";
import { Input } from "../ui/Input/Input";
import { z } from "zod";
import { ErrorMessage } from "@hookform/error-message";
import { Select } from "../ui/Select/Select";
import { GreenButton } from "../ui/GreenButton/GreenButton";

const schema = z.object({
  about: z
    .string()
    .min(3, { message: "Должно быть не менее 3-х символов" })
    .max(20, { message: "Должно быть не более 20-ти символов" }),
  image: z.instanceof(FileList).refine(
    (files) => {
      if (files[0]) {
        return ["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(
          files[0].type
        );
      } else {
        return true;
      }
    }, // Проверка типа файла
    "Поддерживаются только файлы .jpg, .jpeg, .webp и .png"
  ),
  name: z
    .string()
    .min(2, { message: "Должно быть не менее 2-х символов" })
    .max(30, { message: "Должно быть не более 20-ти символов" }),
  surname: z
    .string()
    .min(2, { message: "Должно быть не менее 2-х символов" })
    .max(20, { message: "Должно быть не более 20-ти символов" }),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
    message:
      "Некорректный номер телефона. Используйте формат, например: +1234567890.",
  }),
  mail: z.string().email({ message: "Некорректный Email" }),
  gender: z.string().min(1, { message: "Выберите пол" }),
});

export const ContactForm = ({ onClose, createContactRefresh }) => {
  const {
    register,
    getValues,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  useWatch({ control, name: "image" });

  const image = getValues("image");

  const onSubmit = (data, evt) => {
    const formData = new FormData(evt.target);
    createContactRefresh(formData);
    onClose();
  };

  return (
    <div className={s.wrapper} onClick={(evt) => evt.stopPropagation()}>
      <p className={s.title}>Add new contact</p>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className={s.form__image}>
            <img
              src={image ? URL.createObjectURL(image[0]) : "images/man.png"}
              alt="аватарка контакта"
              className={s.avatar}
            />
            <input
              type="file"
              id="image"
              {...register("image")}
              style={{ display: "none" }}
            />
            <GreenButton className={s.form__button} forInput="image">
              <img src="icons/plus.svg" alt="plus" /> Add image
            </GreenButton>
          </div>
          <ErrorMessage
            name="image"
            errors={errors}
            render={({ message }) => <p className={s.error}>{message}</p>}
          />
        </div>
        <div>
          <Input
            type="text"
            forInput="about"
            buttonName="About"
            register={register}
          />
          <ErrorMessage
            name="about"
            errors={errors}
            render={({ message }) => <p className={s.error}>{message}</p>}
          />
        </div>
        <div>
          <Input
            type="text"
            forInput="name"
            buttonName="Name"
            register={register}
          />
          <ErrorMessage
            name="name"
            errors={errors}
            render={({ message }) => <p className={s.error}>{message}</p>}
          />
        </div>
        <div>
          <Input
            type="text"
            forInput="surname"
            buttonName="Surname"
            register={register}
          />
          <ErrorMessage
            name="surname"
            errors={errors}
            render={({ message }) => <p className={s.error}>{message}</p>}
          />
        </div>
        <div>
          <Input
            type="tel"
            forInput="phone"
            buttonName="Phone"
            register={register}
          />
          <ErrorMessage
            name="phone"
            errors={errors}
            render={({ message }) => <p className={s.error}>{message}</p>}
          />
        </div>
        <div>
          <Input
            type="text"
            forInput="mail"
            buttonName="Email"
            register={register}
          />
          <ErrorMessage
            name="mail"
            errors={errors}
            render={({ message }) => <p className={s.error}>{message}</p>}
          />
        </div>
        <div className={s.form__bottom}>
          <div>
            <Select
              register={register}
              name="gender"
              options={[
                { value: "male", text: "Male" },
                { value: "female", text: "Female" },
              ]}
            />
          </div>
          <GreenButton button={true} className={s.form__button}>
            {" "}
            <img src="icons/plus.svg" alt="plus" /> Add new contact
          </GreenButton>
        </div>
      </form>
    </div>
  );
};
