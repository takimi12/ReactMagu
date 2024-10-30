export type TVSeries = {
    id: number;
    name:string;
    start_date:string;
    end_date:string | null;
    country: string;
    network: string;
}


export type TVSeriesResponse = {
    total:number;
    page:number;
    pages:number;
    tv_shows:TVSeries[];
}