import logo from '../assets/icon.svg'
export function NavBar(){
      return (

              <nav className="nav-bar">
                  <div className="nav-bar-logo">
                    <img src={logo} />
                  </div>
                  <div className="nav-bar-links">
                    <ul>
                      <li ><a href="#">Search</a></li>
                      <li ><a href="#">Social</a></li>
                      <li ><a href="#">Forum</a></li>
                    </ul>
                  </div>
                  <div className="nav-bar-links nav-bar-sign">
                    <ul>
                      <li ><a href="#">Sign up</a></li>
                      <li className="login-button" ><a href="#" >Login</a></li>
                    </ul>
                  </div>
                
              </nav>

      );
  }