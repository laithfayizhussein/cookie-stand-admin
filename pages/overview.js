import React from 'react'
import Link from 'next/link'

const overview = () => {
    return (
     
        <header className="flex-1 p-2 text-3xl text-left bg-green-500 ">
          <Link href='/'><button className="float-right pl-1 pr-1 text-base bg-gray-100 ">Return to Main page</button></Link>
            <h1 className="p-5 text-3xl text-left font h-15">
                Cookie Stand Admin
            </h1>
        
        </header>
    )
}

export default overview