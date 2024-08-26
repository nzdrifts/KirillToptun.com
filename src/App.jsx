import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Intro } from "./components/Intro/Intro";
import { About } from "./components/About/About";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";

function App() {

  

  return (
    <div className={styles.App}>
      <Navbar />
      <Intro />
      <div className={styles.container}>
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App
