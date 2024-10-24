import { createContext } from "react";
import { ConfigContextType } from "./index";

export const ConfigContext = createContext<ConfigContextType | null>(null)