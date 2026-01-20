export default function Contact() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2>Let’s Connect</h2>

        <p style={styles.text}>
          I’m open to UI/UX design internships, frontend roles, and collaborative
          projects.
        </p>

        <p style={styles.text}>
          📧 desneha2004@gmail.com  
          <br />
          Contact Number- 7060984656
        </p>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "120px 0",
  },
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "0 24px",
    textAlign: "center" as const,
  },
  text: {
    marginTop: "20px",
    color: "#9aa3b2",
    lineHeight: "1.8",
  },
};
