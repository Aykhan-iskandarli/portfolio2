import "./global.scss";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Portfolios from "./Pages/Portfolios";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import { AnimatePresence } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const override = css`
  position: absolute;
  top: 50%;
  left: 40%;
  transform: translate(-50%, -50%);

  `;
  return (
    <>
      {loading ? (
        <ClipLoader
          css={override}
          size={100}
          color={"#123abc"}
          loading={loading}
        />
      ) : (
        <Router>
            <Sidebar />
            <div className="main-content">
            <AnimatePresence>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route path="/portfolios" exact component={Portfolios} />
              <Route path="/blogs" exact component={Blogs} />
              <Route path="/contact" exact component={Contact} />
            </Switch>
            </AnimatePresence>
            </div>
        </Router>
      )}
    </>
  );
}

export default App;
