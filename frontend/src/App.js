import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/LoginPage';
import Signup from './components/Signup';
import UploadPage from './components/UploadPage';
import PetsPage from './components/PetsPage';


function App() {
  return (
    <Router>
    <nav>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/pets">Pets</Link>
      <Link to="/upload">Upload</Link>
      <Link to="/logout">Logout</Link>
    </nav>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/pets" element={<PetsPage />} />
      <Route path="/upload" element={<UploadPage />} />
    </Routes>
  </Router>
);
}

export default App;
