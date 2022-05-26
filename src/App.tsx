import { useState } from 'react';
import './App.scss';
import './particle.scss'
import Footer from './components/containers/footer/Footer';
import Header from './components/containers/header/Header';
import Hero from './components/containers/hero/Hero';
import LandingPage from './components/containers/landing-page/LandingPage';
import Navigation from './components/containers/navigation/Navigation';
import UpdatedNavigation from './components/containers/updatedNavigation/UpdatedNavigation';

function App() {
  const [lightMode, setLightMode] = useState(false)

  const changeTheme = () => {
    setLightMode(!lightMode)
  }

  return (

    <div className={`App ${lightMode ? "grid-bg ba-grid anim" : "dark page-bg animation-wrapper"} `}>
      {!lightMode &&
        <>
          <div className="particle particle-1 " />
          <div className="particle particle-2 " />
        </>
      }


      <button className="toggle-theme-btn" onClick={changeTheme}>Change theme</button>
      <div className={`${lightMode && "inner"} `}>
        {/* <Navigation /> */}
        <Header />
        <UpdatedNavigation />
        <Hero />
        <LandingPage />
        <Footer />
      </div>

    </div>
  );
}

export default App;
