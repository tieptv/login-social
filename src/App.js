import React from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

function App() {

  const responseGoogle = (response) => {
    console.log(response);
  }

  const responseFailded = (response) => {
    console.log(response);
  }
  const responseFacebook = (response) => {
    console.log(response);
  }

  return (
    <>
    <div style={{width: '200px'}}>
<GoogleLogin
    clientId="465688552574-oe55l5fdef0t269dk8ghduk0bbuu8guu.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseFailded}
    cookiePolicy={'single_host_origin'}
    style={{width: '100%'}}
  />
   
    </div>
    <div>
      <FacebookLogin
    appId="266055225585869"
    autoLoad={true}
    fields="name,email,picture,phone"
    callback={responseFacebook} />
    </div>
    </>
    
  );
}

export default App;
