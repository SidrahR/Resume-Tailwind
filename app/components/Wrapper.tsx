import { ReactNode } from "react";

export default function Wrapper({ children }: { children: ReactNode }) {
  return <div className="max-w-screen-lg mx-auto">{children}</div>;
}
