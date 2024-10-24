import { useSeriesContext } from "./useSeriesContext"

export const SeriesMetaData = () => {

const context = useSeriesContext();

if(!context) return null


const {start_date, end_date} = context


return (
    <p>{start_date} do {end_date || 'teraz'}</p>
)
}