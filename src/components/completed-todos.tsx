import { useTodo } from "@/hooks/useTodos";
import { TodoList } from "./todo-list";

interface CompletedTodos {
  title: string;
}

export const CompletedTodos = ({ title }: CompletedTodos) => {
  const { todos, handleCheck, handleDelete, deleteAll } = useTodo();

  return (
    <div title={title} className="my-5">
      <ul>
        {todos?.map((todo, idx) => {
          if (todo.isCompleted) {
            return (
              <TodoList
                key={idx}
                todo={todo}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
                idx={idx}
                showDeleteButton
              />
            );
          }
        })}
      </ul>
      <div className="flex justify-end w-full">
        <button
          className="px-3 py-2 text-white bg-red-500 rounded-lg"
          onClick={deleteAll}
        >
          Delete All
        </button>
      </div>
    </div>
  );
};
