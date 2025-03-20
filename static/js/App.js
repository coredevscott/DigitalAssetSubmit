import './App.css';
import About from './components/About';
import AboutTwo from './components/AboutTwo';
import Gallery from './components/Gallery';
// import Details from './components/Details';
// import Gallery from './components/Gallery';
import Hero from './components/Hero';
// import TokenomicsData from './components/TokenomicsData';
// import TokenomicsMain from './components/TokenomicsMain';
// import FairLaunchSection from './components/FairLaunchSection';
import Nav from './components/Nav';
import Slider from './components/Slider';

function App() {
  return (
    <div className='max-w-[100vw] custom-cursor overflow-clip'>
      <Nav/>
      <Hero/>
      <Slider/>
      <About/>
      <Gallery/>
      <AboutTwo/>
      {/* <Gallery/>
      <Details/>
      <TokenomicsMain/>
      <TokenomicsData/>
      <FairLaunchSection/> */}
    </div>
  );
}

export default App;
