import { SeriesDetails } from "./SeriesDetails"
import { SeriesMetaData } from "./SeriesMetaData"

export const SingleSeries = () => {
    return (
        <li>
            <SeriesMetaData />
            <SeriesDetails />
        </li>
    )
}