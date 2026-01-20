export default function About() {
  return (
    <section className="about-section">
      {/* TOP PART */}
      <div className="about-top">
        {/* LEFT */}
        <div className="about-text">
          <span className="about-pill">About Me</span>

          <p className="about-para">
            Hi, I’m <strong>Sneha De</strong>, a Computer Science (Cyber Security)
            undergraduate with a strong interest in UI/UX design and frontend
            development.
          </p>

          <p className="about-para">
            With a background in full-stack development, I design interfaces
            that are not only visually clean but also practical, scalable, and
            developer-friendly.
          </p>

          <p className="about-para">
            I enjoy transforming complex problems into simple, intuitive user
            experiences and building polished digital products from concept to
            implementation.
          </p>
        </div>

        {/* RIGHT */}
        <div className="about-image">
          <img
            src="/myphoto1.png"
            alt="Sneha De"
            className="about-photo-img"
          />
        </div>
      </div>

      {/* BOTTOM CARD */}
      <div className="about-bottom">
        <div>
          <h4>Education</h4>
          <p>B.Tech CSE (Cyber Security)</p>
          <p>Graphic Era University</p>
        </div>

        <div>
          <h4>Soft Skills</h4>
          <p>Communication</p>
          <p>Teamwork</p>
          <p>Critical Thinking</p>
          <p>Time Management</p>
        </div>

        <div>
          <h4>Technical Skills</h4>
          <div className="tech-grid icons-only">
            <div className="tech-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="Figma" />
            </div>
            <div className="tech-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" />
            </div>
            <div className="tech-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="Next.js" />
            </div>
            <div className="tech-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML" />
            </div>
            <div className="tech-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS" />
            </div>
            <div className="tech-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" />
            </div>
            <div className="tech-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
            </div>
            <div className="tech-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" />
            </div>
            <div className="tech-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" alt="Postman" />
            </div>
          </div>
        </div>

        <div>
          <h4>Interests</h4>
          <p>Design Trends</p>
          <p>Technology</p>
          <p>Product Design</p>
        </div>
      </div>
    </section>
  );
}
