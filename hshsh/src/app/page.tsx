import "./page.css";

import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className="body" id="home">
        <header className={styles.headerr}>
          <div>
            <img src="/reboot13.png" className={styles.logo} />
          </div>
          <div className={styles.h_buttons1}>
            <a href="#home">
              <button className={styles.button1}>Home</button>
            </a>
            <a href="#projects">
              <button className={styles.spaces}>Projects</button>
            </a>
            <a href="#about">
              <button className={styles.spaces}>About</button>
            </a>
            <a href="#contact">
              <button>Contact</button>
            </a>
          </div>
        </header>
        <div className="box1">
          <div>
            <div className="text1">
              Hello, <br />I am <span className="text1p">Krutik Raut.</span>
            </div>
            <div className="text2">Web Designer/Developer</div>
            <div className="rowj">
              <a href="#contact">
                <button className={styles.buttn1}>Contact</button>
              </a>
              <a href="#projects">
                <button className={styles.buttn2}>Projects</button>
              </a>
            </div>
          </div>
          <div>
            <img src="/laptop.png" />
          </div>
        </div>
        <div className="box2">
          <div className="boxies">
            <div className="blacks">50+</div>
            <div className="greys">Projects Completed</div>
          </div>
          <div className="boxies">
            <div className="blacks">45+</div>
            <div className="greys">Github Repository</div>
          </div>
          <div className="boxies">
            <div className="blacks">5+</div>
            <div className="greys">Years of Experience</div>
          </div>
          <div className="boxies">
            <div className="blacks">700+</div>
            <div className="greys">Youtube Subscribers</div>
          </div>
        </div>
        <div className={styles.box3} id="about">
          <div>
            <hr className={styles.hr1} />
            <div className={styles.text_1}>A Bit About Me...</div>
            <div className={styles.text_2}>
              Hello, My name is Krutik Raut AKA reboot13. <br /> I am a CSE
              Undergraduate at Parul University. <br /> I’m currently learning
              UI/UX development. Checkout my projects on github.
              <br />
              <span className={styles.link}>@reboot13-git</span>
            </div>
          </div>
          <div>
            <img src="/Mockup.png" className="picc2" />
          </div>
        </div>
        <div className="skills" id="projects">Skills</div>
        <div className="box4">
          <div>
            <div className={styles.skillz}>HTML</div>
            <div className={styles.skillz1}>CSS</div>
            <div className={styles.skillz}>JavaScript</div>
          </div>
          <div>
            <div className={styles.skillz}>PHP</div>
            <div className={styles.skillz1}>SCSS</div>
            <div className={styles.skillz}>Typescript</div>
          </div>
          <div>
            <div className={styles.skillz}>SQL</div>
            <div className={styles.skillz1}>C/C++</div>
            <div className={styles.skillz}>Node Js</div>
          </div>
          <div>
            <div className={styles.skillz}>Python</div>
            <div className={styles.skillz1}>Responsive Design</div>
            <div className={styles.skillz}>UI/UX Design</div>
          </div>
        </div>
        <div className="box5" id="contact">
          <div>
            <div className="w_text">Contact</div>
            <div className="sw_text">
              Want a website for your brand and business?
              <br />I design what you desire....
            </div>
            <div>
              <img src="/hs.png" />
            </div>
          </div>
          <div>
            <form className="col">
              <label className={styles.labels}>Name</label>
              <input type="text" className="inputs"></input>
              <label className={styles.labels}>Email</label>
              <input type="email" className="inputs"></input>
              <label className={styles.labels}>Message</label>
              <textarea className="textar"></textarea>
              <button type="submit" className={styles.subm}>
                Submit
              </button>
            </form>
          </div>
        </div>
        <footer className="footer">
          <div className={styles.f_text}>@reboot13_dev </div>
        </footer>
      </div>
    </>
  );
}
