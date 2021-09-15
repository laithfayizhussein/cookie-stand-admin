import React from 'react'
import Head from 'next/head'
import CookieStandHeader from './Header'
import CookieStandForm from './Main'
import Footer from './Footer'
import { useState , useEffect  } from 'react'

function CookieStandAdmin(props){
    const [located,setLocated] = useState('0')
    const [title, setTitle] = useState('Cookie Stand Admin')
    const [link, setLink] = useState('/overview')
    const [titleLink, setTitleLink] = useState('Overview')
    return (
        <div className="flex flex-col items-center justify-center w-full h-full overflow-x-hidden text-2xl bg-green-100 ">
            <Head  title={title}/>
            <div className="w-screen h-screen bg-green-100 ">
                 
            <CookieStandHeader header={title}link={link} titleLink={titleLink}user={username}/>
            <CookieStandForm  title={title}setLocated={setLocated} username={username} password={password}/>
            <Footer located={located}/>
            </div>
      </div>
    )
}
export default CookieStandAdmin