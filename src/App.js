import Navbar from './Home/Navbar';
import './App.css';
import Slide from './Home/Slide';
import AboutUs from './Home/AboutUs';

function App() {
  return (
    <div className="App">
      <div className='Home'>
        <Navbar/>
        <Slide/>
        <AboutUs/>
      </div>
    </div>
  );
}

export default App;
