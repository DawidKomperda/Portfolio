import React, { useState } from "react";
import styles from "./style";
import { About, Contact, Footer, Hero, Projects, Skills, Navbar} from "./components";
const App = () => {
  const [backgroundPosition, setBackgroundPosition] = useState(false);
  Array.from(document.getElementsByClassName("menu-item")).forEach((item, index) => {
    item.onmouseover = () => {
      document.getElementById("menu-background-animation").className = 'menu-background-position-' + index;
    }
  });
  return (
  <div className='bg-primary w-full h-screenoverflow-hidden text-secondary'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <div className={""} id="menu-background-animation">
          <Navbar />
          <div className="menu-background-pattern"></div>
        </div>
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Projects />
        <Skills />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
    
  </div>

)};

export default App