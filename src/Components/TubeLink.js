import React from "react";


export default class TubeLink extends React.Component {
    render() {
        return( 
            <div style={{backgroundColor:"whitesmoke"}}>
                <h4>{this.props.name}</h4>
                <a href={this.props.url} target="_blank"><img src={this.props.img} alt="Math of GR" /></a>
            </div>
        );
    }
}