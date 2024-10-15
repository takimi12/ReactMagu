import React, { useState } from "react";

export const OrdersAdd = () => {
  // Mock danych klientów
  const clients = [
    { name: "Jan Kowalski", phone: "123456789" },
    { name: "Anna Nowak", phone: "987654321" },
    { name: "Piotr Wiśniewski", phone: "555666777" },
  ];

  const [formData, setFormData] = useState({
    client: "",
    quantity: "",
    title: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    client:"",
    quantity: "",
    title:"",
    description: "",
});


  const validate = () => {
    let errors = {
        client:"",
        quantity: "",
        title:"",
        description: "",
    };

    if (!formData.client) {
      errors.client = "Wybór klienta jest wymagany";
    }

    if (!formData.quantity || formData.quantity.length < 1 || formData.quantity.length > 15) {
      errors.quantity = "Ilość musi być liczbą większą od 1 i mniejszą od 15";
    }

    if (!formData.title || formData.title.length < 5) {
      errors.title = "Tytuł musi mieć co najmniej 5 liter";
    }

    if (!formData.description || formData.description.length < 10) {
      errors.description = "Treść zamówienia musi mieć co najmniej 10 liter";
    }

    return errors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };



  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Formularz przesłany", formData);
    }
  };

  return (
    <div>
      <h2>Dodaj zamówienie</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Klient:</label>
          <select name="client" value={formData.client} onChange={handleChange}>
            <option value="wybierz klienta">-- Wybierz klienta --</option>
            {clients.map((client) => (
  <option key={client.phone} value={client.name}>
    {client.name}
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
            onChange={e=>handleChange}
          ></textarea>
          {errors.description && <span className="error">{errors.description}</span>}
        </div>

        <button type="submit">Dodaj zamówienie</button>
      </form>
    </div>
  );
};
