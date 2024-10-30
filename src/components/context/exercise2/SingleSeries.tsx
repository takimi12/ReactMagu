import { SeriesDetailData } from "./SeriesDetails"
import { SeriesMetaData } from "./SeriesMetaData"

export const SingleSeries = () => {
    return<li>
        <SeriesMetaData />
        <SeriesDetailData />
    </li>
}