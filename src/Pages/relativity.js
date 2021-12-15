import React from 'react';
import './relativity.css';
import TubeLink from '../Components/TubeLink';
import gr1 from '../Assets/Videos/gr1.png';
import gr2 from '../Assets/Videos/gr2.png';
import gr3 from '../Assets/Videos/gr3.png';
import gr4 from '../Assets/Videos/gr4.png';

class Relativity extends React.Component {
    render() {
        return (
            <body>
                <h1 style={{color:"green"}}>General Relativity</h1>
                <hr></hr>
                <div>
                    <h2>YouTube</h2>
                    <div style={{display:"flex", justifyContent: "space-around"}}>
                        <TubeLink name="SciClic" url="https://www.youtube.com/playlist?list=PLu7cY2CPiRjVY-VaUZ69bXHZr5QslKbzo" img={gr1}/>
                        <TubeLink name="MIT-8.962" url="https://www.youtube.com/playlist?list=PLUl4u3cNGP629n_3fX7HmKKgin_rqGzbx" img={gr2}/>
                        <TubeLink name="Susskind" url="https://www.youtube.com/playlist?list=PLpGHT1n4-mAvcXwzOIz3dHnGZaQP1LEib" img={gr3}/>
                        <TubeLink name="Eugene" url="https://www.youtube.com/playlist?list=PLkyBCj4JhHt_pz8HUG7rbMeKFsStae10k" img={gr4}/>
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

export default Relativity;