import logo from '../assets/icon.svg'
export function NavBar () {
  return (
    <header>
      <section>
        <div className='nav-bar-links'>
          <nav className='nav-bar'>
            <div className='logo'>
              <img src={logo} />
            </div>
            <ul>
              <li>
                <a href='#'>Search</a>
              </li>
              <li>
                <a href='#'>Social</a>
              </li>
              <li>
                <a href='#'>Forum</a>
              </li>
            </ul>
            <div className='special-container'>
              <ul>
                <li className='special-button'>
                  <a href='#'>Sign up</a>
                </li>
                <li className='special-button'>
                  <a href='#'>Log in</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </header>
  )
}
