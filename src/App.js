import './App.css';
import AboutUs from './components/Home/AboutUs';
import HowItWorks from './components/Home/HowItWorks';
import StartSection from './components/Home/StartSection';
import Header from './components/Layout/Header';
import Packages from './components/Home/Packages';
import MapSection from './components/Home/MapSection';
import Subscription from './components/Home/Subscription';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <div className="escape-store">
      <div className='blue-background'>
        <Header />
        <StartSection />
      </div>
      <HowItWorks />
      <AboutUs />
      <div className='blue-background'>
        <Packages />
      </div>
      <MapSection />
      <Subscription />
      <Footer />
    </div>
  );
}

export default App;
