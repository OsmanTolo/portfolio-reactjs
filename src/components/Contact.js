export default function Contact() {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <div className="row contact-layout">
        <div className="col">
          <p className="description">
            Got a project in mind or just want to chat? Drop me a line! Fill out
            my contact form or find me on social media.
          </p>
          <div className="contact-socials">
            <div className="contact-social__item">
              <a
                className="contact-social__link"
                href="mailto:dumbuyaosman@icloud.com"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <i
                    class="fa-solid fa-envelope contact-social__icon"
                    alt="Email envelope icon"
                  ></i>
                </span>
                <span className="contact-social__description">
                  Email me for a chat
                </span>
              </a>
            </div>
            <div className="contact-social__item">
              <a
                className="contact-social__link"
                href="https://www.linkedin.com/in/osman-dumbuya-148581108/"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <i
                    class="fa-brands fa-linkedin contact-social__icon"
                    alt="LinkedIn icon"
                  ></i>
                </span>
                <span className="contact-social__description">
                  Connect with me
                </span>
              </a>
            </div>
            <div className="contact-social__item">
              <a
                className="contact-social__link"
                href="https://github.com/OsmanTolo"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <i
                    class="fa-brands fa-github contact-social__icon"
                    alt="GitHUB icon"
                  ></i>
                </span>
                <span className="contact-social__description">
                  Checkout my projects
                </span>
              </a>
            </div>
            <div className="contact-social__item">
              <a
                className="contact-social__link"
                href="https://twitter.com/OsmanTolo_"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <i
                    class="fa-brands fa-twitter contact-social__icon"
                    alt="Twitter icon"
                  ></i>
                </span>
                <span className="contact-social__description">
                  Follow me on Twitter
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="col form">
          <form>
            <div class="mb-3">
              <label for="name" class="form-label">
                Full Name
              </label>
              <input type="name" class="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
              />
              <div id="emailHelp" className="form-text">
                Don't worry, this is not for another newsletter you'll not read.
              </div>
            </div>
            <div className="mb-3">
              <label for="textArea" className="form-label">
                Say hello
              </label>
              <textarea
                className="form-control"
                placeholder="Leave a message here"
                id="textArea"
              ></textarea>
            </div>
            <button type="submit" className="primary-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
