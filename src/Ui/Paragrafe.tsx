import { ReactNode } from "react"; // Importe ReactNode

// 1. Defina uma interface para as props
interface ParagreProps {
  children: ReactNode; // children pode ser qualquer coisa que o React pode renderizar
}

// 2. Aplique a interface nas props da função
function Paragre({ children }: ParagreProps) {
  return <p className="mx-auto max-w-screen-lg px-4 py-8">{children}</p>;
}

export default Paragre;
