import React, {Component, Fragment} from "react"
import ListItem from "./item"
import store from "./store/index"
import {change_key,init} from "./store/actionCreators"
import axios from "axios"
class TodoList extends Component {
    constructor(props) {
        super(props)
        this.changeKey = this.changeKey.bind(this);
        this.addList = this.addList.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleStoreChange=this.handleStoreChange.bind(this)
        this.state = store.getState()
        store.subscribe(this.handleStoreChange)
    }

    componentDidMount() {
        axios.get("./list.json").then(({data})=>{
            store.dispatch(init(data))
        })

    }

    handleStoreChange() {
        this.setState(store.getState())
    }

    changeKey(e) {
        // const key=this.input.value;
        // this.setState((pre)=>{
        //   return{
        //       key:key
        //   }
        // })


        store.dispatch(change_key(e.target.value))
    }

    addList() {
        // this.setState((pre) => {
        //     return {
        //         list: [...pre.list, {value: pre.key}],
        //         key: " "
        //     }
        // })
        if(!this.state.key) return;
        const action = {
            type: "change_list",
            value: this.state.key
        };

        store.dispatch(action)
    }

    handleClick() {
        console.log("haha")
    }

    render() {
        return (
            <Fragment>
                <div>
                    <input
                        ref={(input) => {
                            this.input = input
                        }}
                        value={this.state.key}
                        onChange={this.changeKey} type="text"/>
                    <button onClick={this.addList}>add</button>
                </div>
                <div>
                    <ul>
                        {
                            this.state.list.map(item => {
                                return (
                                    <ListItem
                                        value={item.value}
                                        key={item.value}
                                        testClick={this.handleClick}>
                                    </ListItem>
                                )
                            })
                        }
                    </ul>
                </div>
            </Fragment>

        )
    }
}

export default TodoList