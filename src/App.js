import React from "react";
import Header from "./components/Header.js";

import { Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';


export default function App() {
  return (
    <main>
      <Route exact path='/' render={(props) => <WelcomePage />} />

      <Route exact path="/header" render={(props) => <Header {...props} />} />

    </main>
  );
}
