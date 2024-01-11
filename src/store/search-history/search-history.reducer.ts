import { createReducer } from "@reduxjs/toolkit";
import { saveSearchHistory, deleteSeachHistoryWithIndex } from "./search-history.actions";
import { SearchHistoryInterface } from "./search-history.interface";
import { access, stat } from "fs";


const initalState : SearchHistoryInterface[] = []



const searchHistoryReducer = createReducer(initalState, builder =>{

    builder.addCase(saveSearchHistory, (state, action) =>{

       
        return [action.payload,...state,  ]
    })

    builder.addCase(deleteSeachHistoryWithIndex, (state, action)=>{

       
        return[...state.filter((s, index) => index != action.payload)]
    })

});


export default searchHistoryReducer;