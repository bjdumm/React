import React from 'react';
import '../CSS/compprog.css';
import TubeLink from '../Components/TubeLink';
import cp1 from '../Assets/Videos/cp1.png';
import cp2 from '../Assets/Videos/cp2.png';


class CompProg extends React.Component {
    render() {
        return (
            <body>
                <h1 style={{color:"green"}}>Computer Programming</h1>
                <hr></hr>
                <div>
                    <h2>Tutorials</h2>
                    <div class="section">
                        
                

                        <div>
                        <h2>Data Structures and Algorithms</h2>
                        <TubeLink name="C Made Simple" url="https://www.youtube.com/playlist?list=PLfqABt5AS4FmErobw8YyTwXDUE5nPH5lH" img={cp1}/>
                        <TubeLink name="C Made Simple" url="https://www.youtube.com/playlist?list=PLfqABt5AS4FmErobw8YyTwXDUE5nPH5lH" img={cp1}/>
                        </div>

                        <div>
                        <h2>Networking</h2>
                        <TubeLink name="C Made Simple" url="https://www.youtube.com/playlist?list=PLfqABt5AS4FmErobw8YyTwXDUE5nPH5lH" img={cp1}/>
                        <TubeLink name="C Made Simple" url="https://www.youtube.com/playlist?list=PLfqABt5AS4FmErobw8YyTwXDUE5nPH5lH" img={cp1}/>
                        </div>

                        <div>
                        <h2>Graphics</h2>
                        <TubeLink name="C Made Simple" url="https://www.youtube.com/playlist?list=PLfqABt5AS4FmErobw8YyTwXDUE5nPH5lH" img={cp1}/>
                        <TubeLink name="C Made Simple" url="https://www.youtube.com/playlist?list=PLfqABt5AS4FmErobw8YyTwXDUE5nPH5lH" img={cp1}/>
                        </div>
                        
                        
                    </div>
                    <hr></hr>
                </div>

                <div>
                <h2>Language Tutorials</h2>
                    <div class="section">
                        <TubeLink name="C Made Simple" url="https://www.youtube.com/playlist?list=PLfqABt5AS4FmErobw8YyTwXDUE5nPH5lH" img={cp1}/>
                        <TubeLink name="C Made Simple" url="https://www.youtube.com/playlist?list=PLfqABt5AS4FmErobw8YyTwXDUE5nPH5lH" img={cp1}/>
                    </div>
                    <hr></hr>
                </div>

                <div>
                    <h2>Documentation</h2>
                    <div class="section">
                    <TubeLink name="MDN Docs" url="https://developer.mozilla.org/en-US/docs/Web" img={cp2}/>    
                    </div>
                </div>
                
            </body>
        );
    }
}

export default CompProg;