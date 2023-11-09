
import './App.css';
import {Routes , Route} from 'react-router-dom';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Confirmed from './Pages/Confirmed';

function App() {
  return (
    <div className="App">
       <main>  
      <Routes>
        
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/confirmbookings' element={<Confirmed/>}/>
      </Routes>
     </main>
    </div>
  );
}

export default App;
