import { useState } from "react";

interface InputProps {
  addTodo: (todo: Todo) => void;
}

export const Input = ({ addTodo }: InputProps) => {
  const [todo, setTodo] = useState({
    text: "",
    isCompleted: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, text: e.target.value });
  };

  return (
    <div className="flex gap-x-3 justify-between my-5">
      <input
        className="px-3 py-3 w-full rounded-lg border focus:outline-none"
        type="text"
        placeholder="add details"
        value={todo?.text}
        onChange={handleChange}
      />
      <button
        className="px-10 py-3 text-white bg-blue-500 rounded-lg"
        onClick={() => {
          addTodo(todo);
          setTodo({ text: "", isCompleted: false });
        }}
      >
        Add
      </button>
    </div>
  );
};
