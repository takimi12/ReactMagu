


import { ReactElement } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const ReactHookForm = (): ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    trigger, // Dodano funkcję trigger do ręcznej walidacji
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Rejestracja udana!", data);
  };

  const password = watch("password");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Imię</label>
        <input
          id="name"
          {...register("name", {
            required: "Imię jest wymagane",
            minLength: { value: 2, message: "Imię musi mieć co najmniej 2 znaki." },
          })}
          onBlur={() => trigger("name")} // Walidacja po opuszczeniu pola
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="username">Nazwa użytkownika</label>
        <input
          id="username"
          {...register("username", {
            required: "Nazwa użytkownika jest wymagana",
            minLength: { value: 3, message: "Nazwa użytkownika musi mieć co najmniej 3 znaki." },
          })}
          onBlur={() => trigger("username")} // Walidacja po opuszczeniu pola
        />
        {errors.username && <p>{errors.username.message}</p>}
      </div>

      <div>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "E-mail jest wymagany",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Podaj poprawny adres e-mail.",
            },
          })}
          onBlur={() => trigger("email")} // Walidacja po opuszczeniu pola
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="password">Hasło</label>
        <input
          id="password"
          type="password"
          {...register("password", {
            required: "Hasło jest wymagane",
            minLength: { value: 6, message: "Hasło musi mieć co najmniej 6 znaków." },
          })}
          onBlur={() => trigger("password")} // Walidacja po opuszczeniu pola
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <div>
        <label htmlFor="confirmPassword">Powtórz hasło</label>
        <input
          id="confirmPassword"
          type="password"
          {...register("confirmPassword", {
            required: "Powtórzenie hasła jest wymagane",
            validate: (value) => value === password || "Hasła muszą się zgadzać.",
          })}
          onBlur={() => trigger("confirmPassword")} // Walidacja po opuszczeniu pola
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </div>

      <button type="submit">Zarejestruj się</button>
    </form>
  );
};
