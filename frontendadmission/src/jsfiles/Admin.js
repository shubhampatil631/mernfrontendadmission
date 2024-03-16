import { useHistory } from "react-router-dom";
import { useState } from "react";
import "../css/index.css";
import axios from "axios";

const Admin = () => {
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Department, setDepartment] = useState("");
  const [ContactNo, setContactNo] = useState("");
  const [error, setError] = useState(null);
  const validateForm = () => {
    setError(null);
    if (!Username || !Password || !Department || !ContactNo) {
      setError("All fields are required");
      return false;
    }
    return true;
  };

  const SubmitAdmin = (e) => {
    e.preventDefault();
    // If validation passes, proceed with the API call
    if (!validateForm()) return;

    setIsPending(true);
    axios
      .post("http://localhost:5050/CreateAdmin", {
        Username,
        Password,
        Department,
        ContactNo,
      })
      .then((result) => {
        console.log(result);
        setIsPending(false);
        history.goBack();
      })
      .catch((err) => {
        setIsPending(false);
        console.log(err);
      });
  };

  const SubmitUser = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsPending(true);
    axios
      .post("http://localhost:5000/CreateUser", {
        Username,
        Password,
        Department,
        ContactNo,
      })
      .then((result) => {
        console.log(result);
        setIsPending(false);
        history.goBack();
      })
      .catch((err) => {
        setIsPending(false);
        console.log(err);
      });
  };

  return (
    <>
      <div className="headupdate">
        <div className="logininerr">
          <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
          </div>
          <form className="nform1">
            <h3>Create Teacher</h3>
            {error && <p className="error">{error}</p>}
            <label>Username</label>
            <input
              placeholder="Email or Phone"
              id="username"
              type="text"
              required
              value={Username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />

            <label htmlFor="password">Password</label>
            <input
              placeholder="Password"
              id="password"
              type="password"
              required
              value={Password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <label>Department</label>
            <input
              placeholder="Department"
              id="department"
              type="text"
              required
              value={Department}
              onChange={(e) => setDepartment(e.target.value)}
            />

            <label>ContactNo</label>
            <input
              placeholder="ContactNo"
              id="contactNo"
              type="text"
              required
              value={ContactNo}
              onChange={(e) => setContactNo(e.target.value)}
            />

            <button
              type="submit"
              className="btn btn-outline-primary"
              onClick={SubmitUser}
              disabled={isPending}
            >
              Create Teacher
            </button>

            <button
              type="submit"
              className="btn btn-outline-primary"
              onClick={SubmitAdmin}
              disabled={isPending}
            >
              Create Admin
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Admin;
