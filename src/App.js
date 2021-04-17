import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Order from './components/Order/Order';
import Admin from './components/Admin/Admin';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PageNotFound from './components/PageNotFound/PageNotFound';
import Event from './components/Event/Event';
import LogIn from './components/LogIn/LogIn';


function App() {
  return (
    <div className="App">


      <Router>
        <nav>
          <ul className="nav">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/order">Order</Link>
            </li>
            <li>
              <Link to="/login">LogIn</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </nav>

        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/home">
              <Home />
            </Route>

            <Route path="/order">
              <Order />
            </Route>

            <Route path="/admin">
              <Admin />
            </Route>

            <Route path="/login">
              <LogIn />
            </Route>

            <Route path="/*">
              <PageNotFound />
            </Route>
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
