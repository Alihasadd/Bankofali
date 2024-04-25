
import Navbar from "./components/Navbar";
import Blog from "./subpages/Blog";
import About from "./subpages/About"
import Home from "./subpages/Home"
import { Routes, Route } from "react-router-dom";
import Create from "./Create";

function App() {
  return (
    <div className="App">
      <Navbar />
    
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>


        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>

        <Routes>
          <Route path="/blog" element={<Blog />} />
        </Routes>

        <Routes>
          <Route path="/create" element={<Create />} />
          
        </Routes>

        <switch>
          
        </switch>
      </div>

    </div>
  );
}

export default App;

//HW Notes:
//Work on logic of linking pages from navbar
//Navbar that contains local
//Each link can take you to available pages