import { useEffect } from 'react';
import { Route, Switch } from 'wouter'

import Menu from './components/menu/Menu'
import TopBar from './components/top-bar/TopBar'
import Clients from './pages/clients/Clients'
import EditProvider from './pages/edit-provider/EditProvider'
import Home from './pages/Home'
import PageNotFound from './pages/page-not-found/PageNotFound'
import ProviderProfile from './pages/provider-profile/ProviderProfile'
import Providers from './pages/providers/Providers'

import { useLocation } from "wouter";
import CreateProvider from './pages/create-provider/CreateProvider';

const App = () => {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    window.addEventListener('keydown', e => {
      if (e.ctrlKey === true && e.key == 'a') {
        e.preventDefault()
        setLocation("/proveedores")
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
          <Route path="/editar-proveedor/:id" component={EditProvider} />
          <Route path="/crear-proveedor" component={CreateProvider} />
          <Route path="/clientes" component={Clients} />
          <Route component={PageNotFound} />
        </Switch>

      </div>
    </>
  )
}

export default App;
