import React, {useState} from 'react';
import { firebaseApp } from './config';
import { User } from 'firebase/auth';
import Login from './pages/Login';
import './App.css';
import Logo from './components/Logo';

const app = firebaseApp;

function App() {
  const [ user, setSignedInUser ] = useState(null as User | null) 
  return (
    <div className="App">
      <header className="App-header">
        <Logo/>
        My App
      </header>
      <Login setSignedInUser={setSignedInUser} user={user}/>
    </div>
  );
}

export default App;
