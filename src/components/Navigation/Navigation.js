import React from "react";
import Logo from '../Logo/Logo'
import '../Logo/logo.css'
const Navigation = () => {

    return(
    <nav style={{}}>  
        <div style={{'display': 'grid', 'gridTemplateColumns': '1fr 1fr', textAlign:'center'}} className='pa3'>
            <div style={{display: 'flex', justifyContent: 'flex-start', width: '170px', textAlign:'center'}}>
                <Logo />
            </div>
            <div className='f3 link dim black underline pa3 pointer ' style={{display: 'flex', justifyContent: 'flex-end'} }>
                <p className='ma2'>Sign out</p>
            </div>
        </div>  
    </nav>
    )
}

export default Navigation;