import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Task({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(tasks) {
    const query = new URLSearchParams();
    query.set("title", tasks.title);
    query.set("description", tasks.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 bg-slate-200 p-6 rounded-md shadow my-4">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${task.isCompleted && "line-through"}
            `}
          >
            {task.title}
          </button>
          <Button onClick={() => onSeeDetailsClick(task)}>
            <ChevronRightIcon />
          </Button>
          <Button onClick={() => onDeleteTaskClick(task.id)}>
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Task;
