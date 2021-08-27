import React from 'react';
import './App.css';
import './App.scss';
import Footer from './components/footer';
import MainContent from './components/mainContent';
import Header from './components/header';

function App() {
  return (
    <div className="container "> 
      <Header />  
      <MainContent />   
     <Footer />    
    </div>
  );
}

export default App;
