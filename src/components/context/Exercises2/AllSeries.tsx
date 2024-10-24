import { SingleSeries } from "./SingleSeries"
import { SeriesContext } from "./seriesContext"
import { useGetTVSeries } from "./useGetTVSeries"

export const AllSeries = () => {

    const {data, isPending} = useGetTVSeries()

    if(isPending) return <p>Loading...</p>

    return (
        <div>
            <h1>Best series</h1>
        <ul>
            {data?.tv_shows.map(show => (
            <SeriesContext.Provider value={show} key={show.id}>
            <SingleSeries key={show.id}/>
            </SeriesContext.Provider>
            ))}
        </ul>
        </div>
    )
}