import React from 'react';


class Test extends React.Component {
    
    render() {
        return (
            <div class="component">
                <p>{this.props.title}</p>
                <a href="../public/Info.html">Link to component {this.props.title}</a>
            </div>
        );
    }
}

export default Test;