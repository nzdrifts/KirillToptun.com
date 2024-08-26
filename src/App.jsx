import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Intro } from "./components/Intro/Intro";
import { About } from "./components/About/About";
import { Projects } from "./components/Projects/Projects";

function App() {

  

  return (
    <div className={styles.App}>
      <Navbar />
      <Intro />
      <div className={styles.container}>
        <About />
        <Projects />
      </div>
    </div>
  )
}

export default App
