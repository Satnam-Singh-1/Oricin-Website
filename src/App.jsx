import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Switch,Route,Redirect } from 'react-router-dom';
import About from './component/About';
import Contact from './component/Contact';
import Home from './component/Home';
import Service from './component/Service';
import Navbar from './component/Navbar';
// import Navbar from './component/navbar2'
import Footer from "./component/Footer";

const App = () => {
  return (
    <>
    <Navbar />
      <Switch>
        <Route exact path="/" component = {Home} />
        <Route exact path="/about" component = {About} />
        <Route exact path="/service" component = {Service} />
        <Route exact path="/contact" component = {Contact} />
        <Redirect to="/" />
      </Switch>   
    <Footer />  
    </>
  );
}

export default App;
