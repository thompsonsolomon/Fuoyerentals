import React, { useState } from 'react'
import "../Styles/Auth.scss"
import {SignUpAgent, signInAccount, createUserAccount, ResetPassword, WebsiteName } from '../Utils/api'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Email, Https, Person, Phone } from '@material-ui/icons'
import { CircularProgress } from '@material-ui/core'
import Alert from '../UI/Alert'
function AuthCard({ pathName }) {
    return (
        <>
            {
                pathName === "Auth_home" ?
                    <AuthHome /> : pathName === "login" ?
                        <Login /> : pathName === "register" ?
                            <Register /> : pathName === "forgotPassword" ?
                                <ForgotPassword /> : pathName === "registerAgent" ?
                                    <AgentRegister /> :
                                    <AuthHome />
            }
        </>

    )
}
export default AuthCard

export const AuthHome = () => {
    const history = useHistory()
    const handleGoBack = () => {
        history.go("-1")
    }
    return (
        <div className='AuthCon'>
            <div className="AuthWrapper">
                <div className="AuthCards">
                    <div className="cardtopCon">
                        <div className="TopRight">
                            <hr />
                            <div className="circle"></div>
                        </div>
                        <Link to="/" className="Topleft">
                            <div className="circle-sm active"></div>
                            <div className="circle-sm "></div>
                            <div className="circle-sm active"></div>
                            <div className="circle-sm"></div>
                            <div className="circle-sm"></div>
                        </Link>
                    </div>

                    <div>
                        <div className="heading">
                            <h2>Welcome to the Auth Page</h2>
                        </div>
                        <div className="AuthCard_Item">
                            <div className="heading">
                                <h3>Join the <WebsiteName /> Community </h3>
                                <hr />
                            </div>
                            <div className="content">
                                <Link to="login">
                                    Login to <WebsiteName />
                                </Link>
                                <Link to="requestAgent">
                                    Request to be an Agent
                                </Link>
                                <button onClick={() => handleGoBack()}>Go Back</button>
                            </div>
                        </div>
                    </div>

                    <div className="cardtopCon  down">

                        <Link to="/home" className="Topleft">
                            <div className="circle-sm active"></div>
                            <div className="circle-sm "></div>
                            <div className="circle-sm active"></div>
                            <div className="circle-sm"></div>
                            <div className="circle-sm"></div>
                        </Link>

                        <div className="TopRight">
                            <hr />
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const HandleLogin = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const user = await signInAccount(email, password);
            console.log('Signed in user:', user);
                        Alert("success", "Login Successful")
                        history.push("/")
            setLoading(false)
        } catch (error) {
            console.error('Error signing up:', error.message);
                        Alert("error", error.message)

            setLoading(false)
        }

    };

    return (
        <div className='AuthCon'>
            <div className="AuthWrapper">
                <div className="AuthCards">
                    <div className="cardtopCon">
                        <div className="TopRight">
                            <hr />
                            <div className="circle"></div>
                        </div>
                        <Link to="/home" className="Topleft">
                            <div className="circle-sm active"></div>
                            <div className="circle-sm "></div>
                            <div className="circle-sm active"></div>
                            <div className="circle-sm"></div>
                            <div className="circle-sm"></div>
                        </Link>
                    </div>

                    <div>
                        <div className="heading">
                            <h2>Welcome to the Auth Page</h2>
                        </div>
                        <div className="AuthCard_Item">
                            <div className="heading">
                                <h3>Login To <WebsiteName /> </h3>
                                <hr />
                            </div>
                            <div className="content">
                                <form onSubmit={HandleLogin}
                                >
                                    <div className="formInputContainer">
                                        <div className="formInputWrapper">
                                            <label htmlFor="email">
                                                <Person />
                                            </label>
                                            <input type="email" name='email' id='email' autoFocus required

                                                onChange={(e) => setEmail(e.target.value)}


                                                placeholder='example@...' />
                                        </div>
                                        <div className="formInputWrapper">
                                            <label htmlFor="password"><Https /></label>
                                            <input type="password" name='password' id='password' required onChange={(e) => setPassword(e.target.value)}
                                                placeholder='******' minLength={6} />
                                        </div>
                                    </div>
                                    <div className="formLinks">
                                        <div className="important-note">
                                            <strong>Note:</strong> password entered is case-sentive to
                                            the one entered during signing up of new account
                                        </div>
                                        <div className="checking">
                                            <label className="checkbox" htmlFor="checkbox">
                                                <input
                                                    className="checkbox"
                                                    id="checkbox"
                                                    type="checkbox"
                                                />
                                                Remember me
                                            </label>
                                            <Link
                                                to="/forgotpassword"
                                                className="forgotpassword"
                                            >
                                                Forgot password ?
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="formBtns">
                                        <button type='submit' className='' >
                                            {
                                                loading ?
                                                    <CircularProgress className="loading" />
                                                    : "Login"
                                            }
                                        </button>
                                        <Link
                                            to="/register"
                                            className='registerbtn'>
                                            Register
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="cardtopCon  down">

                        <Link to="/home" className="Topleft">
                            <div className="circle-sm active"></div>
                            <div className="circle-sm "></div>
                            <div className="circle-sm active"></div>
                            <div className="circle-sm"></div>
                            <div className="circle-sm"></div>
                        </Link>

                        <div className="TopRight">
                            <hr />
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const HandleRegister = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const user = await createUserAccount(email, password, name, phone);
            console.log('Signed in user:', user);
                        Alert("success", "Account Created")
                        setLoading(false)
                        history.push("/login")
                    } catch (error) {
                        console.error('Error signing up:', error.message);
                        Alert("error", error.message)
            setLoading(false)
        }

    }
    return (
        <div className='AuthCon'>
            <div className="AuthWrapper">
                <div className="AuthCards">
                    <div className="cardtopCon">
                        <div className="TopRight">
                            <hr />
                            <div className="circle"></div>
                        </div>
                        <Link to="/home" className="Topleft">
                            <div className="circle-sm active"></div>
                            <div className="circle-sm "></div>
                            <div className="circle-sm active"></div>
                            <div className="circle-sm"></div>
                            <div className="circle-sm"></div>
                        </Link>
                    </div>

                    <div>
                        <div className="heading">
                            <h2>Welcome to the Auth Page</h2>
                        </div>
                        <div className="AuthCard_Item">
                            <div className="heading">
                                <h3>Create <WebsiteName /> Account </h3>
                                <hr />
                            </div>
                            <div className="content">
                                <form onSubmit={HandleRegister}>
                                    <div className="formInputContainer">



                                        <div className="formInputWrapper">
                                            <label htmlFor="name">
                                                <Person />
                                            </label>
                                            <input
                                                type="text"
                                                name='name'
                                                id='name'
                                                autoFocus
                                                required
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder='John Doe'
                                            />
                                        </div>



                                        <div className="formInputWrapper">
                                            <label htmlFor="email">
                                                <Email />
                                            </label>
                                            <input
                                                type="email"
                                                name='email'
                                                id='email'
                                                required
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder='example@...'
                                            />
                                        </div>
                                        <div className="formInputWrapper">
                                            <label htmlFor="number">
                                                <Phone />
                                            </label>
                                            <input
                                                type="number"
                                                name='number'
                                                id='number'
                                                required
                                                onChange={(e) => setPhone(e.target.value)}
                                                placeholder='+234...'
                                            />
                                        </div>
                                        <div className="formInputWrapper">
                                            <label htmlFor="password"><Https /></label>
                                            <input
                                                type="password"
                                                name='password'
                                                id='password'
                                                required
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder='******'
                                                minLength={6}
                                            />
                                        </div>
                                    </div>
                                    <div className="formLinks">
                                        <div className="important-note">
                                            <strong>Note:</strong> password entered must be greater or equal to 6 characters
                                        </div>
                                        <div className="checking">
                                            <label className="checkbox" htmlFor="checkbox">
                                                <input
                                                    className="checkbox"
                                                    id="checkbox"
                                                    type="checkbox"
                                                />
                                                Remember me
                                            </label>
                                            {/* <Link
                                                to="/forgotpassword"
                                                className="forgotpassword"
                                            >

                                            </Link> */}
                                        </div>
                                    </div>

                                    <div className="formBtns">
                                        <button type='submit' className=''>
                                            {/* loading class is isLoading */}
                                            {
                                                loading ?
                                                    <CircularProgress /> : "Register"
                                            }

                                        </button>
                                        <Link
                                            to="/login"
                                            className='registerbtn'>
                                            login
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="cardtopCon  down">

                        <Link to="/home" className="Topleft">
                            <div className="circle-sm active"></div>
                            <div className="circle-sm "></div>
                            <div className="circle-sm active"></div>
                            <div className="circle-sm"></div>
                            <div className="circle-sm"></div>
                        </Link>

                        <div className="TopRight">
                            <hr />
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export const ForgotPassword = () => {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState("")
    const history = useHistory()
    const HandleProceed = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await ResetPassword(email);
            console.log('Signed in user:', response);
            setLoading(false)
            Alert("success", "Check Email to recover account")
            history.push("/login")
        } catch (error) {
            console.error('Error signing up:', error.message);
                        Alert("error", error.message)
            setLoading(false)
        }
    };

    return (
        <div className='AuthCon'>
            <div className="AuthWrapper">
                <div className="AuthCards">
                    <div className="cardtopCon">
                        <div className="TopRight">
                            <hr />
                            <div className="circle"></div>
                        </div>
                        <Link to="/home" className="Topleft">
                            <div className="circle-sm active"></div>
                            <div className="circle-sm "></div>
                            <div className="circle-sm active"></div>
                            <div className="circle-sm"></div>
                            <div className="circle-sm"></div>
                        </Link>
                    </div>

                    <div>
                        <div className="heading">
                            <h2>Welcome to the Auth Page</h2>
                        </div>
                        <div className="AuthCard_Item">
                            <div className="heading">
                                <h3>Forgot Your Password? </h3>
                                <hr />
                            </div>
                            <div className="content">
                                <form onSubmit={HandleProceed}
                                >
                                    <div className="formInputContainer">

                                        <div className="formInputWrapper">
                                            <label htmlFor="email">
                                                <Email />
                                            </label>
                                            <input
                                                type="email"
                                                name='email'
                                                id='email'
                                                autoFocus
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                                placeholder='example@...'
                                            />
                                        </div>
                                    </div>
                                    <div className="formLinks">
                                        <div className="important-note">
                                            No need to worry, Enter your registered email, a password reset link will be sent to you
                                        </div>
                                    </div>

                                    <div className="formBtns">
                                        <button type='submit' className='' >
                                            {
                                                loading ?
                                                    <CircularProgress className="loading" />
                                                    : "Submit"
                                            }
                                        </button>

                                        <Link
                                            to="/login"

                                            className='registerbtn'>
                                            login
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="cardtopCon  down">

                        <Link to="/home" className="Topleft">
                            <div className="circle-sm active"></div>
                            <div className="circle-sm "></div>
                            <div className="circle-sm active"></div>
                            <div className="circle-sm"></div>
                            <div className="circle-sm"></div>
                        </Link>

                        <div className="TopRight">
                            <hr />
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export const AgentRegister = () => {
    const [email, setEmail] = useState("");
    const RequestAdmin = async (e) =>{
    e.preventDefault()
        try{
            const res = await SignUpAgent(email)
            console.log("You will recive a response soon ", res)
                        Alert("success", "Check Email to  Proceed")
        }
        catch(error){
            console.log(error.message)
                        Alert("error", error.message)
        }
    }
    return (
        <div className='AuthCon'>
            <div className="AuthWrapper">
                <div className="AuthCards">
                    <div className="cardtopCon">
                        <div className="TopRight">
                            <hr />
                            <div className="circle"></div>
                        </div>
                        <Link to="/home" className="Topleft">
                            <div className="circle-sm active"></div>
                            <div className="circle-sm "></div>
                            <div className="circle-sm active"></div>
                            <div className="circle-sm"></div>
                            <div className="circle-sm"></div>
                        </Link>
                    </div>

                    <div>
                        <div className="heading">
                            <h2>Welcome to the Auth Page</h2>
                        </div>
                        <div className="AuthCard_Item">
                            <div className="heading">
                                <h3>Join <WebsiteName /> Community </h3>
                                <hr />
                            </div>
                            <div className="content">
                                <form onSubmit={RequestAdmin}>
                                    <div className="formInputContainer">

                                        <div className="formInputWrapper">
                                            <label htmlFor="email">
                                                <Email />
                                            </label>
                                            <input
                                                type="email"
                                                name='email'
                                                id='email'
                                                autoFocus
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                                placeholder='example@...'
                                            />
                                        </div>
                                    </div>
                                    <div className="formLinks">
                                        <div className="important-note">
                                            Enter your registered email, check email wethin 48 hours to complete registeration
                                        </div>
                                    </div>

                                    <div className="formBtns">
                                        <button type='submit' className=''>
                                            {/* loading class is isLoading */}
                                            {/* <CircularProgress className="loading" />  */}
                                            Submit
                                        </button>
                                        <Link
                                            to="/login"
                                            className='registerbtn'>
                                            login
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="cardtopCon  down">

                        <Link to="/home" className="Topleft">
                            <div className="circle-sm active"></div>
                            <div className="circle-sm "></div>
                            <div className="circle-sm active"></div>
                            <div className="circle-sm"></div>
                            <div className="circle-sm"></div>
                        </Link>

                        <div className="TopRight">
                            <hr />
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

