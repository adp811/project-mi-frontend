import './App.css';

import Home from './pages/Home/Home';

import Login from './pages/Authentication/Login';
import Registration from './pages/Authentication/Registration';
import ForgotPass from './pages/Authentication/ForgotPass';
import Footer from './components/Root/Footer';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (

    <div className="App">
      <div className='App-content-wrap' >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/auth/login" element={<Login />} />
          <Route exact path="/auth/register" element={<Registration />} />
          <Route exact path="/auth/forgot" element={<ForgotPass />} />
        </Routes>
      </div>  

      <Footer />
      
    </div>

  );
}

export default App;
