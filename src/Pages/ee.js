import React from 'react';
import '../CSS/relativity.css';
import TubeLink from '../Components/TubeLink';
import ee1 from '../Assets/Videos/ee1.png';
import ee2 from '../Assets/Videos/ee2.png';
//import ee3 from '../Assets/Videos/ee3.png';
//import ee4 from '../Assets/Videos/ee4.png';

class EE extends React.Component {
    render() {
        return (
            <body>
                <h1 style={{color:"green"}}>Electrical Engineering</h1>
                <hr></hr>
                <div>
                    <h2>YouTube</h2>
                    <div style={{display:"flex", justifyContent: "space-around"}}>
                        <TubeLink name="DSP" url="https://www.youtube.com/playlist?list=PLuh62Q4Sv7BUSzx5Jr8Wrxxn-U10qG1et" img={ee2}/>
                        
                        
                        <TubeLink name="Eugene" url="https://www.youtube.com/playlist?list=PLkyBCj4JhHt-4PnnwpbG-ZKV_EjX03DX8" img={ee1}/>
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

export default EE;