import './App.css';
import './normalize.css';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';
import React from 'react';
import img1 from './static/img/socks_blue.jpg';


function App() {
  return (
    <div className="App">
        <NavBar/>
        <MainContent img= { img1 }></MainContent>
    </div>
  );
}

export default App;
