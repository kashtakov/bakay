import { Component } from 'react';
import Header from './components/header/Header';
import Hero from './components/hero-page/Hero';
import './App.css';

class App extends Component{
  render(){
    return(
      <>
      <Header />
      <Hero />
      </>
    )
  
  }
}
export default App;
