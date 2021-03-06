import axios from 'axios';
import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

function App() {
  const [token, setToken] = useState('');

  const responseGoogle = (response) => {
    callApiLogin('GOOGLE', response.tokenId);
  }

  const callApiLogin = (type, token) => {
    axios.post('http://localhost:8041/api/v1/user/login', {
      token: token,
      type: type,
      json_type: 'login'
    })
    .then(function (response) {
      setToken(response.data.token)
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const responseFailded = (response) => {
    console.log(response);
  }
  const responseFacebook = (response) => {
    callApiLogin('FACEBOOK', response.accessToken);
  }

  return (
    <>
    <div>
      Token: {token}
    </div>
    <div style={{width: '200px'}}>
<GoogleLogin
    clientId="465688552574-ind2q43ht8g6q3va7rclkr6j2oph15bk.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseFailded}
    prompt={'consent'}
    cookiePolicy={'single_host_origin'}
    style={{width: '100%'}}
  />
   
    </div>
    <div>
      <FacebookLogin
    appId="366827301115029"
    autoLoad={false}
    fields="name,email,picture"
    callback={responseFacebook} />
    </div>
    </>
    
  );
}

export default App;
