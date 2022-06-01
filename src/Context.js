import {createContext, useReducer} from 'react'


export const themeContext= createContext();


const initialState={darkMode : false};

 const themeReducer = (state, action)=>{// Reducer having these two parameter=>  (prop and action)
    switch(action.type){
        case 'toggle':
            return {darkMode : !state.darkMode};
            default:
                return state;
    }
 }; 
 export const ThemeProvider = (props) =>{
     const[state, dispatch] = useReducer(themeReducer,initialState);
     return(
         <themeContext.Provider value={{state, dispatch}}>
             {props.children}
         </themeContext.Provider>
     );

     
 };