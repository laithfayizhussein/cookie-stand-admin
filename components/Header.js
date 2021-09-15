import Link from 'next/link'
export default function CookieStandHeader() {
    return (
        <header className="flex-1 p-2 text-4xl text-left bg-green-500 ">
          <Link href='/overview'><button className="float-right pl-1 pr-1 text-base bg-gray-100 ">Overview</button></Link>
            <h1 className="p-5 text-4xl text-left font h-15">Cookie Stand Admin</h1>
            <nav className="flex flex-row justify-around">
                {
                    props.user&&
                    <h2 className="p-3 mr-3 bg-green-100 rounded-lg">{props.user}</h2>
                }

                <Link href={props.link}>
                    <a className="p-4 bg-green-100 rounded-lg" >{props.titleLink}</a>
                </Link>
            </nav>
        </header>
    )
}