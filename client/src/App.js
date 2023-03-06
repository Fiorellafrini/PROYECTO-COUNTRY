import './App.css';
import { Route } from "react-router-dom"
import LandingPage from "./components/3-Landing Page/LandingPage";
import About from "./components/11-About/About";
import CreateActivity from "./components/4-CreateActivity/CreateActivity";
import DetailPage from "./components/2-Detail Page/DetailPage";
import Navbar from './components/5-Navbar/Navbar';
import { useLocation } from 'react-router-dom';
import HomePage from './components/1-Home Page/HomePage';


function App() {
 const location = useLocation();

  return (
    <div className="App">
      
      {location.pathname !== '/' && <Navbar />}   

        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/create" component={CreateActivity} /> 
        <Route exact path="/countries/:id" component={DetailPage} />   
    </div>
  );
}


export default App;
