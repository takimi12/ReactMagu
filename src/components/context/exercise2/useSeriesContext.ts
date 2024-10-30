import { useContext } from "react"
import { SeriesContext } from "./SeriesContext"

export const useSeriesContext = () => {
    const context = useContext(SeriesContext)
    return context
}