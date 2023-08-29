import logo from '../assets/icon.svg'
export function NavBar () {
  return (
    <header>
      <section>
        <div className='nav-bar-links'>
          <div className='logo'>
            <img src={logo} />
          </div>
          <nav className='nav-bar'>
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
            <div className='special-button'>
              <ul>
                <li>
                  <a href='#'>Sign up</a>
                </li>
                <li>
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
