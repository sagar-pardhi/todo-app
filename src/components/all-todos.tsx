import { useTodo } from "@/hooks/useTodos";
import { Input } from "./input";
import { TodoList } from "./todo-list";

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
          <TodoList key={idx} todo={todo} handleCheck={handleCheck} idx={idx} />
        ))}
      </ul>
    </div>
  );
};
