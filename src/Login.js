import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'

export const Login = () => {

    const history =useHistory()
    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')

    const login = (e)=>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(email,password)    
        .then( (auth)=>{
            //logged in ,redirect to homepage
            history.push('/')
        }).catch((e)=> alert(e.message))
    }

    const register = (e)=>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email,password)    
        .then( (auth)=>{
            //created a userand logged in ,redirect to homepage
            history.push('/')
        }).catch((e)=> alert(e.message))
    }
    return (
        <div className='login'>
            <Link to='/' >
            <img className='login__image'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
            alt=''
            />
            </Link>
            <div className='login__container'>
                <form>
                <h1>Sign-In</h1>

                <h5>E-mail</h5>

                <input onChange={ e => setEmail(e.target.value)} value={email} type='email'/>

                <h5>Password</h5>

                <input  onChange={ e => setPassword(e.target.value)} value={password} type='password' />

                <button
                onClick={login} 
                type='submit'
                 className='login__signInButton'>Sign In</button>

                <p className='login__containerMessage'>By signing-in you agree to Amazon's conditions of use and sale.Please see our Privacy Notice,our Cookies Notice and our Internet-Based Ads Notice</p>

                <button 
                onClick={register}
                className='login__registerButton'>Create your amazon account</button>

                </form>
            </div>
        </div>
    )
}
