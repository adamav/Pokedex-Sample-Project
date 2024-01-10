import { createAction } from "@reduxjs/toolkit";
import { SearchHistoryInterface } from "./search-history.interface";


export const saveSearchHistory = createAction<SearchHistoryInterface>(
    "searchHistory/saveSearchHistory"
)

export const deleteSeachHistoryWithId = createAction<number>(
    "searchHistory/deleteSeachHistory"

)