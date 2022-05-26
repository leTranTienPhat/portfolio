import { useState } from 'react';
import './App.scss';
import './particle.scss'
import Footer from './components/containers/footer/Footer';
import Header from './components/containers/header/Header';
import Hero from './components/containers/hero/Hero';
import UpdatedNavigation from './components/containers/updatedNavigation/UpdatedNavigation';
import Projects from './components/containers/projects/Projects';
import About from './components/containers/about/About';
import SplitSection from './components/reusable-components/splitSection/SplitSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLayerGroup
} from '@fortawesome/free-solid-svg-icons'
import { useInView } from 'react-intersection-observer';

function App() {
  const [lightMode, setLightMode] = useState(false)
  const [ref, inView, entry] = useInView()
  const changeTheme = () => {
    setLightMode(!lightMode)
    console.log(entry)
  }

  return (
    <div className={`App ${lightMode ? "grid-bg ba-grid anim" : "dark page-bg animation-wrapper"} `}>
      {!lightMode &&
        <>
          <div className="particle particle-1 " />
          <div className="particle particle-2 " />
        </>
      }
      <button className={`toggle-theme-btn ${lightMode && "light-mode"}`} onClick={changeTheme}>
        <FontAwesomeIcon icon={faLayerGroup} className="toogle-theme-icon" />
      </button>
      <div className={`${lightMode && "inner"} `}>
        <Header />
        <UpdatedNavigation />
        <Hero />
        <SplitSection value="Projects" />
        <Projects />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;
