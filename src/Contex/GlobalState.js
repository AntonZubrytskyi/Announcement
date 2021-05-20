import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';


const initialState = {
    announs: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const removeAnnoun = (id) => {
        dispatch({
            type: 'REMOVE_ANNOUN',
            payload: id
        })
    }

    const addAnnoun = (announ) => {
        dispatch({
            type: 'ADD_ANNOUN',
            payload: announ
        })
    }

    const editAnnoun = (announ) => {
        dispatch({
            type: 'EDIT_ANNOUN',
            payload: announ
        })
    }

    return (
        <GlobalContext.Provider value={{
            announs: state.announs,
            removeAnnoun,
            addAnnoun,
            editAnnoun
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
