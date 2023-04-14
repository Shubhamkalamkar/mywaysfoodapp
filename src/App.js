import './App.css';
import { Create } from './Create';
import { Home } from './Home';
import { Route, Routes, useNavigate } from "react-router-dom";


function App() {
  const navigate = useNavigate();
  const gotocreate = () => {
    navigate("/create");
  };
  const home = () => {
    navigate("/");
  };
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          FoodApp
        </a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active" className='tab'>
              <a class="nav-link" onClick={home}>
                Home
              </a>
            </li>
            <li class="nav-item" className='tab'>
              <a class="nav-link" onClick={gotocreate}>
                Create
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div></div>
      <Routes>
        <Route exact path="/Create" element={<Create />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
