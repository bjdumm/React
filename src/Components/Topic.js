import React from 'react';
import { Link } from 'react-router-dom';

import '../CSS/Topic.css';

class Topic extends React.Component {
    
    render() {
        return (
            <div class="component">
                <h4>{this.props.title}</h4>
                <img src={this.props.im} alt="img" />
                <Link to={this.props.path}>{this.props.title}</Link>
            </div>
        );
    }
}

export default Topic;