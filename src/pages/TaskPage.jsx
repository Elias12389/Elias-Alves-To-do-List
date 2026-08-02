//Forma como importamos
import { useSearchParams } from "react-router-dom";

function TaskPage() {
  //O primeiro indice podendno conter qualquer nome
  const [searchParams] = useSearchParams();
  //método get para justamente pegar pela url
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="h-screen w-screen bg-slate-500 p-6">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default TaskPage;
