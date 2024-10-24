import { useSeriesContext } from "./useSeriesContext"

export const SeriesDetails = () => {
    const context = useSeriesContext();

    if(!context) return null

    const {name, network} = context



    return (
        <div>
            <h3>{name}</h3>
            <p>{network} - </p>
        </div>
    )
}