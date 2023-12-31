import Logo from "../assets/icon.svg";
import { Tooltip } from "./Tooltip";
export function NavBar() {
  return (
    <header>
      <div className="conteiner-navbar">
        <nav className="nav-bar">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <ul>
            <li>
              <a href="#" className="tooltip-parent">
                Search
                <Tooltip />
              </a>
            </li>
            <li>
              <a href="#">Social</a>
            </li>
            <li>
              <a href="#">Forum</a>
            </li>
          </ul>
          <div className="special-container">
            <ul>
              <li className="special-button">
                <a href="#">Login</a>
              </li>
              <li className="special-button">
                <a href="#">Sign up</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
