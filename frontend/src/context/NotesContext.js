import { createContext, useReducer } from 'react'

export const NotesContext = createContext()

export const notesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_NOTES':
      return {
        notes: action.payload
      }
    case 'CREATE_NOTE':
      return {
        notes: [action.payload, ...state.notes]
      }
    case 'DELETE_NOTE':
      return {
        notes: state.notes.filter(n => n._id !== action.payload._id)
      }
    case 'UPDATE_NOTE':
      return {
        notes: state.notes.map(n=> n._id === action.payload._id ? action.payload:n)  
      }
    default:
      return state
  }
}

export const NotesContextProvider = ({ children }) => {
  const [noteState, noteDispatch] = useReducer(notesReducer, {
    notes: null
  })

  return (
    <NotesContext.Provider value={{ ...noteState, noteDispatch }}>
      {children}
    </NotesContext.Provider>
  )
}