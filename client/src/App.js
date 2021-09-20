import "./App.css";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  console.log(modalOpen);

  return (
    <BrowserRouter>
    {modalOpen ? <Contact setModalOpen={setModalOpen} /> : null}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/about"
          render={() => <About setModalOpen={setModalOpen} />}
        />
        <Route
          path="/portfolio"
          render={() => <Portfolio setModalOpen={setModalOpen} />}
        />
        <Route
          path="/skills"
          render={() => <Skills setModalOpen={setModalOpen} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
