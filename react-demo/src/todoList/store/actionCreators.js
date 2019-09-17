import Axios from "axios"
export const change_key=(value)=>{
    return{
        type:"change_key",
        value
    }
};


export const init=()=>{
    return (dispatch)=>{
        Axios.get("./list.json").then(({data})=>{
            // store.dispatch(init(data))
            const action={
                type: "init",
                value: data
            };
            dispatch(action)
        })
    }
};