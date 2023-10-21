import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Jobs from './Components/Jobs/Jobs';

function App() {
  return (
    <div className=''>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/Jobs' element={<Jobs />} />
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
