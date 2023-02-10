import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import '../Login/Login2.css'

const Login2 = () => {
    const{login, forgetPassword, providerLogin} = useContext(AuthContext)
    const [userEmail, setUserEmail] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    
     //SignIn system with Google
     const handleGoogleSignIn =() => {
      providerLogin(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user)
        setPasswordError('')
        toast.success('Login successfull')
      })
      .catch(error => console.error(error))
    }
  
  
    const handleLogin = event => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password)
      login(email, password)
      .then(result => {
        const user = result.user;
        console.log(user)
        form.reset();
        setPasswordError('')
        toast.success('Login successfull')
      })
      .catch(error =>{ 
        console.error(error)
        setPasswordError(error.message)
      })
    }
  
      const handleEmailBlur = event => {
        const email = event.target.value;
        setUserEmail(email)
        console.log(email)
      }
  
      const handleForgetPassword = () => {
        if(!userEmail){
          toast.error('Please enter your email')
          return;
        }
          forgetPassword(userEmail)
          .then(() =>{
            toast.success('Password reset email sent, please check your email')
          })
          .catch(error => console.error(error))
      }
    return (
        <section>
        <div className="Colour" />
        <div className="Colour" />
        <div className="Colour" />
        <div className="Box">
          <div className="Square" style={{i: 0}} />
          <div className="Square" style={{i: 1}} />
          <div className="Square" style={{i: 2}} />
          <div className="Square" style={{i: 3}} />
          <div className="Square" style={{i: 4}} />
          <div className="Container">
            <div className="Form">
              <h2>Login Form</h2>
              <form onSubmit={handleLogin}>
                <div className="Input__box">
                  <input onBlur={handleEmailBlur} name= 'email' type="Text" placeholder="Email" />
                </div>
                <div className="Input__box">
                  <input type="Password" name='password' placeholder="Password" />
                </div>
                <div className='flex'>
                <div className="Input__box mr-5">
                  <input type="Submit" defaultValue="Login" />
                </div>
                <div className="Input__box">
                 <button onClick={handleGoogleSignIn} className="login-style">Signup With Google</button>
               </div>
                </div>
                <p className='text-red-500'>{passwordError}</p>
                <p  className="Forget">
                  Forgot Password? <a onClick={handleForgetPassword} href="#">Click Here</a>
                </p>
                <p className="Forget">
                  Don't Have An Account? <Link to='/signup2'>Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Login2;