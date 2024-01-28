import "./styles/app.css";
function Nav() {
  return (
    <nav className="navbar">
      <h1 className="logo">Mojo Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">New blog</a>
      </div>
    </nav>
  );
}

export default Nav;
