
import React, {Component} from 'react'

class AddTodo extends Component {

state ={
content: ''
}
handleChange = (e) => {
this.setState({
    content: e.target.value
})
}
handleSubmit = (e) =>{
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
        content: ''
    })
}
render(){
    return(
        <div>
            <form>
            <input type="text" onChange={this.handleChange} value={this.state.content}/>
            <br/>
                <input type="button" value ="Add new Todo"  onClick={this.handleSubmit} className="btn btn-success"/>
                
            </form>
        </div>
    )
}
}
export default AddTodo