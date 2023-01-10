import React from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase-config";

const PublicPage = () => {
  console.log('home');
  const [registerEmail, setRegisterEmail] = React.useState("");
  const [registerPassword, setRegisterPassword] = React.useState("");

  const [loginEmail, setLoginEmail] = React.useState("");
  const [loginPassword, setLoginPassword] = React.useState("");

  const [user, setUser] = React.useState({});

React.useEffect(()=>{
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    console.log('auth changed');
  });
}, [auth]);

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (err) {
      console.log(err.message);
    }
    console.log('signup');
  };
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
    } catch (err) {
      console.log(err.message);
    }
      console.log('login');
  };
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="container">
      <h3>Sign Up</h3>
      <input
        type="email"
        name="signup-email"
        id="semail"
        placeholder="Email"
        autoComplete="off"
        onChange={(e) => {
          setRegisterEmail(e.target.value);
        }}
        value={registerEmail}
      />
      <input
        type="password"
        name="signup-password"
        id="spassword"
        placeholder="Password"
        onChange={(e) => {
          setRegisterPassword(e.target.value);
        }}
        value={registerPassword}
        />
      <button onClick={register} className="btn">
        Sign Up
      </button>

      <h3>Login</h3>
      <input
        type="email"
        name="login-email"
        id="lemail"
        placeholder="Email"
        onChange={(e) => {
          setLoginEmail(e.target.value);
        }}
        value={loginEmail}
      />
      <input
        type="password"
        name="login-password"
        id="lpassword"
        placeholder="Password"
        onChange={(e) => {
          setLoginPassword(e.target.value);
        }}
        value={loginPassword}
      />
      <button onClick={login} className="btn">
        Login
      </button>

      <h4>User Logged In: {user?.email}</h4>
      
      <button onClick={logout} className="btn">
        Sign Out
      </button>
    </div>
  );
};

export default PublicPage;
