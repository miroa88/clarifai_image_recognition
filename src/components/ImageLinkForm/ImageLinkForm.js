import React from "react";
import './ImageLinkForm.css'


const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <h4 className="f3">
                {'Machine Learning Image Recognition Application'}
            </h4>
            <div className='center'>
                <div className=" form pa4 br3 shadow-5 center">
                    <input className="f4 pa2 w-70 center" type='text' onChange={onInputChange}/>
                    <div style={{width:'4px'}}></div>
                    <button onClick={onButtonSubmit} className="w-30 grow f4 link ph3 pv2 dib white bg-light bg-purple">Detect</button>
                </div>

            </div>
        </div>
 
    );
}

export default ImageLinkForm