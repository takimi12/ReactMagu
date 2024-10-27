import { useMutation, useQueryClient } from '@tanstack/react-query';

const deleteClient = async (id: string) => {
  const response = await fetch(`http://localhost:3000/clients/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Network response was not ok');
};

export const useDeleteClient = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteClient, 
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['clients'] }); 
    },
  });
};
