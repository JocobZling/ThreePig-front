import React from 'react';
import '../css/grid.css'
const WdfClassify = () =>{
    return(
        <div style={{}}>
            <ul id="hexGrid">
                <li className="hex"><a className="hexIn" href="#"> <img src="img/8.png" alt=""/>
                    <div style={{backgroundColor:"black"}}>
                        <h1>This is a title</h1>
                        <p>Some sample text about the article this hexagon leads to</p>
                    </div>
                </a></li>
                <li className="hex"><a className="hexIn" href="#"> <img src="img/8.png" alt=""/>
                    <h1>This is a title</h1>
                    <p>Some sample text about the article this hexagon leads to</p>
                </a></li> <li className="hex"><a className="hexIn" href="#"> <img src="img/8.png" alt=""/>
                <h1>This is a title</h1>
                <p>Some sample text about the article this hexagon leads to</p>
            </a></li>
                <li className="hex"><a className="hexIn" href="#"> <img src="img/8.png" alt=""/>
                    <h1>This is a title</h1>
                    <p>Some sample text about the article this hexagon leads to</p>
                </a></li>

                <li className="hex"><a className="hexIn" href="#"> <img src="img/1.png" alt=""/>
                    <h1>This is a title</h1>
                    <p>Some sample text about the article this hexagon leads to</p>
                </a></li>
                <li className="hex"><a className="hexIn" href="#"> <img src="img/2.png" alt=""/>
                    <h1>This is a title</h1>
                    <p>Some sample text about the article this hexagon leads to</p>
                </a></li>
            </ul>
        </div>
    )
}
export default WdfClassify