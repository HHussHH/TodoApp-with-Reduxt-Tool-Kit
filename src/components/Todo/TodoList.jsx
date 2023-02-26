import { removeTodo, toggleTodo } from "../../features/todos/todos-slice";
import CreateTodo from "./CreateTodo";
import "./todolist.scss";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import toogleImg from "../../img/toggleClick.png";
const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  return (
    <>
      <div className="todoList">
        <CreateTodo />
        <div className="todoList__list">
          {todos.map((todo) => {
            return (
              <div className="todoList__list-item" key={todo.id}>
                <div className="todoList__list-item-grop">
                  {todo.completed ? (
                    <img
                      className="todoList__list-item-selected"
                      onClick={() => dispatch(toggleTodo(todo.id))}
                      src={toogleImg}
                    />
                  ) : (
                    <div
                      className="todoList__list-item-selected"
                      onClick={() => dispatch(toggleTodo(todo.id))}
                    />
                  )}
                  <p className="todoList__list-item__title">{todo.title}</p>
                </div>
                <AiOutlineClose
                  size={18}
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="todoList__list-item__close"
                />
              </div>
            );
          })}
          <div className="todoList__list-footer">
            <h2>{todos.length} item left</h2>
            <div className="todoList__list-footer_filter">
              <h2>All</h2>
              <h2>Active</h2>
              <h2>Completed</h2>
            </div>
            <h2>Clear completed</h2>
          </div>
        </div>
        <footer className="todoList__footer">
          Drag and drop to reorder list
        </footer>
      </div>
    </>
  );
};

export default TodoList;
