import React from "react";
import { useState, useEffect } from 'react';
// import '../Rank/Rank.css'

const Rank = ({result}) => {
    const [loadedResult, setLoadedResult] = useState("");
    useEffect(() => {
        if(result){
            setLoadedResult(result.results[0])
        }       
      }, [result]);
    


    return(
        <div>
            <div className="white f3">
                {loadedResult && 'The picture looks like a...'}  
                <h1>{loadedResult.name}</h1>     
            </div>
            <div className="white f1">
                {loadedResult && `Accuracy %${Math.round(Number(loadedResult.value) * 100)}`}          
            </div>
        </div>
    )
}

export default Rank;