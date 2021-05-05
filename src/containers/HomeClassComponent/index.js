import React from 'react';
import Forms from "../../components/Forms";


class HomeClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            count: 0,
            name: ''
        }
    }

    componentDidMount() {

    }

    handleSave = (event)=> {
        alert('Name' +  this.state.name)
        event.preventDefault();
    }
    handleChangeName = (event) => {
        this.setState({name: event.target.value})
    }


    render(){
        return(
            <div>Hello classs component {this.state.count} {this.props?.name}
            <button onClick={() => this.setState({count: this.state.count + 1})}>click</button>

                <Forms handleSave={this.handleSave} text={this.name} handleChangeText={this.handleChangeName}/>
            </div>
        )
    }
}

export default HomeClassComponent;