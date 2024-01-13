import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Blog from './Blog/Blog';
import DroneRepair from './DroneRepair/DroneRepair';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path='/dronerepair' element={<DroneRepair/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
