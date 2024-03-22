import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Allactivities from './components/Allactivities';
import AboutUs from './components/AboutUs';
import Donate from './components/forms/donate';
import Objectives from './components/Objectives';
import ContactUs from './components/ContactUs';
import Footar from './components/footer';
import Login from './components/Login';
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
          <Route path="/objective" element={<Objectives />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footar />
      </Router>
    </div>
  );
}

export default App;