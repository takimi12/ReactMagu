import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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

export const ClientsId332 = () => {
  const [clients, setClients] = useState<ClientsObject[]>([]);

  useEffect(() => {
    const fetchClients = async () => {
      const response = await fetch('http://localhost:3000/clients');
      const data = await response.json();
      setClients(data);
    };

    fetchClients();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:3000/clients/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Aktualizacja stanu po usunięciu klienta
        setClients(clients.filter(client => client.id !== id));
      } else {
        console.error('Błąd podczas usuwania klienta');
      }
    } catch (error) {
      console.error('Wystąpił błąd:', error);
    }
  };

  return (
    <div>
      <h1>Lista klientów</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>

            <h2>{client.firstName} {client.lastName}</h2>

            <p><strong>Address:</strong> {client.street}, {client.postalCode}, {client.city}, {client.region}</p>
            <p><strong>Phone Number:</strong> {client.phoneNumber}</p>
            <img src={client.photoUrl} alt={`${client.firstName} ${client.lastName}`} />

            {/* Przycisk do usuwania */}
            <button onClick={() => handleDelete(client.id)}>Usuń</button>
            <Link to={`/clients/${client.id}/edit`}>
            <button>Edytuj</button>
            </Link>

          </li>
        ))}
      </ul>
    </div>
  );
};



