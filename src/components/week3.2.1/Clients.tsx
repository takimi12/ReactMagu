import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type ClientsObject ={
    id:string,
    firstName:string,
    lastName:string,
    street:string,
    postalCode:string,
    city:string,
    region:string,
    photoUrl:string,
    phoneNumber:string,
}


export const Clients = () => {
  const [clients, setClients] = useState<ClientsObject[]>([]);

  useEffect(() => {
    const fetchClients = async () => {
      const response = await fetch('http://localhost:3000/clients');
      const data = await response.json();
      setClients(data);
    };

    fetchClients();
  }, []);

  return (
    <div>
      <h1>Lista klientów</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link to={`/clients/${client.id}`}>
              {client.firstName} {client.lastName} - {client.city} - {client.phoneNumber}
            </Link>
            {client.photoUrl && <img src={client.photoUrl} alt={`${client.firstName} ${client.lastName}`} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

