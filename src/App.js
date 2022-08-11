import React from 'react'
import "./App.css"
import Header from "./components/Header"
import CourseHome from './components/CourseHome';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from "./components/Home"
import Team from './components/Team';
import About from "./components/About";
import Contact from './components/Contact';
import Footer from './components/Footer';
const App = () => {
  return (
    <>
    <Router>
      <Header/>
      <Switch>
     <Route  path ='/' exact component = {Home} />
     <Route path="/about" exact component={About}/>
     <Route  path="/courses" exact component={CourseHome} />
     <Route path='/team' exact component= {Team} />
     <Route path='/contact' exact component={Contact} />
      </Switch>
      <Footer/>
      </Router>
    </>
  )
}

export default App