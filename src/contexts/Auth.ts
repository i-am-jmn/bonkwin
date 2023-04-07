import { createContext } from "react";

export const Auth = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | null
>(null);
