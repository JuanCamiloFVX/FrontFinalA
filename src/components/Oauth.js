import React from "react";
import { GoogleLogin } from "react-google-login"
import {withRouter} from 'react-router-dom';
import { Redirect } from "react-router";

const responseGoogle = response => {
console.log(response);
console.log(response.profileObj);

}

function oauth() {
  return (



    <GoogleLogin 
      
      clientId="625164775138-lo9vksieekokfcur7vq5nouvvjk3j0sk.apps.googleusercontent.com"
      buttonText = "Login"
      onSuccess= {responseGoogle}
      onFailure= {responseGoogle}

      
    />

      
       
      
    
  );                                                                          

  }

export default oauth;
