export default function About() {
  return (
    <div className="about">
      <h1>About Me</h1>
      <div className="row about-content">
        <div class="col img-container">
          <img
            className="img-fluid mx-auto d-block img-container"
            src={require("../assets/images/books.jpg")}
            alt="Osman Dumbuya"
          />
        </div>
        <div class="col about-description description">
          <p>
            I’m an electrical engineer turned software developer, currently
            living in Bristol. I enjoy crafting beautiful and accessible
            software that work well for everyone on the web.
          </p>
          <p>Things I'm excited about at the moment:</p>
          <ul>
            <li>Agile development</li>
            <li>Reading non-fiction books</li>
            <li>Creating web development content</li>
          </ul>
          <p>
            When I'm not working on personal projects, I like to go to the gym.
            I also enjoy watching and talking about football.
          </p>
        </div>
      </div>
    </div>
  );
}
