import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const nav = useNavigate()

  const loginHandler = () => {
    setPassword("");
    setUsername("");
    setError("");
    if(username === 'admin' && password === 'admin123'){
      localStorage.setItem("userToken", 'IM_ADMIN')
      nav("/Admin")
      window.location.reload()
    }else{
      axios({
        url: "https://fakestoreapi.com/auth/login",
        method: "POST",
        data: {
          username: username,
          password: password
        }
      })
        .then((response) => {
        //   console.log(response.data.token);
          setToken(response.data.token);
          localStorage.setItem("userToken", response.data.token);
          localStorage.setItem("username", username);
          nav("../")
        })
        .catch((err) => {
        //   console.log(err.response);
          setError(err.response.data);
        });
    }
  };

  return (
    <section className="body-login">
      <div className="bg-login">
        <h4>Login</h4>
        <hr/>
        <label className="login-label">Username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
        />
        <label className="login-label">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        {error && <small>{error}</small>}
        <button onClick={loginHandler}>LOGIN</button>
      </div>
    </section>
  );
};

export default Login;