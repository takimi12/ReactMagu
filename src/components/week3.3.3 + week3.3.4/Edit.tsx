import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetClientQuery } from '../week3.3.2/useGetClients';

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

export const ClientsIdEdit = () => {
  const { id } = useParams();  // Wyciągnięcie ID klienta z URL
  const [client, setClient] = useState<ClientsObject | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { data } = useGetClientQuery();



  // Obsługa zmiany wartości w formularzu
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (client) {
      setClient({ ...client, [name]: value });
    }
  };

  // Aktualizacja danych klienta
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (client) {
      try {
        const response = await fetch(`http://localhost:3000/clients/${client.id}`, {
          method: 'PUT',  // Metoda PUT służy do aktualizacji danych
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(client),
        });

        if (response.ok) {
          navigate(`/clients/${client.id}`); // Powrót do widoku szczegółów klienta
        } else {
          throw new Error('Failed to update client');
        }
      } catch (err) {
        setError('Could not update client');
      }
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return client ? (
    <div>
      <h1>Edit Client</h1>
      <form onSubmit={handleUpdate}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={client.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={client.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Street:</label>
          <input
            type="text"
            name="street"
            value={client.street}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Postal Code:</label>
          <input
            type="text"
            name="postalCode"
            value={client.postalCode}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={client.city}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Region:</label>
          <input
            type="text"
            name="region"
            value={client.region}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={client.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Photo URL:</label>
          <input
            type="text"
            name="photoUrl"
            value={client.photoUrl}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  ) : (
    <p>Client not found</p>
  );
};
