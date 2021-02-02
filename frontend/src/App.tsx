import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Menu from './components/menu/Menu';
import TopBar from './components/top-bar/TopBar';
import Clients from './pages/clients/Clients';
import Home from './pages/Home';
import PageNotFound from './pages/page-not-found/PageNotFound';
import ProviderProfile from './pages/provider-profile/ProviderProfile';
import Providers from './pages/providers/Providers';

const App = () => {
  useEffect(() => {
    window.addEventListener('keydown', e => {
      if(e.ctrlKey === true && e.key == 'a'){
        e.preventDefault()
        window.location.href = 'localhost:3000/proveedores'
      }
    })
  }, [])

  return (
    <Router>
      <div className="contenedor active" id="contenedor">
        <TopBar />

        <Menu />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/proveedores" component={Providers} />
          <Route exact path="/proveedor" component={ProviderProfile} />
          <Route exact path="/clientes" component={Clients} />
          <Route component={PageNotFound} />
        </Switch>

      </div>
    </Router>
  )
}

export default App;
