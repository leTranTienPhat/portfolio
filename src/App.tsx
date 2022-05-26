import './App.scss';
import Footer from './components/containers/footer/Footer';
import Header from './components/containers/header/Header';
import Hero from './components/containers/hero/Hero';
import LandingPage from './components/containers/landing-page/LandingPage';
import Navigation from './components/containers/navigation/Navigation';
import UpdatedNavigation from './components/containers/updatedNavigation/UpdatedNavigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      {/* <UpdatedNavigation /> */}
      <Header />
      <Hero />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
