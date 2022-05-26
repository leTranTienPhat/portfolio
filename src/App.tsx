import { useState } from 'react';
import './App.scss';
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
    <div className={`App ${lightMode ? "grid-bg ba-grid anim" : "dark"}`}>
      <button className="toggle-theme-btn" onClick={changeTheme}>Change theme</button>

      {/* <Navigation /> */}
      <Header />
      <UpdatedNavigation />
      <Hero />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
