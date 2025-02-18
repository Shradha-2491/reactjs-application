import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import PostDetail from "./pages/PostDetail.tsx";
import Navbar from "./components/Navbar.tsx";

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:itemId" element={<PostDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

