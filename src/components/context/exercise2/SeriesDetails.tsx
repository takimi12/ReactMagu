import { useSeriesContext } from "./useSeriesContext"

export const SeriesDetailData = () => {
    const context = useSeriesContext()

    if(!context) return null

    const {name, network, country} = context

    return(
        <div>
            <h2>{name}</h2>
            <p>{network} - {country}</p>
        </div>

    )
}