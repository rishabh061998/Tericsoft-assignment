
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from './components/pages/Home';


import Navbar from './components/layout/Navbar';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className='App'>
        <Navbar/>
<Routes>
      <Route exact path="/" element={<Home/>}></Route>
     
     
      <Route exact path="/users/add" element={<AddUser/>}></Route>
      <Route exact path="/users/edit" element={<EditUser/>}></Route>
   
    </Routes>
    </div>
   
  </Router>
  );
}

export default App;
