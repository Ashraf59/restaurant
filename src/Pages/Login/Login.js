import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import loginImg from '../../assets/login/login.png'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
const Login = () => {
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
        <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row justify-evenly">
    <div className="text-center lg:text-left w-1/2">
      
      <img src = {loginImg} alt='Login'/>
    </div>
    <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
      <h1 className="text-5xl font-bold">Login now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input onBlur={handleEmailBlur} type="text" placeholder="email" name= 'email' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" />
          <label className="label">
            <p onClick={handleForgetPassword} className='text-teal-400 hover:text-teal-500 text-left'>Forgot password?</p>
          </label>
        </div>
        <p className='text-red-500'>{passwordError}</p>
        <div className="form-control mt-2">
          <button className="btn btn-outline">Login</button>
        </div>
        <div className="form-control mt-2">
       <button onClick={handleGoogleSignIn} className="btn btn-outline">Signup With Google</button>
     </div>
        <p>New in Cehpoint Hotel? Please <Link className='text-teal-400 hover:text-teal-500' to ='/signup'>Sign Up</Link></p>
      </form>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Login;