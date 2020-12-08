import { useReducer } from 'react'

/*** INITIAL STATE TEMPLATE ***/
const initialState = {
  "current_report": ""
}

/*** REDUCER ***/
const reducer = (state, action) => {
  switch (action.type) {
    case "set_current_report":
      return {...state, current_report: action.report }
    default:
      return state
  }
}

const useGlobalState = () =>  useReducer(reducer, initialState)
export default useGlobalState