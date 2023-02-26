import {
  removeTodo,
  toggleTodo,
  clearComletedTodo,
  selectVisibleTodos,
} from "../../features/todos/todos-slice";
import { setFilter } from "../../features/filters/filtres-slice";
import CreateTodo from "./CreateTodo";
import "./todolist.scss";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import toogleImg from "../../img/toggleClick.png";
const TodoList = () => {
  const activeFilter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const todos = useSelector((state) => selectVisibleTodos(state, activeFilter));
  const handleFilter = (filtr) => dispatch(setFilter(filtr));
  return (
    <>
      <div className="todoList">
        <CreateTodo />
        <div className="todoList__list">
          {todos.map((todo) => {
            return (
              <ul className="todoList__list-item" key={todo.id}>
                <ul className="todoList__list-item-grop">
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
                  <h2 className="todoList__list-item__title">{todo.title}</h2>
                </ul>
                <AiOutlineClose
                  size={18}
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="todoList__list-item__close"
                />
              </ul>
            );
          })}
          <div className="todoList__list-footer">
            <h2>{todos.length} item left</h2>
            <div className="todoList__list-footer_filter">
              <h2 className="filter-op" onClick={() => handleFilter("all")}>
                All
              </h2>
              <h2 className="filter-op" onClick={() => handleFilter("active")}>
                Active
              </h2>
              <h2
                className="filter-op"
                onClick={() => handleFilter("completed")}
              >
                Completed
              </h2>
            </div>
            <h2
              className="filter-op"
              onClick={() => dispatch(clearComletedTodo())}
            >
              Clear completed
            </h2>
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
