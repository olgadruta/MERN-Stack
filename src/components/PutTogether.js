import React, {Component} from 'react';

class NewComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            clickCount: this.props.age
        }
    }

    handleClick = () => {
        this.setState({
            clickCount: this.state.clickCount +1
        })
    }

    render(){
        return(
            <div>
                <h1>{this.props.lastname}, {this.props.firstname} </h1>
                <p>Age: {this.state.clickCount}  </p>
                <p>Hair Color: {this.props.haircolor}</p>
                <button onClick={this.handleClick}> Birthday Button for {this.props.firstname} </button>
            </div>
        )
    }
}
export default NewComponent;
