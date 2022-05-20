import React, { useState } from "react";
import styles from "./Signup.module.css";
import { useNavigate } from "react-router-dom";
import { addUser, SingleUser } from "../../features/signupSlice";
import { useDispatch } from "react-redux";

export const Signup: React.FC = () => {
  const initialValues: SingleUser = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };
  const [data, setData] = useState(initialValues);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handeleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(data);
    dispatch(addUser(data));
    alert("Registered Successfully");
    navigate("/login");
  };

  return (
    <>
      <div className={styles.app}>
        <h1>Sign Up</h1>
        <form onSubmit={handleSignUp}>
          <label>First Name</label>
          <input
            type="text"
            onChange={handeleChange}
            name="firstname"
            placeholder="First Name"
          />
          <br />
          <label>Last Name</label>
          <input
            type="text"
            onChange={handeleChange}
            name="lastname"
            placeholder="Last Name"
          />
          <br />
          <label>Email Id</label>
          <input
            type="email"
            onChange={handeleChange}
            name="email"
            placeholder="Email"
          />
          <br />
          <label>Password</label>
          <input
            type="password"
            onChange={handeleChange}
            name="password"
            placeholder="Password"
          />
          <br />
          <p className={styles.ptag}>
            Already a member?{" "}
            <button onClick={() => navigate("/Login")} className={styles.login}>
              Log In
            </button>
          </p>
          <br />
          <button
            type="submit"
            className={styles.signup}
            disabled={
              data.firstname.trim().length === 0 ||
              data.lastname.trim().length === 0 ||
              data.password.trim().length === 0 ||
              data.email.trim().length === 0
            }
          >
            Sign up
          </button>
        </form>
      </div>
    </>
  );
};
