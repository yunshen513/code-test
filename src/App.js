import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Sidebar from './components/Sidebar/Sidebar';
import Page from './components/Page/Page';

function App() {
  return (
    <div className="App">
      <Banner />
      <Sidebar />
      <Page />
    </div>
  );
}

export default App;
