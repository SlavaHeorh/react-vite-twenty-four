import Header from './components/Head.jsx'
import WayToLearn from "./components/WayToLearn.jsx";
import { ways } from "./data.js";
import Button from "./components/Button/Button.jsx";

export default function App() {
  return (
      <div>
          <Header />
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
                  <Button>Click One</Button>
                  <Button>Click Two</Button>
                  <Button>Click Three</Button>
              </section>
          </main>
      </div>
  )
}