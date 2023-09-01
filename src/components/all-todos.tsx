import { useTodo } from "@/hooks/useTodos";
import { Input } from "./input";

interface AllTodosProps {
  title: string;
}

export const AllTodos = ({ title }: AllTodosProps) => {
  const { todos, addTodo, handleCheck } = useTodo();

  return (
    <div title={title}>
      <Input addTodo={addTodo} />
      <ul>
        {todos?.map((todo, idx) => (
          <li key={idx} className="flex gap-x-3">
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => handleCheck(idx)}
            />
            <span className={`${todo.isCompleted ? "line-through" : ""}`}>
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
