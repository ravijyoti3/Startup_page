import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/Main";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header title="SS TECH" scroll>
          <Navigation>
            <a href="#">Services</a>
            <a href="#">Products & Platform</a>
            <a href="#">Discover SS Tech</a>
          </Navigation>
        </Header>
        <Drawer title="SS TECH">
          <Navigation>
            <a href="#">Home</a>
            <a href="./Components/Services.js">Services</a>
            <a href="#">Products & Platform</a>
            <a href="#">Discover SS Tech</a>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
