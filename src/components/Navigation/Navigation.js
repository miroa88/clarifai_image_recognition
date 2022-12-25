import React from "react";
import Logo from '../Logo/Logo';

const Navigation = ({onRouteChange, signin, resetAllStates}) => {

    return(
    <nav style={{}}>  
        <div style={{'display': 'grid', 'gridTemplateColumns': '1fr 1fr', textAlign:'center'}} className='pa3'>
            <div style={{display: 'flex', justifyContent: 'flex-start', width: '170px', textAlign:'center'}}>
                <Logo />
            </div>
            <div className='f3 link dim black underline pa3 pointer ' style={{display: 'flex', justifyContent: 'flex-end'} }>
                {signin==='false' ? (
                    <>             
                    <p onClick={ () => onRouteChange('signin')} className='ma2'>Sign In</p>
                    <p onClick={ () => onRouteChange('register')} className='ma2'>Register</p>
                    </>
                ): 
                <p onClick={ resetAllStates } className='ma2'>Sign Out</p>
                }
            </div>       
        </div>  
    </nav>
    )
}

export default Navigation;