import React from "react";
import logo from "./logo.svg";
import "./App.css";
import tw from "twin.macro";
import TopSection from "./containers/TopSection";
import ExploreSection from "./containers/ExpolreSection";

function App() {
  return (
    <AppContainer>
      <TopSection />
      <ExploreSection />
    </AppContainer>
  );
}

export default App;

const AppContainer = tw.div`
 flex
 flex-col
 w-full
 h-full
 overflow-hidden
`;
