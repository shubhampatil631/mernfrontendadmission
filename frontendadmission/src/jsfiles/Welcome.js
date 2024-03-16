import Button from "react-bootstrap/Button";
import "../css/index.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Welcome = () => {
  const history = useHistory();

  function login() {
    history.push("/login");
  } //<div className="homepage"></div>
  return (
    <div>
      {" "}
      <div>
        <img className="img1" src="/images/pvpit.jpg" alt="not found" />
      </div>
      <div className="homepage1">
        <center>
          <h1>
            P.V.P. INSTITUTE OF TECHNOLOGY, BUDHGAON.(SANGLI) <br></br>
            (MAHARASHTRA STATE)(0045)
          </h1>
          <h2>ADMISSION'2024</h2>
          <h2>Build your Successful Future with Edification</h2>
          <Button variant="outline-light" onClick={login}>
            Login
          </Button>{" "}
        </center>
      </div>
    </div>
  );
};

export default Welcome;
