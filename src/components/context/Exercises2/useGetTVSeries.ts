import { useQuery } from "@tanstack/react-query"
import { TVSeriesResponse } from ".";

export const useGetTVSeries = () => {
    return useQuery({
        queryKey:['tv-series'],
        queryFn: async() => {
            const response = await fetch('https://www.episodate.com/api/most-popular?page=1');

            return response.json() as Promise<TVSeriesResponse>
        }
    })
}