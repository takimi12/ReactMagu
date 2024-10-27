import { useMutation, useQueryClient } from "@tanstack/react-query";

type OrderData = {
  client: string;
  quantity: string;
  title: string;
  description: string;
};

export const useAddOrderMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (newOrder: OrderData) => {
      const response = await fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newOrder),
      });

      if (!response.ok) {
        throw new Error("Wystąpił błąd podczas wysyłania danych");
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["clients"] }); // Poprawka tutaj
    },
  });

  return mutation;
};
