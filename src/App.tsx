import { useState } from 'react';
import './App.scss';
import './particle.scss'
import './lightTheme.scss'
import Footer from './components/containers/footer/Footer';
import Header from './components/containers/header/Header';
import Hero from './components/containers/hero/Hero';
import UpdatedNavigation from './components/containers/updatedNavigation/UpdatedNavigation';
import Projects from './components/containers/projects/Projects';
import About from './components/containers/about/About';
import SplitSection from './components/reusable-components/splitSection/SplitSection';
import { useInView } from 'react-intersection-observer';

function App() {
  const [theme, setTheme] = useState("dark-theme")
  const [showThemeOpt, setShowThemeOpt] = useState(false)
  const { ref: heroRef, inView: heroInView } = useInView()
  const { ref: projectsRef, inView: projectsInView } = useInView()
  const { ref: skillsRef, inView: skillsInView } = useInView()
  const { ref: contactRef, inView: contactInView } = useInView()

  const changeTheme = (theme: string) => {
    setTheme(theme)
  }
  const showThemeOptions = () => {
    setShowThemeOpt(true)
  }
  const hideThemeOptions = () => {
    setShowThemeOpt(false)
  }
  return (
    <div className={`App ${theme === 'dark-theme' ? "dark-theme page-bg animation-wrapper" : `grid-bg ba-grid anim ${theme}`} `}
    >
      <div className="theme-selection-container" onMouseEnter={showThemeOptions} onMouseLeave={hideThemeOptions}>
        Select Theme
        {showThemeOpt &&
          <div className="theme-options">
            <button className="theme-option-btn black-opt" onClick={() => changeTheme('dark-theme')}>
            </button>
            <button className="theme-option-btn pink-opt" onClick={() => changeTheme('pink-theme')}>
            </button>
            <button className="theme-option-btn blue-opt" onClick={() => changeTheme('blue-theme')}>
            </button>
            <button className="theme-option-btn green-opt" onClick={() => changeTheme('green-theme')}>
            </button>
          </div>}

      </div>
      {theme === 'dark-theme' &&
        <>
          <div className="particle particle-1 " />
          <div className="particle particle-2 " />
        </>
      }
      <div className={`${theme !== 'dark-theme' && "inner"} `}>
        <Header />
        <UpdatedNavigation heroInView={heroInView} projectsInView={projectsInView} skillsInView={skillsInView} contactInView={contactInView} />
        <Hero ref={heroRef} />
        <SplitSection value="Projects" />
        <Projects ref={projectsRef} />
        <About ref={skillsRef} />
        <Footer ref={contactRef} />
      </div>
    </div>
  );
}

export default App;
