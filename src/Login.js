import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import db from "./firebase";


function Login() {
  const [{}, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
          
        });
          if (result) {
            // db
            db.collection("users").add({
              userId: result.user.email,
            });
          }
       




      })
      .catch((error) => alert(error.message));


  };

  return (
    <div className="login">
      <div className="login__container">
        <img
        className='app-logo'
          src="https://pluspng.com/img-png/whatsapp-png-whatsapp-logo-png-1000.png"
          alt="Whatsapp"
        />
        <div className="login__text">
          <h1>WhatsApp Clone</h1>
          
        </div>
        <Button onClick={signIn}>Google Sign In</Button>
      </div>
      <p>
        This clone has been created for the learning purpose by{" "}
        <a className='login__link' href="https://nitish-profile.netlify.app/">Nitish♥</a>
      </p>
    </div>
  );
}

export default Login;
