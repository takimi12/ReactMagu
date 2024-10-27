import { useQuery } from '@tanstack/react-query';

const fetchClients = async () => {
  const response = await fetch('http://localhost:3000/clients');
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
};

export const useClients = () => {
  return useQuery({
    queryKey: ['clients'], // Define the query key here
    queryFn: fetchClients,  // The fetch function
  });
};
