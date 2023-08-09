import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Collection from "./Pages/Collection";
import Create from "./Pages/Create";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/collections" exact component={Collection} />
          <Route path="/create" exact component={Create} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
