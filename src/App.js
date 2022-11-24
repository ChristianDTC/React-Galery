import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Naruto1 from './components/Naruto1';
import Naruto2 from './components/Naruto2';
import Naruto3 from './components/Naruto3';
import Naruto4 from './components/Naruto4';
import Naruto5 from './components/Naruto5';
import Naruto6 from './components/Naruto6';
import Navegacion from './components/Navegacion';


function App() {
  return (
    <Router>

      <div className='container'>
        <h1>Galeria</h1>
      </div>
      <Navegacion />
      <Routes>
        <Route path='/Naruto1' component={Naruto1} />
        <Route path='/Naruto2' component={Naruto2} />
        <Route path='/Naruto3' component={Naruto3} />
        <Route path='/Naruto4' component={Naruto4} />
        <Route path='/Naruto5' component={Naruto5} />
        <Route path='/Naruto6' component={Naruto6} />
      </Routes>

          

    </Router>
    
  );
}

export default App;
