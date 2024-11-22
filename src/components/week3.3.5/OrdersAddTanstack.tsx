import React, { useEffect, useState } from "react";
import { useGetClientQuery } from "./useGetClients";

type ClientsObject = {
  id: string;
  firstName: string;
  lastName: string;
  street: string;
  postalCode: string;
  city: string;
  region: string;
  photoUrl: string;
  phoneNumber: string;
};

export const OrdersAddTanstack335 = () => {


  const { data } = useGetClientQuery();




  const [formData, setFormData] = useState({
    client: "",
    quantity: "",
    title: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    client: "",
    quantity: "",
    title: "",
    description: "",
  });

  const validate = () => {
    let isValid = true;

    if (!formData.client) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        client: "Wybór klienta jest wymagany",
      }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        client: "",
      }));
    }

    if (!formData.quantity || Number(formData.quantity) < 1 || Number(formData.quantity) > 15) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        quantity: "Ilość musi być liczbą większą od 1 i mniejszą od 15",
      }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        quantity: "",
      }));
    }

    if (!formData.title || formData.title.length < 5) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        title: "Tytuł zamówienia jest wymagany i musi mieć co najmniej 5 znaków",
      }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        title: "",
      }));
    }

    if (!formData.description || formData.description.length < 10) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        description: "Treść zamówienia jest wymagana i musi mieć co najmniej 10 znaków",
      }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        description: "",
      }));
    }

    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      try {
        const response = await fetch("http://localhost:3000/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            client: formData.client,
            quantity: formData.quantity,
            title: formData.title,
            description: formData.description,
          }),
        });

        if (response.ok) {
          console.log("Dane zostały pomyślnie wysłane");
          setFormData({
            client: "",
            quantity: "",
            title: "",
            description: "",
          });
        } else {
          console.error("Wystąpił błąd podczas wysyłania danych");
        }
      } catch (error) {
        console.error("Wystąpił błąd po stronie klienta", error);
      }
    } else {
      console.log("Nie udało się wysłać danych");
    }
  };


  if(!data) return <p>dane nie zostały pobrane</p>

  return (
    <div>
      <h2>Dodaj zamówienie</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Klient:</label>
          <select name="client" value={formData.client} onChange={handleChange}>
            <option value="">-- Wybierz klienta --</option>
            {data.map((client) => (
              <option key={client.phoneNumber} value={client.phoneNumber}>
                {`${client.firstName} ${client.lastName}`}{client.phoneNumber}
              </option>
            ))}
          </select>
          {errors.client && <span className="error">{errors.client}</span>}
        </div>

        <div>
          <label>Ilość:</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
          {errors.quantity && <span className="error">{errors.quantity}</span>}
        </div>

        <div>
          <label>Tytuł zamówienia:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          {errors.title && <span className="error">{errors.title}</span>}
        </div>

        <div>
          <label>Treść zamówienia:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
          {errors.description && <span className="error">{errors.description}</span>}
        </div>

        <button type="submit">Dodaj zamówienie</button>
      </form>
    </div>
  );
};
