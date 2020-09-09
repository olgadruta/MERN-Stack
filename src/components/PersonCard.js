import React, {Component} from 'react';

class PersonCard extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.lastname}, {this.props.firstname} </h1>
                <p>Age:{this.props.age}  </p>
                Hair Color: {this.props.haircolor}
                {/* <h1>{this.props.header} </h1>
                {this.props.children} */}
            </div>
        )
    }
}
export default PersonCard;