import Navbar from './Home/Navbar';
import './App.css';
import Slide from './Home/Slide';
import AboutUs from './Home/AboutUs';
import Courses from './Home/Courses';
import Video from './Home/Video';
import Services from './Home/Services';
import Footer from './Home/Footer';

function App() {
  return (
    <div className="App">
      <div className='Home'>
        <Navbar/>
        <Video/>
        <AboutUs/>
        <Slide/>
        <Courses/>
        <Services/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
