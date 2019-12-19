import React from "react";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Route,
  Switch
} from "react-router-dom";
import "./styles.css";
import logo from "./img/ust-global-vector-logo.png";

export default class LinkExample extends React.Component {
  render() {
    return (
      <Router>
        <>
          <div>
            <img src={logo} className="myImage" />
          </div>
          <br />
          <div>
            <img src={logo} className="myImagex" />
          </div>

          <div className="Links">
            <ul>
              <li>
                <NavLink to="/" exact activeClassName="activeLink">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName="activeLink">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/carriers" activeClassName="activeLink">
                  Carriers
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="activeLink">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/products" activeClassName="activeLink">
                  Products
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/carriers" component={Carriers} />
              <Route path="/contact" component={Contact} />
              <Route path="/products" component={Products} />
            </Switch>
          </div>
        </>
      </Router>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <div>
        <hr />
        <h2>DIGITAL TRANSFORMATION</h2>
        <h4>
          {" "}
          Touching 3 billion lives through digital solutions and technologies
        </h4>
      </div>
    );
  }
}
class About extends React.Component {
  render() {
    return (
      <div>
        <hr />
        <h3>
          UST Global® is a leading provider of end-to-end IT services and
          solutions for Global 1000 companies. We use a client-centric Global
          Engagement Model that combines local, senior, on-site resources with
          the cost, scale, and quality advantages of off-shore operations.
        </h3>
      </div>
    );
  }
}
class Carriers extends React.Component {
  render() {
    return (
      <div>
        <h2>Carriers</h2>
      </div>
    );
  }
}
class Contact extends React.Component {
  render() {
    return (
      <div>
        <h2>Contact</h2>
      </div>
    );
  }
}
class Products extends React.Component {
  render() {
    return (
      <div>
        <h2>Products</h2>
      </div>
    );
  }
}
