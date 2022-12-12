import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import "jquery/dist/jquery"
import $ from "jquery"
function App() {
  return (
    <div className="App">
     {/* <Navbar/> */}
     <Routes>
      <Route exact path='/' element={<Login/>}/>
     </Routes>
     {/* <Footer/> */}
    </div>
  );
}

export default App;
