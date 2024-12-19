import './Header.css';

function Header() {
  return (
    <header>
      <img 
        className="logo" 
        src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" 
        alt="Logo"
      />
      <nav>
        <ul className="nav_links">
          <li><a href="/">Home</a></li>
          <li><a href="about">About</a></li>
          <li><a href="More">More</a></li>
        </ul>
      </nav>
      <a className="cta" href="contact"><button>Contact</button></a>
    </header>
  );
}

export default Header;
