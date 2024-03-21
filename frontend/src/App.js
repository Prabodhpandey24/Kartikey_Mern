import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Allactivities from './components/Allactivities';
import AboutUs from './components/AboutUs';
import Donate from './components/forms/donate';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allActivities" element={<Allactivities />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;