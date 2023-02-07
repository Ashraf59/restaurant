import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import signupImg from '../../assets/signup/signup.png'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Signup = () => {
    const {createUser, providerLogin, updateUserInfo} = useContext(AuthContext)
    const [passwordError, setPasswordError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    // const [success, setSuccess] = useState(false);

    //SignIn system with Google
    const handleGoogleSignIn =() => {
      providerLogin(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user)
      })
      .catch(error => console.error(error))
    }

    //SignIn system with email & password
    const handleSignUp = (event) =>{
        event.preventDefault();
        // setSuccess(false)
        const form = event.target;
        const name = form.name.value;
        // const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(name, email, password, confirm)

        //Password confirmation validation
        if(password !== confirm){
          setPasswordError('Your password is not match, please enter correct password')
          return;
        }
        //password validation with 2 lowercase
        if(!/(?=(.*[a-z]){2,})/.test(password)){
          setPasswordError('Please provide at least two lowercase')
          return;
        }
        //password validation with 2 uppercase
        if(!/(?=(.*[A-Z]){2,})/.test(password)){
          setPasswordError('Please provide at least two uppercase')
          return;
        }
        //password validation with 2 numeric numbers
        if(!/(?=(.*[0-9]){2,})/.test(password)){
          setPasswordError('Please provide at least two number')
          return;
        }
        //password validation with 2 special chracter
        if(!/(?=(.*[!@#$%^&*()\-__+.]){2,})/.test(password)){
          setPasswordError('Please provide at least two special chracter')
          return;
        }
        //password validation with atleast 8 chracter
        if(password.length < 8){
          setPasswordError('Please provide at least 8 or more character')
          return
        }
        setPasswordError('');
        createUser(email, password)
        .then(result => {
          const user = result.user;
          console.log(user)
          // setSuccess(true)
          form.reset();
          setPasswordError('')
          toast.success('User Created successfully')
          handleUpdateUserProfile(name)
        })
        .catch(error => {
          console.error(error)
          setPasswordError(error.message)
        })
    }

    const handleUpdateUserProfile = (name, photoURL) => {
      const profile = {
        displayName: name,
        
      }
      updateUserInfo(profile)
      .then(()=> {})
      .catch(error => console.error(error))


    }
    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
<div className="hero-content flex-col lg:flex-row justify-evenly">
 <div className="text-center lg:text-left w-1/2">
   
   <img src = {signupImg} alt='Login'/>
 </div>
 <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
   <form onSubmit={handleSignUp} className="card-body">
   <h1 className="text-5xl font-bold">SignUp now!</h1>
   <div className="form-control">
       <label className="label">
         <span className="label-text">Name</span>
       </label>
       <input type="text" placeholder="name" name='name' className="input input-bordered" required/>
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Email</span>
       </label>
       <input type="text" placeholder="email" name='email' className="input input-bordered" required/>
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Password</span>
       </label>
       <input type="password" placeholder="password" name='password' className="input input-bordered" required/>
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Confirm Password</span>
       </label>
       <input type="password" placeholder="confirm password" name='confirm' className="input input-bordered" required />
     </div>
     
      <p className='text-red-500'>{passwordError}</p>
      {/* {success && <p className='text-green-500'>User created successfully</p>} */}
     <div className="form-control mt-2">
       <button className="btn btn-outline">Signup</button>
     </div>
     <div className="form-control mt-2">
       <button onClick={handleGoogleSignIn} className="btn btn-outline">Signup With Google</button>
     </div>
     <div>
        <p>Already have an account? Please <Link className='text-teal-400 hover:text-teal-500' to ='/login'>Login</Link></p>
     </div>
   </form>
 </div>
</div>
</div> 
     </div>
    );
};

export default Signup;