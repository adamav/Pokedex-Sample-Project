import { createReducer } from "@reduxjs/toolkit";
import { saveSearchHistory } from "./search-history.actions";
import { SearchHistoryInterface } from "./search-history.interface";


const initalState : SearchHistoryInterface[] = []



const searchHistoryReducer = createReducer(initalState, builder =>{

    builder.addCase(saveSearchHistory, (state, action) =>{

       
        return [action.payload,...state,  ]
    })

});


export default searchHistoryReducer;