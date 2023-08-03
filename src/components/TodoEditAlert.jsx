import Swal from "sweetalert2"
import store from "../redux/store/store"
import { EditTodo } from "../redux/state/TodoSlice"





export function TodoEditAlert(i,item){

    Swal.fire({
        title: 'Edit Task Name',
        input: 'text',
        inputValue:item,
        inputValidator:(value)=>{
            if(value){
                store.dispatch(EditTodo({index:i, task:value}))

            }
        }
        
      })
    
}