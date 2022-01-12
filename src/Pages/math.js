import React from 'react';
import '../CSS/math.css';
import TubeLink from '../Components/TubeLink';
import math1 from '../Assets/Videos/math1.png';



class Math extends React.Component {
    render() {
        return (
            <body>
                <h1 style={{color:"green"}}>General Relativity</h1>
                <hr></hr>
                <div>
                    <h2>General Math</h2>
                    <div class="section">
                        <TubeLink name="Math Exposition" url="https://www.youtube.com/playlist?list=PLnQX-jgAF5pTkwtUuVpqS5tuWmJ-6ZM-Z" img={math1}/>
                        <TubeLink name="3B1B" url="https://www.youtube.com/playlist?list=PLuh62Q4Sv7BUSzx5Jr8Wrxxn-U10qG1et" img={math1}/>
                        <TubeLink name="DSP" url="https://www.youtube.com/playlist?list=PLuh62Q4Sv7BUSzx5Jr8Wrxxn-U10qG1et" img={math1}/>
                        <TubeLink name="DSP" url="https://www.youtube.com/playlist?list=PLuh62Q4Sv7BUSzx5Jr8Wrxxn-U10qG1et" img={math1}/>
                        
                         
                    </div>
                    <hr></hr>
                    <h2>Calculus/Differential Equations</h2>
                    <div class="section">
                        <TubeLink name="Math Exposition" url="https://www.youtube.com/playlist?list=PLnQX-jgAF5pTkwtUuVpqS5tuWmJ-6ZM-Z" img={math1}/>
                        <TubeLink name="3B1B" url="https://www.youtube.com/playlist?list=PLuh62Q4Sv7BUSzx5Jr8Wrxxn-U10qG1et" img={math1}/>
                        <TubeLink name="DSP" url="https://www.youtube.com/playlist?list=PLuh62Q4Sv7BUSzx5Jr8Wrxxn-U10qG1et" img={math1}/>
                        <TubeLink name="DSP" url="https://www.youtube.com/playlist?list=PLuh62Q4Sv7BUSzx5Jr8Wrxxn-U10qG1et" img={math1}/>
                        
                         
                    </div>

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

export default Math;