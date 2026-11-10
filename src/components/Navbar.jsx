function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <a href="#home" className="logo">
          About me
        </a>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#map">Map</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
