import "./todolist.scss";
import { AiOutlineClose } from "react-icons/ai";
const TodoList = () => {
  return (
    <>
      <div className="todoList">
        <div className="todoList__addTodo"></div>
        <div className="todoList__list">
          <div className="todoList__list-item">
            <div className="todoList__list-item-grop">
              <div className="todoList__list-item-selected" />
              <p className="todoList__list-item__title">My second todo</p>
            </div>
            <AiOutlineClose size={18} className="todoList__list-item__close" />
          </div>

          <div className="todoList__list-footer">
            <h2>5 item left</h2>
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
