import { useState } from 'react';
import './App.scss';
import './particle.scss'
import './themes.scss'
import Footer from './components/containers/footer/Footer';
import Header from './components/containers/header/Header';
import Hero from './components/containers/hero/Hero';
import UpdatedNavigation from './components/containers/updatedNavigation/UpdatedNavigation';
import Projects from './components/containers/projects/Projects';
import About from './components/containers/about/About';
import SplitSection from './components/reusable-components/splitSection/SplitSection';
import { useInView } from 'react-intersection-observer';
// import Modal from './components/modal/Modal';

function App() {
  const [theme, setTheme] = useState("red-theme")
  const [showThemeOpt, setShowThemeOpt] = useState(false)
  // const [showModal, setShowModal] = useState(true)
  const [heroRef, heroInView] = useInView()
  const [projectsRef, projectsInView] = useInView()
  const [skillsRef, skillsInView] = useInView()
  const [contactRef, contactInView] = useInView()

  const changeTheme = (theme: string) => {
    setTheme(theme)
  }
  const showThemeOptions = () => {
    setShowThemeOpt(true)
  }
  const hideThemeOptions = () => {
    setShowThemeOpt(false)
  }
  // const handleCloseModal = () => {
  //   setShowModal(false)
  // }
  // const handleOpenModal = () => {
  //   setShowModal(true)
  // }

  return (
    <div className={`App ${theme === 'dark-theme' ? "dark-theme page-bg animation-wrapper" : `grid-bg ba-grid anim ${theme}`}`}
    >
      {/* {showModal && <Modal handleCloseModal={handleCloseModal} />} */}
      <div className="theme-selection-container" onMouseEnter={showThemeOptions} onMouseLeave={hideThemeOptions}>
        Select Theme
        {showThemeOpt &&
          <div className="theme-options">
            <button className="theme-option-btn red-opt" onClick={() => changeTheme('red-theme')}>
            </button>
            <button className="theme-option-btn blue-opt" onClick={() => changeTheme('blue-theme')}>
            </button>
            <button className="theme-option-btn green-opt" onClick={() => changeTheme('green-theme')}>
            </button>
            <button className="theme-option-btn black-opt" onClick={() => changeTheme('dark-theme')}>
            </button>
          </div>}
      </div>
      <div className="particle particle-1 " />
      <div className="particle particle-2 " />
      <Header />
      <UpdatedNavigation heroInView={heroInView} projectsInView={projectsInView} skillsInView={skillsInView} contactInView={contactInView} />
      <Hero ref={heroRef} />
      <SplitSection value="Projects" />
      <Projects ref={projectsRef} />
      <About ref={skillsRef} />
      <Footer ref={contactRef} />
    </div>
  );
}

export default App;
