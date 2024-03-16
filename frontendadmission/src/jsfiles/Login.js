import { Link, useHistory } from "react-router-dom";
import { useState, useEffect, useNavigation } from "react";
import "../css/index.css";
import axios from "axios";
const Login = () => {
  const [isPending, setIsPending] = useState();
  const history = useHistory();
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [cont, setCont] = useState("");
  const [no, setNo] = useState("");

  const handleAdmin = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5050/loginAdmin", {
        Username,
        Password,
      })
      .then((res) => {
        if (res.data.success) {
          // Corrected check
          history.push({
            pathname: "/InfoAdmin",
            state: {
              Username,
              Password,
              AdminDepartment: res.data.AdminDepartment,
              AdminContactNo: res.data.AdminContactNo,
              admin: "Admin",
            },
          });
        } else {
          console.log("Invalid credentials");
        }
      })
      .catch((err) => {
        console.log("client side login error", err);
      });

    axios
      .post("http://localhost:5050/loginUser", {
        Username,
        Password,
      })
      .then((res) => {
        if (res.data.success) {
          console.log("Login successful");
          history.push({
            pathname: "/InfoAdmin",
            state: {
              Username,
              Password,
              UserDepartment: res.data.UserDepartment,
              UserContactNo: res.data.UserContactNo,
              teacher: "Teacher",
            },
          });
          //alert(res.data.UserDepartment, res.data.UserContactNo);
        } else {
          console.log("Invalid credentials");
        }
      })
      .catch((err) => {
        console.log("client side login error", err);
      });
  }; /* <video autoPlay loop muted className="video-background">
  <source src={v2} type="video/mp4" />
  Your browser does not support the video tag.
</video>*/
  return (
    <div className="fill">
      <div>
        <div className="logininerr">
          <form class="nform" onSubmit={handleAdmin}>
            <h3>Login Here</h3>

            <label for="username">Username</label>
            <input
              style={{ color: "black" }}
              placeholder="Email or Phone"
              id="username"
              type="text"
              required
              value={Username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label for="password">Password</label>
            <input
              style={{ color: "black" }}
              placeholder="Password"
              id="password"
              type="password"
              required
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="onSubmit">Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
