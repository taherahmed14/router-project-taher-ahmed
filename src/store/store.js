import { createStore } from "redux"
import { reducer } from "../features/products/reducer"

export const store = createStore(reducer);