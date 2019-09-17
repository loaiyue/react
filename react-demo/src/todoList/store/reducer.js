const defaultState={
    key: "",
    list: [],
};

export default (state=defaultState,action)=>{
    const newState=JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case "change_key":
            newState.key=action.value;
            return newState;
        case "change_list":
            newState.list=[...state.list,{value:action.value}];
            newState.key="";
            return newState;
        case "init":
            newState.key=action.value.key;
            newState.list=action.value.list;
            return newState

        default:
            return state
    }
}