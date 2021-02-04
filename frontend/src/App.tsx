import { useEffect } from 'react';
import { Route, Switch } from 'wouter'

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
      if (e.ctrlKey === true && e.key == 'a') {
        e.preventDefault()
        window.location.href = 'localhost:3000/proveedores'
      }
    })
  }, [])

  return (
    <>
      <div className="contenedor active" id="contenedor">
        <TopBar />
        <Menu />

        <Switch>
          <Route path="/" component={Home} />
          <Route path="/proveedores" component={Providers} />
          <Route path="/proveedor/:id" component={ProviderProfile} />
          <Route path="/clientes" component={Clients} />
          <Route component={PageNotFound} />
        </Switch>

      </div>
    </>
  )
}

export default App;
