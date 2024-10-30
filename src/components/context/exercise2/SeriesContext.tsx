import { createContext } from "react";
import { TVSeries } from ".";

export const SeriesContext = createContext<TVSeries| null>(null)