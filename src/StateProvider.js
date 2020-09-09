import React , { createContext , useContext,useReducer} from 'react'

//creating a data layer so that data can be push or pull from data layer
export const StateContext = createContext()

//creating a provider
export const StateProvider = ({reducer,initialState,children})=> (
    <StateContext.Provider value ={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)
export const useStateValue = () => useContext(StateContext)

// children will be my app which is wrappedinside the provider
//can store anything to data and it will be availble globaly to use anywhere
//reducer-it will listen to any action that will fireup into data layer
