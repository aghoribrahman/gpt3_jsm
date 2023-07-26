import React from 'react';
import { Article, Brand, Cta, Navbar, Feature } from './components'
import { Blog, Features, Footer, Header, Possibility,WhatGPT3 } from './containers'
import './App.css'

const App = () => {
  return(
    <div classNmae='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
    )
};

export default App