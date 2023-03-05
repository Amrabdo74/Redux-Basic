import { createStore } from "redux";


const initState ={value:0,setTogele:false};
const counterRedux =(state=initState,action)=>{
    if(action.type==="increase"){
        return {...state,value:state.value+action.payload}
    }
    if(action.type==="decrease"){
        return {...state,value:state.value-action.payload}
    }
    if(action.type==="toggle"){
        return {...state,setTogele: !state.setTogele}
    }
    return state
}
const store = createStore(counterRedux);

export default store;