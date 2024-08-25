import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Intro } from "./components/Intro/Intro";
import { About } from ".//components/About/About";

function App() {

  

  return (
    <div className={styles.App}>
        <Navbar />
        <Intro />
        <div className={styles.container}>
          <About />
        </div>
    </div>
  )
}

export default App
