import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div>
      <nav className="navbar" className="flex flex-col space-y-4">
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Blog">Blog</Link>
             
        </div>
      </nav>
    </div>
  )
}

export default Navbar


//className="text-xl relative flex h-16 justify-between absolute inset-y-0 left-0 flex"