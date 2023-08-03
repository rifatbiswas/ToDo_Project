import CreateTodo from "../components/CreateTodo";
import TodoList from "../components/TodoList";

const ToDopage = () => {

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h2><i><b>My Todo Application</b></i></h2>
            </div>
            <div className="card-body">
              <CreateTodo></CreateTodo>
              <TodoList></TodoList>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDopage;