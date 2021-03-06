import React from "react";
import {IndexLink, Link} from "react-router";

export default class Nav extends React.Component {
    constructor() {
        super();
    }


    render() {

        return (
            <div className="main-panel">
                <nav className="navbar navbar-default navbar-fixed">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse"
                                    data-target="#navigation-example-2">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">Dashboard</a>
                        </div>
                        <div className="collapse navbar-collapse">
                            <ul className="nav navbar-nav navbar-left">
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                        <i className="fa fa-globe"></i>
                                        <b className="caret hidden-sm hidden-xs"></b>
                                        <span className="notification hidden-sm hidden-xs">5</span>
                                        <p className="hidden-lg hidden-md">
                                            5 Notifications
                                            <b className="caret"></b>
                                        </p>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Notification 1</a></li>
                                        <li><a href="#">Notification 2</a></li>
                                        <li><a href="#">Notification 3</a></li>
                                        <li><a href="#">Notification 4</a></li>
                                        <li><a href="#">Another notification</a></li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className="nav navbar-nav navbar-right">
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                        <p>
                                            Dropdown
                                            <b className="caret"></b>
                                        </p>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Action</a></li>
                                        <li><a href="#">Another action</a></li>
                                        <li><a href="#">Something</a></li>
                                        <li><a href="#">Another action</a></li>
                                        <li><a href="#">Something</a></li>
                                        <li className="divider"></li>
                                        <li><a href="#">Separated link</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">
                                        <p>Log out</p>
                                    </a>
                                </li>
                                <li className="separator hidden-lg hidden-md"></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div id="map"></div>

            </div>
        );
    }
}
