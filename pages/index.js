import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import CookieStandForm from '../components/Main'
import CookieStandAdmin from '../components/CookieStandAdmin'
import LoginForm from '../components/LoginForm'
import Head from '../components/Head'
import Header from '../components/Header'
export default function MainIndex(){

  const [userName, setUserName] =useState('laith')
  const [savedPassword, setPassword] =useState('12345')
  const [loggedIn, setLoggedIn] =useState(false)

  function change(username,password){
    if (username == userName && password == savedPassword){
      setLoggedIn(true)
    }
  }
  return(
    <div className="flex h-screen bg-green-100 ">
      {
        loggedIn ? <CookieStandAdmin username={userName}password={savedPassword}/> : <LoginForm state={change}/>
      }
    </div>
  )
}