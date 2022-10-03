import React from "react";
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './logo.css'

const Logo = () => {
    return (
 
        <Tilt className='ma4 mt0 br2 shadow-2'>
            <div style={{ height: '100%', cursor: "pointer"}}>
                <img style={{ height: '100%'}} src={brain} alt='brain'/>
            </div>
        </Tilt>
   
    );
}

export default Logo