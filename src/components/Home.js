import Skills from "./Skills";

export default function Home() {
  return (
    <div className="home">
      <div>
        <div className="row">
          <div className="col-lg-8 hero-text">
            <p className="role">Front-end Developer</p>
            <h2 className="hero-title">Hi, I'm Osman Dumbuya</h2>
            <p className="description">
              I’m an electrical engineer turned software developer, currently
              living in Bristol. I enjoy crafting beautiful and accessible
              software that work well for everyone on the web.
            </p>
            <a href="/src/assets/osman-dumbuya-cv.pdf" download>
              <button className="primary-btn">
                <i className="fa fa-download"></i> Resume
              </button>
            </a>
          </div>
          <div className="col-lg img-container">
            <img
              className="img-fluid float-end img"
              src={require("../assets/images/osman-cropped-no-bg.png")}
              alt="Osman Dumbuya"
            />
          </div>
        </div>
      </div>
      <Skills />
    </div>
  );
}
