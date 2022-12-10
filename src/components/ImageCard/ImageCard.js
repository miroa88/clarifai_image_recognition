import React from "react";
import { useState, useEffect } from 'react';
import './ImageCard.css'

const ImageCard = ({result, url}) => {
    const [loadedResult, setLoadedResult] = useState("");
    const [loadedUrl, setLoadedUrl] = useState("");
    useEffect(() => {
        if(result){
            setLoadedResult(result.results)
        } 
        if(url){
            setLoadedUrl(url)
        }     
      }, [result, url]);

    return(
        <>
        { loadedResult&& (         
        <div className="mw9 center ph3-ns">
        <div className="cf ph2-ns">
            <div className="fl w-100 w-50-ns pa2">
            <div className="pv4">
                <img alt="" src={loadedUrl} width='auto' height='390px' />
            </div>
            </div>
            <div className="fl w-100 w-50-ns pa2">
                <div className="pa4">
                <div className="overflow-auto">
                    <table className="w-100 mw8" >
                    <thead>
                        <tr>
                        <th className="bb b--black-20  pb3 pr3">Name</th>
                        <th className="bb b--black-20  pb3 pr3">Value</th>
                        </tr>
                    </thead>
                    <tbody className="lh-copy">
                        <tr>
                        <td className="pv3 pr3 bb b--black-20">{loadedResult && loadedResult[0]['name']}</td>
                        <td className="pv3 pr3 bb b--black-20">{loadedResult && 
                            Math.round(Number(loadedResult[0]['value']) * 10000) / 10000}</td>
                        </tr>
                        <tr>
                        <td className="pv3 pr3 bb b--black-20">{loadedResult && loadedResult[1]['name']}</td>
                        <td className="pv3 pr3 bb b--black-20">{loadedResult && 
                            Math.round(Number(loadedResult[1]['value']) * 10000) / 10000}</td>
                        </tr>
                        <tr>
                        <td className="pv3 pr3 bb b--black-20">{loadedResult && loadedResult[2]['name']}</td>
                        <td className="pv3 pr3 bb b--black-20">{loadedResult && 
                            Math.round(Number(loadedResult[2]['value']) * 10000) / 10000}</td>
                        </tr>
                        <tr>
                        <td className="pv3 pr3 bb b--black-20">{loadedResult && loadedResult[3]['name']}</td>
                        <td className="pv3 pr3 bb b--black-20">{loadedResult && 
                            Math.round(Number(loadedResult[3]['value']) * 10000) / 10000}</td>
                        </tr>
                        <tr>
                        <td className="pv3 pr3 bb b--black-20">{loadedResult && loadedResult[4]['name']}</td>
                        <td className="pv3 pr3 bb b--black-20">{loadedResult && 
                            Math.round(Number(loadedResult[4]['value']) * 10000) / 10000}</td>
                        </tr>
                        <tr>
                        <td className="pv3 pr3 bb b--black-20">{loadedResult && loadedResult[5]['name']}</td>
                        <td className="pv3 pr3 bb b--black-20">{loadedResult && 
                            Math.round(Number(loadedResult[5]['value']) * 10000) / 10000}</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
            </div>
        </div>
        </div>
        )}     
        </>
    )
}

export default ImageCard;