import React, { useState } from "react";

const AddClientForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    postalCode: "",
    city: "",
    region: "",
    imageUrl: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({
    firstName:'',
    lastName:'',
    street:'',
    postalCode:'',
    city:'',
    region:'',
    phoneNumber:''
  });

  // Funkcja walidująca formularz
  const validate = () => {
    const errors = {
        firstName:'',
        lastName:'',
        street:'',
        postalCode:'',
        city:'',
        region:'',
        phoneNumber:''
    };

    // Walidacja imienia
    if (!formData.firstName || formData.firstName.length < 3) {
      errors.firstName = "Imię musi mieć przynajmniej 3 litery.";
    }

    // Walidacja nazwiska
    if (!formData.lastName || formData.lastName.length < 3) {
      errors.lastName = "Nazwisko musi mieć przynajmniej 3 litery.";
    }

    // Walidacja ulicy
    if (!formData.street || formData.street.length < 5) {
      errors.street = "Ulica musi mieć przynajmniej 5 liter.";
    }

    // Walidacja kodu pocztowego (format 2 cyfry, znak "-" i 3 cyfry)
    const postalCodePattern = /^\d{2}-\d{3}$/;
    if (!postalCodePattern.test(formData.postalCode)) {
      errors.postalCode = "Kod pocztowy musi mieć format XX-XXX.";
    }

    // Walidacja miasta
    if (!formData.city || formData.city.length < 3) {
      errors.city = "Miasto musi mieć przynajmniej 3 litery.";
    }

    // Walidacja regionu (opcjonalne)
    if (formData.region && formData.region.length < 3) {
      errors.region = "Region musi mieć przynajmniej 3 litery, jeśli jest podany.";
    }

    // Walidacja numeru telefonu (musi zaczynać się od "+" i mieć 11 cyfr)
    const phonePattern = /^\+\d{11}$/;
    if (!phonePattern.test(formData.phoneNumber)) {
      errors.phoneNumber = "Numer telefonu musi mieć format +XXXXXXXXXXX (11 cyfr).";
    }

    setErrors(errors);

    // Zwracamy `true`, jeśli nie ma błędów
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      alert("Formularz poprawnie wypełniony! (w tej wersji nie robi nic więcej)");
    } else {
      alert("Formularz zawiera błędy!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Imię:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <p style={{ color: "red" }}>{errors.firstName}</p>}
      </div>
      <div>
        <label>Nazwisko:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <p style={{ color: "red" }}>{errors.lastName}</p>}
      </div>
      <div>
        <label>Ulica:</label>
        <input
          type="text"
          name="street"
          value={formData.street}
          onChange={e=>handleChange}
        />
        {errors.street && <p style={{ color: "red" }}>{errors.street}</p>}
      </div>
      <div>
        <label>Kod pocztowy:</label>
        <input
          type="text"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
        />
        {errors.postalCode && <p style={{ color: "red" }}>{errors.postalCode}</p>}
      </div>
      <div>
        <label>Miasto:</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
        {errors.city && <p style={{ color: "red" }}>{errors.city}</p>}
      </div>
      <div>
        <label>Region (opcjonalne):</label>
        <input
          type="text"
          name="region"
          value={formData.region}
          onChange={handleChange}
        />
        {errors.region && <p style={{ color: "red" }}>{errors.region}</p>}
      </div>
      <div>
        <label>Link do zdjęcia (opcjonalne):</label>
        <input
          type="text"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Numer telefonu:</label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        {errors.phoneNumber && (
          <p style={{ color: "red" }}>{errors.phoneNumber}</p>
        )}
      </div>
      <button type="submit">Dodaj klienta</button>
    </form>
  );
};

export default AddClientForm;
