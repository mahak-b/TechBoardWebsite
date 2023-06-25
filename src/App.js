import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Club from './Components/Club/Club';
import News from './Components/News/News';
import Footer from './Components/Home/footer.js';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Projects from './Components/Projects/Projects';
import DotLink from './Components/DotLink/DotLink';
import Events from './Components/Events/Events';


function App() {
  return (
    <Router>
    <div>
      <Navbar></Navbar>
      <Switch>
          <Route path="/Club">
            <Club/>
          </Route>
          <Route path="/Events">
            <Events/>
          </Route>
          <Route path="/News">
            <News/>
          </Route>
          <Route path="/Projects">
            <Projects/>
          </Route>
          <Route path="/DotLink">
            <DotLink/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
