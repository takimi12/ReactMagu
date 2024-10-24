import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

export const AppEx2Context = () => {
    return (
    <QueryClientProvider client={queryClient}>

    </QueryClientProvider>
    )
}