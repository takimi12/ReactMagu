import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ClientsObject } from './types';

const addClient = async (client: ClientsObject) => {
  const response = await fetch('http://localhost:3000/clients', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(client),
  });
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json(); // Return the newly created client
};

export const useAddClient = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addClient,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['clients'] }); // Invalidate clients query
    },
  });
};
