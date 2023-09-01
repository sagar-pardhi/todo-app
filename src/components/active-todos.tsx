import { useTodo } from "@/hooks/useTodos";
import { Input } from "./input";

interface ActiveTodosProps {
  title: string;
}

export const ActiveTodos = ({ title }: ActiveTodosProps) => {
  const { todos, addTodo, handleCheck } = useTodo();

  return (
    <div title={title}>
      <Input addTodo={addTodo} />
      {todos?.map((todo, idx) => {
        if (!todo.isCompleted) {
          return (
            <div key={idx} className="flex gap-x-3">
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => handleCheck(idx)}
              />
              <span className={`${todo.isCompleted ? "line-through" : ""}`}>
                {todo.text}
              </span>
            </div>
          );
        }
      })}
    </div>
  );
};
