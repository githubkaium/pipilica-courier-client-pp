import React from 'react';
import { useLocation, useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle, setUser, setIsLoading, handleRegistration, isLogin, handleNameChange, handleEmailChange, handlePasswordChange, toggleLogin, handleResetPassword, error } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                setUser(result.user);
                history.push(redirect_uri);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }


    return (
        <div className="login-form">
            <div>
                <form onSubmit={handleRegistration}>
                    <h3 className="text-primary">Please {isLogin ? 'Login' : 'Register'} before Booking</h3>
                    {!isLogin && <div className="row mb-3">
                        <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" onBlur={handleNameChange} className="form-control mx-2" placeholder="Your Name" />
                        </div>
                    </div>}
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input onBlur={handleEmailChange} type="email" className="form-control mx-2" placeholder="Your Email" id="inputEmail3" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input onBlur={handlePasswordChange} type="password" className="form-control mx-2" placeholder="At least 6 digits & 1 uppercase letter" id="inputPassword3" required />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-sm-10 offset-sm-2">
                            <div className="form-check">
                                <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                                <label className="form-check-label" htmlFor="gridCheck1">
                                    Already Registered?
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3 text-danger">{error}</div>
                    <button type="submit" className="btn btn-primary">{isLogin ? 'Login' : 'Register'}</button>
                    <button type="button" onClick={handleResetPassword} className="btn btn-success ms-2 text-white">Reset Password</button>
                </form>
                <button className="btn btn-regular bg-warning my-3" onClick={handleGoogleLogin}>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;