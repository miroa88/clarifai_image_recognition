import './App.css';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Particles from './components/Particles/Particles';
import ImageCard from './components/ImageCard/ImageCard';
import { useState} from 'react';
import { useHttpClient } from './hooks/http-hook';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Rank from './components/Rank/Rank';

function App() {
  const { sendRequest} = useHttpClient();
  const [loadedResult, setLoadedResult] = useState({});
  const [route , setRoute] = useState('signin');
  const [signin , setSignin] = useState('false');
  const [input, setInput] = useState('');
  const [url, setUrl] = useState('');
  const [user, setUser] = useState({id:"", name:"", email:"",entries:0,joined:""});
 
  const resetAllStates = () => {
    setUser({id:"", name:"", email:"",entries:0,joined:""});
    setUrl("");
    setInput("");
    setSignin("false");
    setRoute("signin");
    setLoadedResult({});
  }

  const loadUser = (userObj) => {
    setUser({
      id:userObj.id, 
      name:userObj.name, 
      email:userObj.email,
      entries:userObj.entries,
      joined:userObj.joined
    });
  }

  const onInputChange = (event) => {
    setInput(event.target.value)
  }

  const onButtonSubmit = async (event) => {
    event.preventDefault();
    if (input) {
      setUrl(input)
      try {
        let res = await sendRequest(
          'http://localhost:8080/predict',
          'POST',
          JSON.stringify({
            imageUrl: input,
          }),
          { 'Content-Type': 'application/json' }
        );
        if (res) {
          setLoadedResult(res);
          fetch("http://localhost:8080/image", {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: user.id
            })
          })
          .then(response=> response.json())
          .then(data => {
            if (data) {            
              let cloneUser = {...user};
              cloneUser.entries = data.entries;
              setUser(cloneUser);
            }
          })
        }
      } catch (err) {}
    }
  }

  const onRouteChange = (route) => {
    setRoute(route); 
    if (route === 'home') {
      setSignin('true')
    } else {
      setSignin('false');
    }
  }
  
  console.log("user", user);
  
  return (
    <div className="App">
      <Navigation onRouteChange={onRouteChange} signin={signin} resetAllStates={resetAllStates}/>
      
      {route === 'signin' ?
        <Signin onRouteChange={onRouteChange} loadUser={loadUser}/> : route === 'register'  ?
        <Register onRouteChange={onRouteChange} loadUser={loadUser}/> :
        <>
        <Rank name={user.name} entries={user.entries}/>
        <ImageLinkForm onInputChange={onInputChange} onButtonSubmit={onButtonSubmit} />   
        <ImageCard url={url} result={loadedResult} /> 
        </>        
      }
      <Particles id="tsparticles" />
    </div>
  );
}

export default App;
