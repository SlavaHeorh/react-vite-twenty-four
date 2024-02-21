import logo from '/vite.svg'

export default function Header() {
    const now = new Date()
    const name = "logo"

    return (
        <header>
            <img src={logo} alt={name}/>
            {/*<h3>Learn React</h3>*/}

            <span>Time now: { now.toLocaleTimeString() }</span>
        </header>
    )
}