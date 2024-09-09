import { useContext } from "react";
import { InputContext } from "../inputContext";

export function useInputUser() {
  const context = useContext(InputContext);
  if (!context) {
    throw new Error("error context");
  }
  return context;
}
