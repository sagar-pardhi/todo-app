import { Tabs } from "./components/tabs";
import { AllTodos } from "./components/all-todos";
import { ActiveTodos } from "./components/active-todos";
import { CompletedTodos } from "./components/completed-todos";

export const App = () => {
  return (
    <main className="container flex flex-col items-center mx-auto my-5">
      <h1 className="text-3xl font-bold">#todo</h1>
      <div className="my-5">
        <Tabs>
          <AllTodos title="All Todos" />
          <ActiveTodos title="Active Todos" />
          <CompletedTodos title="Completed Todos" />
        </Tabs>
      </div>
    </main>
  );
};
