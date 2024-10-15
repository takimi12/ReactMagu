import React, { useState } from "react";

export const OrdersAdd = () => {

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


// 1 sposob

//   const validate = () => {
//     let errors = {
//         client:"",
//         quantity: "",
//         title:"",
//         description: "",
//     };

//     if (!formData.client) {
//       errors.client = "Wybór klienta jest wymagany";
//     }

//     if (!formData.quantity || formData.quantity.length < 1 || formData.quantity.length > 15) {
//       errors.quantity = "Ilość musi być liczbą większą od 1 i mniejszą od 15";
//     }

//     if (!formData.title || formData.title.length < 5) {
//       errors.title = "Tytuł musi mieć co najmniej 5 liter";
//     }

//     if (!formData.description || formData.description.length < 10) {
//       errors.description = "Treść zamówienia musi mieć co najmniej 10 liter";
//     }

//     return errors;
//   };


// 2 sposob

const validate = () => {
    let isValid = false;
  
    if (!formData.client) {
      setErrors(prevErrors => ({
        ...prevErrors,
        client: "Wybór klienta jest wymagany"
      }));
      isValid = false;
    } else {
      setErrors(prevErrors => ({
        ...prevErrors,
        client: ""
      }));
    }
  
    if (!formData.quantity) {
      setErrors(prevErrors => ({
        ...prevErrors,
        quantity: "Ilość jest wymagana"
      }));
      isValid = false;
    } else {
      setErrors(prevErrors => ({
        ...prevErrors,
        quantity: ""
      }));
    }
  
    if (!formData.title) {
      setErrors(prevErrors => ({
        ...prevErrors,
        title: "Tytuł zamówienia jest wymagany"
      }));
      isValid = false;
    } else {
      setErrors(prevErrors => ({
        ...prevErrors,
        title: ""
      }));
    }
  
    if (!formData.description) {
      setErrors(prevErrors => ({
        ...prevErrors,
        description: "Treść zamówienia jest wymagana"
      }));
      isValid = false;
    } else {
      setErrors(prevErrors => ({
        ...prevErrors,
        description: ""
      }));
    }
  
    return isValid;
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

    // walidacja bledow 1 sposob

    // const validationErrors = validate();
    // setErrors(validationErrors);

    // if (Object.keys(validationErrors).length === 0) {
    //   console.log("Formularz przesłany", formData);
    // }

    // walidacja bledow 2 sposob

    if(validate()) {
        console.log('dane zostaly wyslane')        
    } else {
        console.log('nie udalo sie wyslac danych')
    }




  };

  return (
    <div>

    </div>
  );
};
