import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import Home from "./components/Home/Home";
import Wedding from "./components/weddinginvitation/weddingInvitation";
import Bride from "./components/bridegroom/brideGroom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path ="/home" element={<Home/>}/>
        <Route path="/wedding" element={<Wedding/>}/>
        <Route path="/bride" element={<Bride/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
