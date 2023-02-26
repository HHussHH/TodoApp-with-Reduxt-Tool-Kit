import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todos/todos-slice";
const CreateTodo = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(e.target.title.value));
    e.target.reset();
  };
  return (
    <form className="todoList__addTodo" onSubmit={handleSubmit}>
      <input
        className="todoList__addTodo__type"
        type="text"
        name="title"
        placeholder="New todo"
      />
      <input
        className="todoList__addTodo__btn"
        type="submit"
        value="Add Todo"
      />
    </form>
  );
};

export default CreateTodo;
