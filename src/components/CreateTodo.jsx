import { useDispatch } from "react-redux";
import { AddTodo } from "../redux/state/TodoSlice";
import { useRef } from "react";



const CreateTodo = () => {


  const Dispatch =   useDispatch()
  const taskInput =useRef()


    return (
        <div className="container-fluid">
            <div className="row my-3">
                
                <div className="col-md-10">
                    <input ref={taskInput}  placeholder="Task Name" type="text"  className="form-control "/>            
                 </div>

                 <div className="col-md-2">                
                    <button onClick={()=>Dispatch(AddTodo(taskInput.current.value))} className="btn btn-primary">Add Todo</button>           
                 </div>
            
            </div>
            
        </div>
    );
};

export default CreateTodo;