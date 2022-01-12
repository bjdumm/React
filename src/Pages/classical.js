import React from 'react';
import '../CSS/relativity.css';
import TubeLink from '../Components/TubeLink';
import cmech1 from '../Assets/Videos/cmech1.png';


class Classical extends React.Component {
    render() {
        return (
            <body>
                <h1 style={{color:"green"}}>General Relativity</h1>
                <hr></hr>
                <div>
                    <h2>YouTube</h2>
                    <div style={{display:"flex", justifyContent: "space-around"}}>
                        <TubeLink name="DSP" url="https://www.youtube.com/playlist?list=PL47F408D36D4CF129" img={cmech1}/>
                        
                        
                        
                    </div>
                    <hr></hr>
                </div>
                <div>
                    <h2>Site Links</h2>
                    <hr></hr>
                </div>

                <div>
                    <h2>Books</h2>
                    <hr></hr>
                </div>
                
            </body>
        );
    }
}

export default Classical;