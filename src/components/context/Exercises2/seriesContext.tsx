import { createContext } from "react";
import { TVSeries } from "./index";

export const SeriesContext = createContext<TVSeries | null>(null);