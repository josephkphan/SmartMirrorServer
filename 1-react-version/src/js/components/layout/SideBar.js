import React from "react";
import {IndexLink, Link} from "react-router";

// import './assets/css/animate.min.css'
// import './assets/css/bootstrap.min.css'
// import '/css/light-bootstrap-dashboard.min.css'


export default class SideBar extends React.Component {
    constructor() {
        super();
    }
    

    render() {
        const { location } = this.props;
        const homeClass = location.pathname === "/" ? "active" : "";
        const apiKeysClass = location.pathname.match(/^\/apikeys/) ? "active" : "";
        const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
        const userClass = location.pathname.match(/^\/user/) ? "active" : "";
        const mapsClass = location.pathname.match(/^\/maps/) ? "active" : "";
        const supportClass = location.pathname.match(/^\/support/) ? "active" : "";


        <IndexLink to="/">Home</IndexLink>
        
        return (
            <div className="sidebar" data-color="blue" data-image="../../../assets/img/sidebar-6.jpg">
                <div className="sidebar-wrapper">
                    <div className="logo">
                        <a className="simple-text">
                            My Smart Mirror
                        </a>
                    </div>

                    <ul className="nav">
                        <li className={homeClass}>
                             <Link to="/">
                                <i className="pe-7s-home"></i>
                                <p>Home</p>
                            </Link>
                        </li>
                        <li className={userClass}>
                             <Link to="/user">
                                <i className="pe-7s-user"></i>
                                <p>User Profile</p>
                            </Link>
                        </li >
                        <li className={mapsClass}>
                             <Link to="/maps">
                                <i className="pe-7s-map-marker"></i>
                                <p>Maps</p>
                            </Link>
                        </li>
                        <li className={apiKeysClass}>
                             <Link to="/apikeys">
                                <i className="pe-7s-key"></i>
                                <p>Api Keys</p>
                            </Link>
                        </li>
                        <li className={settingsClass}>
                             <Link to="settings">
                                <i className="pe-7s-config"></i>
                                <p>Settings</p>
                            </Link>
                        </li>
                        <li className={supportClass}>
                             <Link to="/support">
                                <i className="pe-7s-users"></i>
                                <p>Product Support</p>
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        );
    }
}
