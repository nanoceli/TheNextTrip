import './App.css';
import Landing from './LandingPage/LandingPage';
import { Route } from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import CityDetail from './Components/CityDetail/CityDetail';
import CreateActivity from './Components/CreateActivity/CreateActivity'

function App() {
  return (
    <div className="App">
      <Route
        exact path='/'
        render={() => <Landing />}
      />
      <Route
        exact path='/countries'
        render={() => <Home />}
      />
      <Route id="hola"
        exact path='/about'
        render={() => <About />}
      />
      <Route
        exact path='/countries/:cityId'
        render={({ match }) => <CityDetail id={(match.params.cityId)} />}
      />
      <Route
        exact path='/activities'
        render={() => <CreateActivity/>}
      />
    </div>
  );
}

export default App;
