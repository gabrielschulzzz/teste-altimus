import { Switch, Route } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import './App.css'

import { Login } from './pages/Login'
import { Veiculos } from './pages/Veiculos'

export function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/veiculos" component={Veiculos} />
      </Switch>
    </>
  )
}
