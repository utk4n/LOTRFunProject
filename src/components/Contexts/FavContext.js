import React, { createContext, useEffect, useReducer } from 'react'

export const Fav = createContext()

// -------------REDUCER--------------
const favReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_FAV":
            return {
                ...state,
                favList: [...state.favList, action.payload]
            }
            case "DELETE_FAV":
                return{
                    ...state,
                    favList : state.favList.filter(fav => fav.id !== action.payload)
                }
        default:
            return state;
    }
}

const initialState = {
    favList: localStorage.getItem("favList") ? JSON.parse(localStorage.getItem("favList")): []
}

const FavContext = (props) => {

    const [state, dispatch] = useReducer(favReducer, initialState)

    const favHandler = (character) => {
        dispatch({ type: "ADD_TO_FAV", payload: character })
    }
    const favDeleteHandler = (id) => {
        dispatch({ type: "DELETE_FAV", payload: id })
    }

useEffect(() => {
    localStorage.setItem("favList", JSON.stringify(state.favList))
},[state])


    return (
        <Fav.Provider value={{
            favHandler,
            favList : state.favList,
            favDeleteHandler
        }}>
            {props.children}
        </Fav.Provider>
    )
}

export default FavContext