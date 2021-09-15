import Head from "../components/Head";
import { useState } from "react";
import userName from "./index"
import CookieStandHeader from "../components/Header";

export default function overview() {
    const [title, setTitle] = useState('Overview')
    const [link, setLink] = useState('/')
    const [titleLink, setTitleLink] = useState('back to Main Page')
    const [username, setUserName] =useState(userName)
    return (
        <div>
            <Head title={title} />
            <div className="w-screen h-screen bg-green-100 " >
                <Header link={link} titleLink={titleLink} header={title} />
            </div>

        </div>
    )
}