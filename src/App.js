import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Sidebar from './components/Sidebar/Sidebar';
import Page from './components/Page/Page';

const App =() => (
    <div className="App">
      <Sidebar />
      <Banner />
      <Page />
    </div>
);

export default App;
