import './App.css';

import Home from './pages/Home/Home';

import Login from './pages/Authentication/Login';
import Registration from './pages/Authentication/Registration';
import ForgotPass from './pages/Authentication/ForgotPass';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (

    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>  
    </div>

  );
}

export default App;
