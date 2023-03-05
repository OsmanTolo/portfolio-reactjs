export default function Home() {
  return (
    <div className="home">
      <div>
        <div className="row">
          <div className="col hero-text">
            <p className="role">Front-end Developer</p>
            <h1>Hello, I'm Osman Dumbuya.</h1>
            <p className="description">
              I’m an electrical engineer turned software developer, currently
              living in Bristol. I enjoy crafting beautiful and accessible
              software that work well for everyone on the web.
            </p>
          </div>
          <div className="col">
            <img
              className="img-fluid mx-auto d-block"
              src={require("../images/osman-cropped-no-bg.png")}
              alt="Osman Dumbuya"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
