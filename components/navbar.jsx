export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <span style={styles.logo}>Sneha</span>
      <div style={styles.links}>
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    padding: "30px 12%",
    display: "flex",
    justifyContent: "space-between",
    position: "sticky",
    top: 0,
    background: "#0b0f19",
    zIndex: 10,
  },
  logo: { fontWeight: 700, fontSize: "18px" },
  links: { display: "flex", gap: "30px" },
};
