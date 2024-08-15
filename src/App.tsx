import "./App.css";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import TodosContenxtProvider from "./store/todo-context";
function App() {
  return (
    <TodosContenxtProvider>
      <NewTodo />
      <Todos />
    </TodosContenxtProvider>
  );
}

export default App;
