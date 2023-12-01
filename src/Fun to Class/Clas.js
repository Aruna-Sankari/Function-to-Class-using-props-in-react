import React from 'react'
import { Component } from 'react'
class Clas extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.n}</h1>
                <h3>{this.props.name}</h3>
                <h5>{this.props.o.b}</h5>
            </div>
        )
    }
}
export default Clas;