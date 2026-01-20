export default function Hero() {
  return (
    <section className="hero" style={{ border: 'none', outline: 'none' }}>
      <div className="hero-wrapper">
        {/* LEFT */}
        <div className="hero-content">
          <p className="hero-role">UI/UX Designer & Web Developer</p>

          <h1>
            Hi, I’m <span>Sneha De</span>
          </h1>

          <p className="hero-desc">
            I design thoughtful, user-centered digital experiences and build
            them with clean, scalable code.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-visual">
          <img
            src="/hero_mockup.png"
            alt="UI design preview"
          />
        </div>
      </div>
    </section>
  );
}
