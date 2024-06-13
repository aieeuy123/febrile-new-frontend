// import React from 'react';
// import { GoogleLogin } from 'react-google-login';
// // 836610952007-tgteog7230sblk9d1sg5b7epaddi0i5a.apps.googleusercontent.com web3 
// // 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 cli-secret
// const GoogleAuth = () => {

 
//   return (
//     <div>
//       <GoogleLogin clientId='836610952007-tgteog7230sblk9d1sg5b7epaddi0i5a.apps.googleusercontent.com'
        
//         onSuccess={credentialResponse => {
//           console.log(credentialResponse);
//         }}
//         onError={() => {
//           console.log('Login Failed');
//         }}
//       />
//     </div>
//   );
// };

// export default GoogleAuth;
import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

const GoogleAuth = () => {
  const clientId = '836610952007-tgteog7230sblk9d1sg5b7epaddi0i5a.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin  
        ux_mode="redirect" 
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleAuth;