import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import LayoutHeader from './components/layoutHeader'
import LayoutFooter from './components/layoutFooter'
import NotFound from './pages/notFound'
import "bootstrap/dist/css/bootstrap.css"
// import 'react-bootstrap'

function App() {
  return (
    <BrowserRouter>
      <LayoutHeader />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
      <LayoutFooter />
    </BrowserRouter>

  );
}

export default App;
