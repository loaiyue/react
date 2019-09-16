import React, {Component, Fragment} from "react"
import ListItem from "./item"
class TodoList extends Component {
    constructor(props) {
        super(props)

        this.changeKey=this.changeKey.bind(this);
        this.addList=this.addList.bind(this);
        this.handleClick=this.handleClick.bind(this);
        this.state = {
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
    }

    changeKey(e){
        const key=this.input.value;
        this.setState((pre)=>{
          return{
              key:key
          }
        })
    }
    addList(){
        this.setState((pre)=>{
            return{
                list:[...pre.list,{value:pre.key}],
                key:" "
            }
        })
    }
    handleClick(){
        console.log("haha")
    }
    render() {
        return (
            <Fragment>
                <div>
                    <input
                        ref={(input)=>{this.input=input}}
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