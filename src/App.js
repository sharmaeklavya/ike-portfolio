import "./App.css";
import React, { useState, useEffect } from "react";
import projects from "./Projects";

function App() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 1500);
    return () => clearTimeout(timeout);
  }, [show]);

  return (
    <React.Fragment>
      <nav
        id="top-menu"
        className="navbar sticky-top navbar-expand-lg navbar-light "
      >
        <div id="navi" className="container-fluid ">
          <a className="navbar-brand logo" href="/">
            <img src="imgs/logo34x35.svg" alt="logo-for-mobile" />
          </a>

          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  ms-auto mb-2 mb-lg-0 hamburger">
              <li className="nav-item m-1">
                <a className="nav-link nav__link rounded px-3" href="#work">
                  Work
                </a>
              </li>
              <li className="nav-item m-1">
                <a className="nav-link nav__link rounded px-3" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item m-1">
                <a
                  className="nav-link nav__link rounded px-3 active"
                  aria-current="page"
                  href="#home"
                >
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="row">
          <div id="home" className="col-md-6">
            <div className="introduction">
              <div className="kicker">
                <span>Hi there, </span>
                <img
                  src="https://raw.githubusercontent.com/iampavangandhi/iampavangandhi/master/gifs/Hi.gif"
                  alt="hey-there-emoji"
                  style={{ width: "30px" }}
                />
                <span> my name is</span>
              </div>
              {/* eslint-disable-next-line no-template-curly-in-string */}
              <h1 className="title">{"`${Eklavya}`"}</h1>
              <p className="tagline">
                <span>{"const work = "}</span>
                <span>{"'I BUILD FOR THE INTERNET'"}</span>
              </p>
              <p className="caption">
                <span>{"/* I am a Full Stack Developer"} </span>
                <br /> <span></span> {"based in New Delhi, India */"}
              </p>
              <div className="cta-btn">
                <a
                  href="mailto:eklavya092@gmail.com"
                  className="btn btn-warning"
                >
                  Hire me
                </a>
                <a
                  href="https://github.com/sharmaeklavya"
                  className="home-icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github-square"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/eklavyajs"
                  className="home-icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="/eklavya_developer.pdf"
                  className="home-icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fas fa-file-csv"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            {!show ? null : <div className="triangle" />}
            <div className="function">
              <div className="card">
                <div className="card-body text-primary">
                  <p className="my-2">
                    function <strong>Profile</strong> (fullName, skills)
                    <span>{" {"}</span>
                  </p>
                  <p className="mb-1 ms-3">
                    this.fullName = <strong>name</strong>;
                  </p>
                  <p className="mb-1 ms-3">
                    this.skills = <strong>skills</strong>;
                  </p>
                  <p>{"}"}</p>
                  <p>
                    const developer = new Profile (
                    <strong>&nbsp; 'Eklavya Sharma', </strong> [{" "}
                    <strong>'MongoDB', 'Express', 'ReactJS', 'NodeJS' </strong>]
                    )
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div
            id="about"
            className="col-md-12"
            style={{ scrollMarginTop: "6em" }}
          >
            <h2 className="section-title">About me</h2>
            <hr className="hr-tag" />
          </div>
          <div className="col-md-6">
            <p className="section-text mt-4">
              I love creating for the internet. I build solid and scalable
              frontend and backend products with great user experience. Attended
              an extensive bootcamp called Zen Class by Guvi, an IIT Madras
              incubated company - which helped me acquire new skills while
              gaining deep understanding of following technolgoies.
            </p>
          </div>
          <div className="col-md-6">
            <div className="about-logos">
              <span className="about-tech-logo">
                <i className="fab fa-html5"></i>
              </span>
              <span className="about-tech-logo">
                <i className="fab fa-css3-alt"></i>
              </span>
              <span className="about-tech-logo">
                <i className="fab fa-bootstrap"></i>
              </span>
              <span className="about-tech-logo">
                <i className="fab fa-js-square"></i>
              </span>
              <span className="about-tech-logo">
                <i className="fab fa-node" alt="NodeJS"></i>
              </span>
              <span className="about-tech-logo">
                <i className="fab fa-react"></i>
              </span>
              <span className="about-tech-logo">
                <img src="/imgs/expressjs.svg" alt="expressjs-logo" />
              </span>
              <span className="about-tech-logo">
                <img src="imgs/mongodbnosql.svg" alt="mongodb-logo" />
              </span>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div
            id="work"
            className="col-md-12"
            style={{ scrollMarginTop: "6em" }}
          >
            <h2 className="section-title">Projects</h2>
            <hr className="hr-tag" />
          </div>
          <div className="col-md-12">
            {projects.map((p, i) => (
              <div key={i} className="row align-items-center">
                <div className="col-md-6">
                  <div className="card mt-4 p-3 project-vessel">
                    <div className="card-body d-flex flex-column justify-content-between">
                      <div className="texts">
                        <h3 className="section-sub-title text-danger">
                          {p.name}
                        </h3>
                        <p
                          className="section-text text-primary mb-3"
                          style={{ width: "90%" }}
                        >
                          {p.description}
                        </p>
                        <div className="small text-dark mb-3">
                          <p className="mb-3">Credentials :</p>
                          <span className="pr-3">
                            <i className="fas fa-envelope-square px-2"></i>
                            {p.demoEmail}
                          </span>
                          <span className="pl-3">
                            <i className="fas fa-lock-open px-2"></i>
                            {p.demoPass}
                          </span>
                        </div>
                        {p.name === "Delivery App" ? (
                          <div className="small text-dark mb-3">
                            <small className="d-block px-2 mt-3">
                              Credit Card No : 4242 4242 4242 4242
                            </small>
                            <small className="small px-2 mt-3">
                              MM/YY : Any future date. CVV : Any 3 digits.
                            </small>
                          </div>
                        ) : null}
                      </div>
                      <div className="btns">
                        <button type="button" className="proj-btns">
                          <a href={p.liveDemo} target="_blank" rel="noreferrer">
                            Live Demo
                          </a>
                        </button>
                        <button type="button" className="proj-btns">
                          <a href={p.hostedAt} target="_blank" rel="noreferrer">
                            <i className="fab fa-github pe-2"></i>
                            GitHub
                          </a>
                        </button>
                      </div>
                    </div>
                    <div className="proj-tech-logo">
                      <span className="text-dark text-muted">
                        Technologies Used
                      </span>
                      &nbsp;
                      {p.technologies.map((l, i) => (
                        <img key={i} src={l} alt="logo" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-vessel">
                    <div className="card">
                      <div className="card-body p-0">
                        <a href={p.liveDemo} target="_blank" rel="noreferrer">
                          <img
                            className="proj-img"
                            src={p.projectImg}
                            alt={p.imgAlt}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="row mt-5">
          <div id="contact" className="col-md-12">
            <h2 className="section-title">Contact</h2>
            <hr className="hr-tag" />
          </div>
          <div className="col-md-6">
            <div className="email-btn">
              <a
                href="mailto: eklavya092@gmail.com"
                className="btn btn-warning"
              >
                Message me here
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="dev-img">
              <img src="imgs/developer.svg" alt="developer-icon" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
