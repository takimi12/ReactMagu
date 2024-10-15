import React from 'react';
import Card from './Card'; // Ensure the path is correct
import './Wrapper.scss'; // Create a stylesheet for the Wrapper

const cards = [
{
  id:0,
  imgSrc:
  "https://images.unsplash.com/photo-1661869535393-872dea2d9f8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
name: "Adam",
surname: "Jochemczyk",
street: "TestStreet",
postCode: "00-123",
town: "Town",
region: "Region",
phoneNumber: "+48 123 456 789",
},
  {
    id: 1,
    imgSrc:
      "https://images.unsplash.com/photo-1661869535393-872dea2d9f8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    name: "Zbigniew",
    surname: "Herbert",
    street: "TestStreet",
    postCode: "00-123",
    town: "Town",
    region: "Region",
    phoneNumber: "+48 123 456 789",
  },
  {
    id: 2,
    imgSrc:
      "https://images.unsplash.com/photo-1661869535393-872dea2d9f8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    name: "Henryk",
    surname: "Sienkiewicz",
    street: "TestStreet",
    postCode: "00-123",
    town: "Town",
    region: "Region",
    phoneNumber: "+48 123 456 788",
  },
  {
    id: 3,
    imgSrc:
      "https://images.unsplash.com/photo-1661869535393-872dea2d9f8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    name: "Wisława",
    surname: "Szymborska",
    street: "TestStreet",
    postCode: "00-123",
    town: "Town",
    region: "Region",
    phoneNumber: "+48 123 456 787",
  },
];

export const Wrapper = () => {
  return (
    <div className="wrapper-grid">
      <Card  cards={cards}/>
  </div>
  );
};

