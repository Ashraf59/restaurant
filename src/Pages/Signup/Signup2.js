import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import '../Signup/Signup2.css'

const Signup2 = () => {
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
      setPasswordError('');
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
          <div className="Container2">
            <div className="Form">
              <h2>SignUp now!</h2>
              <form onSubmit={handleSignUp}>
               <div className='flex'>
               <div className="Input__box mr-5">
                  <input type="Text" name='name' placeholder="Username" />
                </div>
                <div className="Input__box">
                  <input type="Text" name='email' placeholder="Email" />
                </div>
               </div>
                <div className='flex'>
                <div className="Input__box mr-5">
                  <input type="Password" name='password' placeholder="Password" />
                </div>
                <div className="Input__box">
                  <input type="Password" name='confirm' placeholder="Confirm Password" />
                </div>
                </div>
                <p className='text-red-500'>{passwordError}</p>
                <div className='flex'>
                <div className="Input__box mr-5">
                  <input type="Submit" defaultValue="SignUp" />
                </div>
                <div className="Input__box">
                 <button onClick={handleGoogleSignIn} className="btn-style">Signup With Google</button>
               </div>
                </div>
                
                <p className="Forget">
                Already have an account? Please <Link to ='/login2'>Login</Link></p>
               
              </form>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Signup2;