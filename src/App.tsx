import './App.css';
import Footer from './components/containers/footer/Footer';
import Header from './components/containers/header/Header';
import Hero from './components/containers/hero/Hero';
import LandingPage from './components/containers/landing-page/LandingPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
