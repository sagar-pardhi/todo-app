import { useTodo } from "@/hooks/useTodos";
import { Input } from "./input";
import { TodoList } from "./todo-list";

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
            <TodoList
              key={idx}
              todo={todo}
              handleCheck={handleCheck}
              idx={idx}
            />
          );
        }
      })}
    </div>
  );
};
