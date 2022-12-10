import './App.css';
import Navigation from './components/Navigation/Navigation'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Particles from './components/Particles/Particles'
import ImageCard from './components/ImageCard/ImageCard';
import { useState} from 'react';
// import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import { useHttpClient } from './hooks/http-hook';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';

function App() {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedResult, setLoadedResult] = useState();
  const [route , setRoute] = useState('signin');
  const [signin , setSignin] = useState('false');
  const [input, setInput] = useState('');
  const [url, setUrl] = useState('');

  const onInputChange = (event) => {
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

  const onRouteChange = (route) => {
    setRoute(route); 
    if (route === 'home') {
      setSignin('true')
    } else {
      setSignin('false')
    }
  }

  return (
    <div className="App">
      <Navigation onRouteChange={onRouteChange} signin={signin}/>
      
      {route === 'signin' ?
        <Signin onRouteChange={onRouteChange}/> : route === 'register'  ?
        <Register onRouteChange={onRouteChange}/> :
        <>
        <ImageLinkForm onInputChange={onInputChange} onButtonSubmit={onButtonSubmit} />   
        <ImageCard url={url} result={loadedResult} /> 
        </>        
      }
      <Particles id="tsparticles" />
    </div>
  );
}

export default App;
