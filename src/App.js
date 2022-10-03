import './App.css';
import Navigation from './components/Navigation/Navigation'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank'
import Particles from './components/Particles/Particles'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import { useState, useEffect } from 'react';

import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import { useHttpClient } from './hooks/http-hook';

function App() {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
const [loadedResult, setLoadedResult] = useState();
  
  const [input, setInput] = useState('');
  const [url, setUrl] = useState('');

  const onInputChange = (event) => {
    console.log(event.target.value)
    setInput(event.target.value)
  }

  const onButtonSubmit = async (event) => {
    event.preventDefault();
    setUrl(input)
    try {
      setLoadedResult(await sendRequest(
        'http://localhost:8080/predict',
        'POST',
        JSON.stringify({
          imageUrl: input,
        }),
        { 'Content-Type': 'application/json' }
      ));
    } catch (err) {}
  }

  useEffect(() => {
    if(loadedResult){
      console.log(loadedResult.results[0])
    }
   
  }, [loadedResult]);


  return (
    <div className="App">
      <Navigation />
      <Rank result={loadedResult}/>
      <ImageLinkForm onInputChange={onInputChange} onButtonSubmit={onButtonSubmit}/>
      <FaceRecognition url={url}/>
      <Particles id="tsparticles" />
    </div>
  );
}

export default App;
