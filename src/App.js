import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Service from "./Components/Service";
import Brands from "./Components/Brands";
import VideoGallery from "./Components/VideoGallery";
import Footer from "./Components/Footer";
import VideoServices from "./Components/Video-prod-services";
import FeaturedServices from "./Components/FeaturedServices";
import FounderSection from "./Components/FounderSection";
import Slider from "./Components/Slider";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <header>
              <Navbar />
              <Main />
            </header>
            <Service />
            <Brands />
            <VideoGallery />
            <VideoServices />
            <FeaturedServices />
            <Slider />
            <FounderSection />
          </Route>
          <Route exact path="/products">
            <Navbar />
          </Route>
          <Route exact path="/about">
            <Navbar />
          </Route>
          <Route exact path="/contact">
            <Navbar />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
