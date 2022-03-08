import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Announcement from './components/Announcement/Announcement';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './pages/Footer/Footer';
import Services from './pages/Services/Services';
import ServiceDetail from './pages/ServiceDetail/ServiceDetail';
import Portfolio from './pages/Portfolio/Portfolio';
import Software from './pages/Software/Software';
import Training from './pages/Training/Training';
import Pricings from './pages/Pricings/Pricings';
import NotFound from './pages/NotFound/NotFound';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Announcement/>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/services">
            <Services/>
          </Route>
          <Route path="/service/:serviceId">
            <ServiceDetail/>
          </Route>
          <Route path="/portfolios">
            <Portfolio/>
          </Route>
          <Route path="/software">
            <Software/>
          </Route>
          <Route path="/training">
            <Training/>
          </Route>
          <Route path="/pricing">
            <Pricings/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/">
            <NotFound/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
