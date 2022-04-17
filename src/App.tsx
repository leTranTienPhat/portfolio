import './App.scss';
import Footer from './components/containers/footer/Footer';
import Header from './components/containers/header/Header';
import Hero from './components/containers/hero/Hero';
import LandingPage from './components/containers/landing-page/LandingPage';
import Navigation from './components/containers/navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Hero />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
