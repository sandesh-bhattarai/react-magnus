import {configureStore} from "@reduxjs/toolkit"
import UserReducer from "../reducers/UserReducer"

const store = configureStore({
  reducer: {
    // reducers -> state and actions to manipulate that state
    user: UserReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store 
