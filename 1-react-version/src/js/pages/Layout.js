import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";
import SideBar from "../components/layout/SideBar";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;

    return (
      <div>

        <Nav location={location} />

        <SideBar location={location}/>

        <div class="container">
          <div class="row">
            <div class="col-lg-12">

              {this.props.children}

            </div>
          </div>
          <Footer/>
        </div>
      </div>

    );
  }
}
