import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useClients } from '../week3.3.3 + week3.3.4/useGetClientquerry'; // Adjust the path as necessary
import { useDeleteClient } from '../week3.3.3 + week3.3.4/useDeleteClientquery'; // Adjust the path as necessary
import { useAddClient } from '../week3.3.3 + week3.3.4/useAddClientquery'; // Import add client hook
import { Modal, Box, Button, Typography } from '@mui/material';

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

export const ClientsIdTanstackMUI = () => {
  const { data: clients = [], error, isLoading } = useClients();
  const deleteMutation = useDeleteClient();
  const addMutation = useAddClient();
   
  const [newClient, setNewClient] = useState<ClientsObject>({
    id: '', // will be generated by the server
    firstName: '',
    lastName: '',
    street: '',
    postalCode: '',
    city: '',
    region: '',
    photoUrl: '',
    phoneNumber: '',
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [clientToDelete, setClientToDelete] = useState<string | null>(null);

  const handleAddClient = () => {
    addMutation.mutate(newClient);
    setNewClient({ // Reset form after adding
      id: '',
      firstName: '',
      lastName: '',
      street: '',
      postalCode: '',
      city: '',
      region: '',
      photoUrl: '',
      phoneNumber: '',
    });
  };

  const openDeleteModal = (clientId: string) => {
    setClientToDelete(clientId);
    setModalOpen(true);
  };

  const closeDeleteModal = () => {
    setModalOpen(false);
    setClientToDelete(null);
  };

  const confirmDeleteClient = () => {
    if (clientToDelete) {
      deleteMutation.mutate(clientToDelete);
      closeDeleteModal();
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>An error occurred: {error.message}</p>;

  return (
    <div>
      <h1>Lista klientów</h1>
      <ul>
        {clients.map((client: ClientsObject) => (
          <li key={client.id}>
            <h2>{client.firstName} {client.lastName}</h2>
            <p><strong>Address:</strong> {client.street}, {client.postalCode}, {client.city}, {client.region}</p>
            <p><strong>Phone Number:</strong> {client.phoneNumber}</p>
            <img src={client.photoUrl} alt={`${client.firstName} ${client.lastName}`} />

            <button onClick={() => openDeleteModal(client.id)}>Usuń</button>
            <Link to={`/clients/${client.id}/edit`}>
              <button>Edytuj</button>
            </Link>
          </li>
        ))}
      </ul>

      {/* Form for adding a new client */}
      <h2>Dodaj klienta</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleAddClient(); }}>
        <input
          type="text"
          placeholder="First Name"
          value={newClient.firstName}
          onChange={(e) => setNewClient({ ...newClient, firstName: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={newClient.lastName}
          onChange={(e) => setNewClient({ ...newClient, lastName: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Street"
          value={newClient.street}
          onChange={(e) => setNewClient({ ...newClient, street: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Postal Code"
          value={newClient.postalCode}
          onChange={(e) => setNewClient({ ...newClient, postalCode: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="City"
          value={newClient.city}
          onChange={(e) => setNewClient({ ...newClient, city: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Region"
          value={newClient.region}
          onChange={(e) => setNewClient({ ...newClient, region: e.target.value })}
          required
        />
        <input
          type="url" // Changed to "url" for photo URL
          placeholder="Photo URL"
          value={newClient.photoUrl}
          onChange={(e) => setNewClient({ ...newClient, photoUrl: e.target.value })}
          required
        />
        <input
          type="tel" // Changed to "tel" for phone number
          placeholder="Phone Number"
          value={newClient.phoneNumber}
          onChange={(e) => setNewClient({ ...newClient, phoneNumber: e.target.value })}
          required
        />
        <button type="submit">Add Client</button>
      </form>

      {/* Delete Confirmation Modal */}
      <Modal open={modalOpen} onClose={closeDeleteModal}>
        <Box sx={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          width: 400, 
          bgcolor: 'background.paper', 
          p: 4, 
          borderRadius: 2, 
          boxShadow: 24 
        }}>
          <Typography variant="h6" component="h2">Potwierdzenie usunięcia</Typography>
          <Typography sx={{ mt: 2 }}>Czy na pewno chcesz usunąć tego klienta?</Typography>
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}>
            <Button onClick={closeDeleteModal} sx={{ mr: 2 }}>Anuluj</Button>
            <Button onClick={confirmDeleteClient} color="error" variant="contained">Usuń</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
