//react and redux
import { useSelector, useDispatch } from "react-redux";

//Components
import {
  removeTodo,
  toggleTodo,
  clearComletedTodo,
  selectVisibleTodos,
  addTodo,
} from "../../features/todos/todos-slice";
import { setFilter } from "../../features/filters/filtres-slice";
import CreateTodo from "./CreateTodo";

// Styled
import { Reorder } from "framer-motion";
import "./todolist.scss";
import { AiOutlineClose } from "react-icons/ai";
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
          <Reorder.Group
            as="div"
            axys="y"
            values={todos}
            onReorder={addTodo}
            className="card__inner"
          >
            {todos.map((todo) => {
              return (
                <Reorder.Item
                  as="div"
                  className="todoList__list-item"
                  key={todo.id}
                  value={todo}
                  whileDrag={{ scale: 1.1 }}
                >
                  <ul className="todoList__list-item-grop">
                    {todo.completed ? (
                      // eslint-disable-next-line
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
                </Reorder.Item>
              );
            })}
          </Reorder.Group>
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
