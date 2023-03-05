export default function Contact() {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <div>
        <div className="row">
          <div className="col">
            <p>
              Got a project in mind or just want to chat? Drop me a line! Fill
              out my contact form below or find me on social media.
            </p>
            <div className="socials">
              <a
                href="mailto:dumbuyaosman@icloud.com"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-solid fa-envelope" alt="Email envelope icon"></i>
                <span>Email me for a chat</span>
              </a>
              <a
                href="https://www.linkedin.com/in/osman-dumbuya-148581108/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-linkedin" alt="LinkedIn icon"></i>
                <span>Connect with me</span>
              </a>
              <a
                href="https://github.com/OsmanTolo"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-github" alt="GitHUB icon"></i>
                <span>Checkout my projects</span>
              </a>
              <a
                href="https://twitter.com/OsmanTolo_"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-twitter" alt="Twitter icon"></i>
                <span>Follow me on Twitter</span>
              </a>
            </div>
          </div>
          <div className="col">
            <form>
              <label>
                <span>Your Name:</span>
                <input type="text" name="name" required />
              </label>
              <label>
                <span>Your email:</span>
                <input type="email" name="email" required />
              </label>
              <label>
                <span>Your message:</span>
                <textarea name="message" required></textarea>
              </label>
              <button type="submit" class="primary-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
