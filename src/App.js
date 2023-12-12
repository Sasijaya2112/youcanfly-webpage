import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import AerialBlog from './Blog/AerialBlog';
// import CounterClients from './Home/Counter/CounterClients';
// import CounterAerialFilm from './Home/Counter/CounterAerialFilm';
// import CounterProjects from './Home/Counter/CounterProjects';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/youcanfly-webpage" element={<Home />} />
          <Route path="/youcanfly-webpage/home" element={<Home />} />
          <Route path="/youcanfly-webpage/blog" element={<AerialBlog />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
