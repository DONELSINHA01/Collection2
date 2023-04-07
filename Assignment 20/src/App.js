
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import { useContext } from 'react';
import { AuthContext } from './Components/Context';

function App() {
    const {isloggedin} = useContext(AuthContext);
    return(
      <div className='App'>

      {isloggedin ? <Home/>:<Login/>}
      </div>
    );
    
}

export default App;
