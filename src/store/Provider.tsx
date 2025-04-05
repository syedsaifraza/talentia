"use client"; // Needed for Next.js 15 (App Router)

import { Provider } from "react-redux";
import { store } from ".";

interface ReduxProviderProps {
  children: React.ReactNode;
}

export default function ReduxProvider({ children }: ReduxProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
