import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SecondDiv from './components/landingpage/secondDiv';
import ThirdDiv from './components/landingpage/thirdDiv';
import Carousel from './components/landingpage/third2';
import FourthDiv from './components/landingpage/FourthDiv';
import FifthDiv from './components/landingpage/FifthDiv';
import SixthDiv from './components/landingpage/SixthDiv';
import Footer from './components/landingpage/Footer';
import Rabbit from './components/animals/rabbit';

function App() {
  return (
    <div className="App">
      <Home/>
      {/* <Homearyan/> */}
      {/* <SecondDiv/>
      <FirstDiv/>
      <ThirdDiv/>
      <Carousel/>
      <FourthDiv/>
      <FifthDiv/>
      <SixthDiv/>
      <Footer/>
      <Rabbit/> */}
    </div>
  );
}

export default App;
