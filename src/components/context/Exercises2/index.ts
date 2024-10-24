export type TVSeries = {
    id:number;
    name:string;
    start_date:string;
    end_date:string | null;
    coutry: string;
    network: string;
}

export type TVSeriesResponse = {
    total:number;
    page:number;
    pages:number;
    tv_shows: TVSeries[];
}