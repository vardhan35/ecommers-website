import './App.css';
import Home from './components/home/Home';
import Navbar from './components/Navbar';
import Cart from './components/cart/Cart'
import Error from './Error'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/cart'>
            <Cart/>
          </Route>
          <Route path='*'>
            <Error/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
