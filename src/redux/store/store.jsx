/* eslint-disable react-refresh/only-export-components */
import { configureStore } from "@reduxjs/toolkit";
import todoReucer from "../state/TodoSlice"



export default configureStore({

    reducer:{
        todo:todoReucer
    }
})