import { createContext,useReducer } from "react";

export const themeContext = createContext();

const initialState = {darkMode:true}


const ThemeReducer = (state,action)=>{

switch(action.type){

    case 'toggle':return {darkMode:  !state.darkMode};

    default: return state;
}
}
export const Themeprovider =(props)=>{
    const [state,dispatch] = useReducer(ThemeReducer,initialState);
    return(
        <themeContext.Provider value={{state,dispatch}}>
            {props.children}
        </themeContext.Provider>

    )
}
