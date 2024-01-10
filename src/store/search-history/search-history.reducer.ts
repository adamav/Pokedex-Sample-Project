import { createReducer } from "@reduxjs/toolkit";
import { saveSearchHistory, deleteSeachHistoryWithId } from "./search-history.actions";
import { SearchHistoryInterface } from "./search-history.interface";
import { access } from "fs";


const initalState : SearchHistoryInterface[] = []



const searchHistoryReducer = createReducer(initalState, builder =>{

    builder.addCase(saveSearchHistory, (state, action) =>{

       
        return [action.payload,...state,  ]
    })

    builder.addCase(deleteSeachHistoryWithId, (state, action)=>{


        return state.filter(s => s.id != action.payload)
    })

});


export default searchHistoryReducer;