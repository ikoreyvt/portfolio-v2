import './App.css';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import WorkHistory from './components/WorkHistory';
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/workhistory" component={WorkHistory}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
