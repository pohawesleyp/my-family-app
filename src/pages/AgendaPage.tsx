import { ChevronLastIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function AgendaPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title") || "Sem título";
  const description = searchParams.get("description") || "Sem descrição";

  return (
    <div className="min-h-screen bg-white p-4">
      <button
        onClick={() => navigate("/home")}
        className="absolute left-0 top-0 bottom-0"
      >
        <ChevronLastIcon />
      </button>
      <h2 className="text-x font-bold text-slate-600">{title}</h2>
      <p className="text-slate-600">{description}</p>
    </div>
  );
}

export default AgendaPage;
