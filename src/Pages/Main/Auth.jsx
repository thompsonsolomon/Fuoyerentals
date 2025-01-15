import React from 'react'
import { AuthCard } from '../../Components/Main'

function Auth() {
    return (
        <div>
            <AuthCard pathName="Auth_home" />
        </div>
    )
}

export default Auth

export const Login = () => {
    return (
        <div>
            <AuthCard pathName="login" />
        </div>
    )
}

export const Register = () => {
    return (
        <div>
            <AuthCard pathName="register" />
        </div>
    )
}

export const ForgottenPassword = () => {
    return (
        <div>
            <AuthCard pathName="forgotPassword" />
        </div>
    )
} 

export const AgentRegistration = () => {
    return (
        <div>
            <AuthCard pathName="registerAgent" />
        </div>
    )
} 