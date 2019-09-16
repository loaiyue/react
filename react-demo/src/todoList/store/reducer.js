const defaultState={
    key: "",
    list: [
        {
            value: "zz"
        },
        {
            value: "jj"
        }
    ],
}



export default (state=defaultState,action)=>{
    const newState=JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case "change_key":
            newState.key=action.value;
            return newState;
        case "change_list":
            newState.list=[...state.list,{value:action.value}];
            newState.key="";
            return newState
    }
    console.log(state,action)
  return state
}