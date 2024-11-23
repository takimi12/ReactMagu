import { ChangeEvent, useState } from "react";

interface FormData {
  login: string;
  age: string;
  bio: string;
  gender: string;
  agreement: boolean;
  contact: string;
  color: string;
  file: File | null;
  rangeValue: number;
  dateTime: string;
  password: string;
  email: string;
  tel: string;
  url: string;
  date: string;
  time: string;
  month: string;
  week: string;
}

type UseFormReturn<T> = [
  T,
  (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void,
  Record<string, string>,
  () => boolean,
  boolean,
  () => Promise<void>
];

export const useForm = (initialValues: FormData): UseFormReturn<FormData> => {
  const [formState, setFormState] = useState<FormData>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, type } = e.target;
    const value = type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;

    if (type === 'file') {
      const files = (e.target as HTMLInputElement).files;
      setFormState(prevState => ({
        ...prevState,
        [name]: files ? files[0] : null,
      }));
    } else {
      setFormState(prevState => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const validate = (): boolean => {
    let valid = true;
    const newErrors: Record<string, string> = {};

    // Walidacja loginu
    if (!formState.login) {
      newErrors.login = "Login jest wymagany";
      valid = false;
    } else if (formState.login.length < 3) {
      newErrors.login = "Login musi mieć co najmniej 3 znaki";
      valid = false;
    }

    // Walidacja wieku
    if (!formState.age) {
      newErrors.age = "Wiek jest wymagany";
      valid = false;
    } else if (isNaN(Number(formState.age)) || Number(formState.age) < 18) {
      newErrors.age = "Musisz mieć co najmniej 18 lat";
      valid = false;
    }

    // Walidacja hasła
    if (!formState.password) {
      newErrors.password = "Hasło jest wymagane";
      valid = false;
    } else if (formState.password.length < 6) {
      newErrors.password = "Hasło musi mieć co najmniej 6 znaków";
      valid = false;
    }

    // Walidacja emaila
    if (!formState.email) {
      newErrors.email = "Email jest wymagany";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = "Email jest nieprawidłowy";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (): Promise<void> => {
    if (validate()) {
      setIsSubmitting(true);
      try {
        // Tutaj możesz dodać logikę wysyłania danych, np. fetch lub axios
        console.log("Wysyłanie danych:", formState);
        // Symulacja opóźnienia wysyłania
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log("Dane wysłane pomyślnie");
      } catch (error) {
        console.error("Błąd podczas wysyłania danych:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return [formState, handleChange, errors, validate, isSubmitting, handleSubmit];
};