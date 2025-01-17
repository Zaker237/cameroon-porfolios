import Card from "./components/card";
import NavBar from "./components/navbar";
import Section from "./components/section";
import "./styles/App.scss";
import dataOrder from "./data/dataOrder";
import tags from "./data/tags";
import Footer from "./components/footer";
// import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <a href="#">
        <img
          className="to-top"
          src="assets/images/arrow-up-circle-fill.svg"
          alt="arrow-up"
        />
      </a>
      <NavBar />
      <Section />
      <main className="main">
        <div className="main-container">
          <aside className="main-container-aside">
            <h2>Filter by</h2>
            <div className="main-container-aside-tags">
              <button className="active">All tags</button>
              {tags.map((tag, index) => (
                <button key={index}>{tag}</button>
              ))}
            </div>
          </aside>
          <div className="main-container-body">
            {dataOrder.map((item, index) => (
              <Card
                key={index}
                name={item.name}
                link={item.link}
                tags={item.tags}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
