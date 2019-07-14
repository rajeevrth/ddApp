import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          name: "Home",
          routeLink: "/"
        },
        {
          name: "About",
          routeLink: "/"
        },
        {
          name: "Contact",
          routeLink: "/"
        },
        {
          name: "DOTD",
          routeLink: "/"
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <header className="flex-container shadow-1 h3">
          <span className="fl ml3 relative headerText cursiveFont">
            Daily Dose
          </span>
          <ul className="list dt w-50 fr">
            {this.state.links.map(link => (
              <li
                value={link.name}
                className="dtc cursiveFont pointer grow dib  no-underline black-90 "
                onClick={() => this.navigateToLink(link.routeLink)}
              >
                {link.name}
              </li>
            ))}
          </ul>
        </header>
      </div>
    );
  }

  navigateToLink = linkRoute => {
    alert("hello" + linkRoute);
  };
}

export default Header;
