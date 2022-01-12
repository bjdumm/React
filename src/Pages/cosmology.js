import React from 'react';
import '../CSS/relativity.css'
import TubeLink from '../Components/TubeLink';
import cosm1 from '../Assets/Videos/cosm1.png';

class Cosmology extends React.Component {
    render() {
        return (
            <body>
                <h1>Cosmology</h1>
                <hr></hr>
                <div>
                    <h2>YouTube</h2>
                    <div style={{display:"flex", justifyContent: "space-around"}}>
                        <TubeLink name="Susskind Cosmology" url="https://www.youtube.com/playlist?list=PLpGHT1n4-mAuVGJ2E1uF9GSwLsx7p1xtm" img={cosm1}/>
                        
                        
                        
                    </div>
                    <hr></hr>
                </div>
                <div>
                    <h2>Sites & Books</h2>
                    <div id="sites">
                    <a href="http://www.soulphysics.org/2008/06/get-started-learning-general-relativity/">Soul Physics</a>
                    </div>

                    
                    <hr></hr>
                </div>

                
                
            </body>
        );
    }
}

export default Cosmology;