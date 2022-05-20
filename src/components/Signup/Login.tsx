import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store";
import styles from "./Signup.module.css";

export interface LoginState {
  email: string;
  password: string;
}
export const Login: React.FC = () => {
  const initialValues: LoginState = {
    email: "",
    password: "",
  };

  const [login, setLogin] = useState(initialValues);

  const navigate = useNavigate();

  const users = useSelector((state: RootState) => state.signupReducer.users);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginData = users.find(
      (user) => user.email === login.email && user.password === login.password
    );

    if (loginData) {
      navigate("/products");
    } else {
      alert("Invalid Credentials!");
    }
  };

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  }

  return (
    <>
      <div className={styles.app}>
        <div>
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <label>Email</label>
            <input
              type="email"
              onChange={handleChange}
              name="email"
              placeholder="Email"
            />
            <br />
            <label>Password</label>
            <input
              type="password"
              onChange={handleChange}
              name="password"
              placeholder="Password"
            />
            <br />
            <p className={styles.ptag}>
              Don't have an account?{" "}
              <button
                onClick={() => navigate("/signup")}
                className={styles.login}
              >
                Sign up
              </button>
            </p>
            <br />
            <button
              type="submit"
              className={styles.signup}
              disabled={
                login.email.trim().length === 0 ||
                login.password.trim().length === 0
              }
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
