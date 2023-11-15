import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";


const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        console.log(email, password, accepted);
        if (password.length < 6) {
            setRegisterError('At least 6 character long');
            return;
        }
        else if (! /[A-Z]/.test(password)) {
            setRegisterError('your password should have at least one upper case characters.');
            return;
        }
        else if (!accepted) {
            setRegisterError('Please accept our terms and condition');
            return;

        }
        setRegisterError(''); //reset errror
        setSuccess(''); //reset sucess
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('User Created Successfully');
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            })

    }



    return (
        <div>
            <div className="mx-auto w-1/2">
                <h2 className="text-3xl mb-8  ">Please Register</h2>
                <form onSubmit={handleRegister}>
                    <input className="px-4 py-2 mb-4 w-full" type="email" name="email" placeholder="Email Address" id="" required />
                    <br />
                    <div className="mb-4 relative">
                        <input className="px-4 py-2 w-full" type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" id="" required />
                        <span className="absolute top-3 right-2" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </span>
                    </div>
                    <br />

                    <div className="mb-2">
                        <input type="checkbox" name="terms" id="terms" /> <label className="ml-2" htmlFor="terms">Accept our <a href="">Terms and Conditions</a></label>
                    </div>
                    <br />
                    <input className="btn btn-secondary mb-4 w-full" type="submit" value='Register' id="" />
                </form>
                {
                    registerError && <p className="text-red-600">{registerError}</p>
                }
                {
                    success && <p className="text-green-600">{success}</p>
                }
                <p>Already have an account ? please <Link to='/login'>Log In Now</Link></p>
            </div>
        </div>
    );
};

export default Register;