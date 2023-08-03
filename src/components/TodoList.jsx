
import {useSelector} from "react-redux"
import { TodoDeletAlert } from "./TodoDeletAlert";
import { TodoEditAlert } from "./TodoEditAlert";


const TodoList = () => {

    const todoItem = useSelector((state)=>state.todo.value)
    console.log(todoItem);



  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <table className="table">
            <thead>
              <tr>
                <th>No</th>
                <th>Task Name</th>
                <th>Edit</th>
                <th>Remov</th>
              </tr>
            </thead>

            <tbody>
              {todoItem.map((item, i) => (
                
                  <tr key={i.toString}>
                    <td>{i}</td>
                    <td>{item}</td>
                    <td>
                      <button onClick={()=>{TodoEditAlert(i, item)}}  className="btn btn-sm btn-dark">Edit</button>
                    </td>
                    <td>
                      <button onClick={()=>{TodoDeletAlert(i)}} className="btn btn-sm btn-danger">Remove</button>
                    </td>
                  </tr>
                
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
