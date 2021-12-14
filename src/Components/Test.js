import React from 'react';
import { Link, } from 'react-router-dom';


class Test extends React.Component {
    
    render() {
        return (
            <div class="component">
                <p>{this.props.title}</p>
                <Link to={this.props.path}>{this.props.title}}</Link>
            </div>
        );
    }
}

export default Test;