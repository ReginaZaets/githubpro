import { createContext, ReactNode, useState } from "react";

interface InputContextType {
  inputUser: string;
  setInputUser: (value: string) => void;
}

export const InputContext = createContext<InputContextType | undefined>(
  undefined
);

export const InputProvider = ({ children }: { children: ReactNode }) => {
  const [inputUser, setInputUser] = useState<string>("");

  return (
    <InputContext.Provider value={{ inputUser, setInputUser }}>
      {children}
    </InputContext.Provider>
  );
};
