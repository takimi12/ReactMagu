import { useContext } from "react"
import { SeriesContext } from "./seriesContext"

export const useSeriesContext = () => {
    const context = useContext(SeriesContext)

    return context
}