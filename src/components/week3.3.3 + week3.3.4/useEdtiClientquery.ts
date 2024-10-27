import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ClientsObject } from './types';

const editClient = async (client: ClientsObject) => {
  const response = await fetch(`http://localhost:3000/clients/${client.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(client),
  });
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json(); // Return the updated client
};

export const useEditClient = () => {
  const queryClient = useQueryClient(); // Correct usage here

  return useMutation({
    mutationFn: editClient,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['clients'] }); // Invalidate clients query
    },
  });
};
