import { useLocalStorage } from "./useLocalStorage";

export const useTodo = () => {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);

  const addTodo = (todo: Todo) => {
    setTodos((prev) => [...prev, todo]);
  };

  const handleCheck = (index: number) => {
    setTodos(
      todos.map((todo, currIndex) =>
        currIndex === index ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const handleDelete = (idx: number) => {
    setTodos((current) => current.filter((_, currIdx) => currIdx !== idx));
  };

  const deleteAll = () => {
    setTodos((current) => current.filter((todo) => todo.isCompleted === false));
  };

  return {
    todos,
    addTodo,
    handleCheck,
    handleDelete,
    deleteAll,
  };
};
