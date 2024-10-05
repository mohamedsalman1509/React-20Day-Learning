import React from "react";
import "./style.module.css";


function project() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Main() {
  return (
    <main>
      <section id="about">
        <h1>Hi, I'm [Your Name]</h1>
        <p>
          A passionate developer focused on building impactful digital
          experiences.
        </p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>Project 1</h3>
          <p>Description of the project.</p>
          <a href="https://github.com/your-project">View on GitHub</a>
        </div>
        <div className="project-card">
          <h3>Project 2</h3>
          <p>Description of the project.</p>
          <a href="https://github.com/your-project">View on GitHub</a>
        </div>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <form>
          <label>Name:</label>
          <input type="text" name="name" />
          <label>Email:</label>
          <input type="email" name="email" />
          <label>Message:</label>
          <textarea name="message"></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <p>
        Connect with me on <a href="https://linkedin.com">LinkedIn</a>
      </p>
    </footer>
  );
}

export default project;
