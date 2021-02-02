import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Menu from './components/menu/Menu';
import TopBar from './components/top-bar/TopBar';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <div className="contenedor active" id="contenedor">
                <TopBar />

                <Menu />
      
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>

      </div>
    </Router>
  )
}

export default App;
