import "../css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarall from "./Navbarall.js";
import Create from "./FORM.js";
import Show from "./Show.js";
import Login from "./Login.js";
import Admin from "./Admin.js";
import Newupdate from "./Newupdate.js";
import ShowUserAdmin from "./ShowUserAdmin.js";
import UpdateUseradmin from "./UpdateUseradmin.js";
import Filterstd from "./Filterstd.js";
import Filter2 from "./Filter2.js";
import Info from "./InfoAdmin.js";
import Welcome from "./Welcome.js";
import { Route } from "react-router-dom";
/*  <video id="background-video1" autoplay loop muted>
          <source src="/video/s2.mp4" type="video/mp4" />
        </video>  
        s3,s7,s8,s10,
        */
function App() {
  return (
    <div>
      <div className="vd">
        <img id="background-video1" src="/images/s7.jpg" alt="not found" />
        <Navbarall />
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/Admin">
          <Admin />
        </Route>
        <Route exact path="/Create">
          <Create />
        </Route>
        <Route exact path="/Showtable">
          <Show />
        </Route>
        <Route exact path="/Newupdate/:id">
          <Newupdate />
        </Route>
        <Route exact path="/ShowUserAdmin">
          <ShowUserAdmin />
        </Route>
        <Route exact path="/UpdateAdmin/:id">
          <UpdateUseradmin />
        </Route>
        <Route exact path="/UpdateUser/:id">
          <UpdateUseradmin />
        </Route>
        <Route exact path="/Filterstd">
          <Filterstd />
        </Route>
        <Route exact path="/Filter2">
          <Filter2 />
        </Route>
        <Route exact path="/InfoAdmin">
          <Info />
        </Route>
      </div>
    </div>
  );
}

export default App;
