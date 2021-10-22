import React from 'react';
import logo from './logo.svg';
import './App.css';
import tw from 'twin.macro';
import TopSection from './containers/TopSection';

function App() {
  return (
    <AppContainer>
      <TopSection/>
    </AppContainer>
  );
}

export default App;


const AppContainer = tw.div`
 flex
 w-full
 h-full
`
