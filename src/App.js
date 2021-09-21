import "./App.css";

function App() {
  return (
    <>
      <nav
        id="top-menu"
        className="navbar sticky-top navbar-expand-lg navbar-light"
      >
        <div id="navi" className="container-fluid">
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 hamburger">
              <li className="nav-item bg-light px-2 m-1 rounded border border-primary">
                <a
                  className="nav-link text-primary active"
                  aria-current="page"
                  href="#work"
                >
                  Work
                </a>
              </li>
              <li className="nav-item bg-light px-2 m-1 rounded border border-primary">
                <a className="nav-link text-primary active" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item bg-light px-2 m-1 rounded border border-primary">
                <a className="nav-link text-primary active" href="#home">
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
              <p className="kicker">Hi there, my name is</p>
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
              <div className="cta-btn mt-3">
                <a
                  href="mailto:eklavya092@gmail.com"
                  className="btn btn-warning"
                >
                  Hire me
                </a>
                <a href="https://github.com/sharmaeklavya" className="github">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="triangle" />
            <div className="function pt-5">
              <div className="card">
                <div className="card-body text-primary">
                  <p className="mt-2 mb-1">
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
        <div className="row">
          <div id="about" className="col-md-12 mt-5">
            <h2 className="section-title pt-5">About me</h2>
            <hr className="hr-tag" />
          </div>
          <div className="col-md-6">
            <p className="section-text mt-4">
              I love creating for the internet. I build solid and scalable
              frontend and backend products with great user experience. Attended
              an extensive bootcamp called as Zen Class by Guvi, an IIT Madras
              incubated company - which helped me learned new skills and gaining
              deep understanding of these technolgoies.
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
                <img src="imgs/mongodb.svg" alt="mongodb-logo" />
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div id="work" className="col-md-12 mt-5">
            <h2 className="section-title pt-3">Projects</h2>
            <hr className="hr-tag" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card mt-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 p-5">
                    <h3 className="section-sub-title text-danger">Invoice</h3>
                    <p className="section-text text-primary">
                      Invoice has three level of user access - Admin, Manager
                      and Executive. These users have different level of
                      privileges. Where Admin can create, update, view and
                      delete, managers can create, update and view, followed by
                      executives who can only create and view.
                    </p>
                    <button type="button" className="proj-btns">
                      <a
                        href="https://proj-invoice.netlify.app"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo
                      </a>
                    </button>
                    <button type="button" className="proj-btns">
                      <a
                        href="https://github.com/sharmaeklavya/react-invoice"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-github pe-2"></i>
                        Frontend
                      </a>
                    </button>
                    <button type="button" className="proj-btns">
                      <a
                        href="https://github.com/sharmaeklavya/node-invoice"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-github pe-2"></i>
                        Backend
                      </a>
                    </button>
                  </div>
                  <div className="col-md-6 m-auto">
                    <a
                      href="https://proj-invoice.herokuapp.com"
                      target="_blank"
                      rel="noreferrer"
                      className="proj-img"
                    >
                      <img src="imgs/proj-invoice.png" alt="invoice-task" />
                    </a>
                    <div className="proj-tech-logo">
                      <i className="fab fa-react"></i>
                      <i className="fab fa-bootstrap"></i>
                      <img src="/imgs/expressjs.svg" alt="expressjs-logo" />
                      <img src="imgs/mongodb.svg" alt="mongodb-logo" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mt-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 p-5">
                    <div className="project">
                      <h3 className="section-sub-title text-danger">
                        URL Shortner
                      </h3>
                      <p className="section-text text-primary">
                        This project is designed to create short urls which are
                        much easier to share with other people. The user can
                        also track the times of link he/ she has clicked. The
                        information is saved in individual's account.
                      </p>
                      <button type="button" className="proj-btns">
                        <a
                          href="https://proj-url-shortner.netlify.app"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live Demo
                        </a>
                      </button>
                      <button type="button" className="proj-btns">
                        <a
                          href="https://github.com/sharmaeklavya/react-url-shortner"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-github pe-2"></i>
                          Frontend
                        </a>
                      </button>
                      <button type="button" className="proj-btns">
                        <a
                          href="https://github.com/sharmaeklavya/node-url-shortner"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-github pe-2"></i>
                          Backend
                        </a>
                      </button>
                    </div>
                  </div>
                  <div className="col-md-6 m-auto">
                    <a
                      href="https://proj-url-shortner.netlify.app"
                      target="_blank"
                      rel="noreferrer"
                      className="proj-img"
                    >
                      <img src="imgs/proj-url.png" alt="url-shortner-task" />
                    </a>
                    <div className="proj-tech-logo">
                      <i className="fab fa-react"></i>
                      <i className="fab fa-bootstrap"></i>
                      <img src="/imgs/expressjs.svg" alt="expressjs-logo" />
                      <img src="imgs/mongodb.svg" alt="mongodb-logo" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mt-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 p-5">
                    <h3 className="section-sub-title text-danger">Zen Media</h3>
                    <p className="section-text text-primary">
                      It is a community forum. A user can search through
                      numemous topics, comment on them or write their own
                      articles.
                    </p>
                    <button type="button" className="proj-btns">
                      <a
                        href="https://etask.netlify.app/zenportal/index.html"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo
                      </a>
                    </button>
                    <button type="button" className="proj-btns">
                      <a
                        href="https://github.com/sharmaeklavya/guvi/tree/main/zenportal"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-github pe-2"></i>
                        Frontend
                      </a>
                    </button>
                  </div>
                  <div className="col-md-6 m-auto">
                    <a
                      href="https://etask.netlify.app/zenportal/index.html"
                      target="_blank"
                      rel="noreferrer"
                      className="proj-img"
                    >
                      <img
                        src="imgs/proj-zen-portal.png"
                        alt="zen-portal-task"
                      />
                    </a>
                    <div className="proj-tech-logo">
                      <i className="fab fa-html5"></i>
                      <i className="fab fa-css3-alt"></i>
                      <i className="fab fa-bootstrap"></i>
                      <i className="fab fa-js-square"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 mt-5">
            <h2 className="section-title pt-3">Contact</h2>
            <hr className="hr-tag" />
          </div>
          <div className="col-md-6">
            <div className="email-btn">
              <a
                href="mailto: eklavya092@gmail.com"
                className="btn btn-warning"
              >
                Email me
              </a>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="dev-img">
              <img src="imgs/developer.svg" alt="developer-icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
