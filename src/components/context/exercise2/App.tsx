import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { AllSeries } from "./AllSeries"

const queryClient = new QueryClient()

export const AppContext2 = () => {
    return (
<QueryClientProvider client={queryClient}>

        <AllSeries />

</QueryClientProvider>
    )
}