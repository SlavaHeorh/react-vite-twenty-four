import Header from './components/Head.jsx'
import WayToLearn from "./components/WayToLearn.jsx";
import {ways, differences} from "./data.js";
import Button from "./components/Button/Button.jsx";
import { useState } from 'react'

export default function App() {
    const [ content, setContent] = useState('push the button')

    function handleClick(type) {
        setContent(type)
    }

    return (
        <div>
            <Header/>
            <main>
                <section>
                    <h3>Learning</h3>

                    <ul>
                        <WayToLearn {...ways[0]}/>
                        <WayToLearn {...ways[1]} />
                        <WayToLearn {...ways[2]} />
                        <WayToLearn {...ways[3]} />
                    </ul>
                </section>
                <section>
                    <h3>Next Step</h3>

                    <Button onClick={() => handleClick('way')}>Click One!</Button>
                    <Button onClick={() => handleClick('easy')}>Click Two!</Button>
                    <Button onClick={() => handleClick('program')}>Click Three!</Button>
                    <p>{differences[content]}</p>
                </section>
            </main>
        </div>
    )
}