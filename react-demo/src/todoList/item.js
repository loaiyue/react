import React,{Component} from "react"
import PropTypes from 'prop-types';
class ListItem extends Component{
    constructor(props){
        super(props)

        this.handle_click=this.handle_click.bind(this)
    }
    handle_click(){
        this.props.testClick()
    }
    render() {
        return(
            <li onClick={this.handle_click}>
                {this.props.value}
                {this.props.name}
                </li>
        )
    }
}

ListItem.defaultProps={
    name:''
};
ListItem.propTypes={
    value:PropTypes.string,
    // name:PropTypes.isRequired
};

export default ListItem