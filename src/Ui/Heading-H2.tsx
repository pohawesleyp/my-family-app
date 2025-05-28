import { ReactNode } from "react"; // Importe ReactNode

// 1. Defina uma interface para as props
interface HeadingProps {
  children: ReactNode; // children pode ser qualquer coisa que o React pode renderizar
}

// 2. Aplique a interface nas props da função
function HeadingH2({ children }: HeadingProps) {
  return (
    <h2 className="bg-purple-300 italic text-center text-black text-lg font-bold mx-auto max-w-screen-lg my-3">
      {children}
    </h2>
  );
}

export default HeadingH2;
