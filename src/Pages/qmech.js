import React from 'react';
import '../CSS/relativity.css';
import TubeLink from '../Components/TubeLink';
import qm1 from '../Assets/Videos/qm1.png';
import qm2 from '../Assets/Videos/qm2.png';
import qm3 from '../Assets/Videos/qm3.png';
import qm4 from '../Assets/Videos/qm4.png';
import qm5 from '../Assets/Videos/qm5.png';
import science from '../Assets/Videos/science.png';

class QMech extends React.Component {
    render() {
        return (
            <body>
                <h1 style={{color:"green"}}>Quantum Mechanics</h1>
                <hr></hr>
                <div>
                    <h2>YouTube</h2>
                    <div style={{display:"flex", justifyContent: "space-around"}}>
                        <TubeLink name="Susskind Particle Physics Lectures" url="https://www.youtube.com/playlist?list=PL4E35E60B6EF36216" img={qm1}/>
                        <TubeLink name="Theoretical Minimum Lectures" url="https://www.youtube.com/playlist?list=PL701CD168D02FF56F" img={qm2}/>
                        <TubeLink name="Sussking Quantum Entaglements" url="https://www.youtube.com/playlist?list=PLF1A950040024A1ED" img={qm3}/>
                        <TubeLink name="Quantum Mechanics - Susskind" url="https://www.youtube.com/playlist?list=PL84C10A9CB1D13841" img={qm4}/>
                        <TubeLink name="Advanced Quantum Mechanics" url="https://www.youtube.com/playlist?list=PL7Yaf7nQHP3B591m111lySw_FSqRTAbrj" img={qm5}/>
                        <TubeLink name="Ben Stortenbecker" url="https://www.youtube.com/playlist?list=PLNAP__qscnaDFZOEVX7lMdqkLGHA4OBmS" img={science}/>
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

export default QMech;