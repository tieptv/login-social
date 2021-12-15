import React from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

function App() {

  const responseGoogle = (response) => {
    console.log(response);
  }
  const responseFacebook = (response) => {
    console.log(response);
  }

  return (
    <>
    <div style={{width: '200px'}}>
<GoogleLogin
    clientId="465688552574-ind2q43ht8g6q3va7rclkr6j2oph15bk.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
    style={{width: '100%'}}
  />
   
    </div>
    <div>
      <FacebookLogin
    appId="266055225585869"
    autoLoad={true}
    fields="name,email,picture"
    callback={responseFacebook} />
    </div>
    </>
    
  );
}

export default App;
