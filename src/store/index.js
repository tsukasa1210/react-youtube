import React, { createContext, useReducer } from 'react'

const initialState = {
    popular: [],
    selected: {},
    related: [],
    searched: [],
    term: '',
}
const reducer = (state, action) => {
    switch(action.type){
        case 'SET_POPULAR':
            return {...state, popular: action.payload.popular }
        case 'SET_SELECTED':
            return {...state, selected: action.payload.selected}
        case 'SET_RELATED':
            return {...state, related: action.payload.related} 
        case 'SET_':
            return {...state, searched: action.payload.searched}
            case 'SET_TERM':
            return {...state, term: action.payload.term}
        default:
            return state
    }
}

export const Store = createContext({
    globalState: initialState,
    setGlobalState: () => null
})

export const StoreProvider = ({ children }) => {
    const [globalState, setGlobalState] = useReducer(reducer, initialState)
    return (
        <Store.Provider value={{globalState, setGlobalState }}>{children}</Store.Provider>
    )
}

export default StoreProvider
