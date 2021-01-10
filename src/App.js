import React from "react";
import "tailwindcss/dist/base.css";
import "./styles/globalStyles.css";
import './App.css';
import { css } from "styled-components/macro"; //eslint-disable-line

import AnimationRevealPage from "./helpers/AnimationRevealPage.js";
import Header from "./components/Header"
import Footer from "./components/Footer.js";
import AppRouter from "./Routing"
import { BrowserRouter as Router} from "react-router-dom";
import SimpleReactLightbox from "simple-react-lightbox"

export default function App() {
  return (
      <AnimationRevealPage disabled>
        <SimpleReactLightbox>
          <Router>
            <div className="App">
              <Header />
              <AppRouter />
              <Footer />
            </div>
          </Router>
        </SimpleReactLightbox>
      </AnimationRevealPage>
  );
}

