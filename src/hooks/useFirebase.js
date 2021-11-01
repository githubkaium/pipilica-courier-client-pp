import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, sendPasswordResetEmail, signOut } from "firebase/auth";
import initializeAuthentication from '../components/Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const auth = getAuth();

    const toggleLogin = e => {
        setIsLogin(e.target.checked);
    }
    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleRegistration = e => {
        e.preventDefault();

        if (password.length < 6) {
            setError('Password must be 6 characters long.')
            return;
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Password must contain 1 Uppercase.');
            return;
        }

        isLogin ? processLogin(email, password) : registerNewUser(email, password);

    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setError('');
                verifyEmail();
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => { })
    }

    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => { })
    }

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }
    //OBSERVE USER STATE CHANGE
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        isLogin,
        error,
        setIsLoading,
        setUser,
        toggleLogin,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        handleResetPassword,
        signInUsingGoogle,
        logOut,
    }
}

export default useFirebase;