import { Component } from "react";
import logo from "../assets/full-logo.png";
import "./Navbar.css";

class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render () {
        return (
            <>
            <nav>
                <a href="index.html">
                <img src={logo} alt="full-logo" height={200} />
                </a>
                <div>
                    <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                        <li>
                            <a className="active" href="index.html">Home</a>
                        </li>
                        <li>
                            <a href="index.html">Rules</a>
                        </li>
                        <li>
                            <a href="index.html">Members</a>
                        </li>
                        <li>
                            <a href="index.html">Champions</a>
                        </li>
                    </ul>
                </div>
                <div id="mobile" onClick={this.handleClick}>
                    <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

                </div>
            </nav>
            </>
        )
    }
}

export default Navbar;