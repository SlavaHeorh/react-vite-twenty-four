import logo from '/vite.svg'
import {useState} from "react";

export default function Header() {
    const [now, setNow] = useState(new Date())

    setInterval(() => setNow(new Date()),1000)

    const name = "logo"

    return (
        <header>
            <img src={logo} alt={name}/>

            <span>Time now: { now.toLocaleTimeString() }</span>
        </header>
    )
}