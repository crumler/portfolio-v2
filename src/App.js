import React from 'react';
import './App.css';
// Import of Components
import MyNavbar from './components/navbar/Navbar';
import MyCarousel from './components/carousel/Carousel';
import TitleMessage from './components/title-message/TitleMessage';

const App = () => {
  return (
    <div>
      <MyNavbar />
      <MyCarousel />
      <TitleMessage />
    </div>
  );
}

export default App;