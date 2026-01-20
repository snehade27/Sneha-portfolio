const projects = [
  {
    title: "FlavorForge — Smart Recipe Assistant",
    description:
      "Designed and built a recipe discovery experience focusing on clarity, usability, and secure user authentication.",
  },
  {
    title: "Job Application Tracker",
    description:
      "Created a clean dashboard UI to help users track job applications with minimal cognitive load.",
  },
  {
    title: "Expense Tracker Web App",
    description:
      "Designed a simple interface for real-time income and expense tracking with clear visual hierarchy.",
  },
];

export default function CaseStudies() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2>Selected Work</h2>

        <div style={styles.grid}>
          {projects.map((project) => (
            <div className="skill-card" key={project.title}>
              <h3 style={styles.title}>{project.title}</h3>
              <p style={styles.desc}>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "100px 0",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 24px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
    marginTop: "40px",
  },
  title: {
    marginBottom: "10px",
    fontSize: "1.1rem",
  },
  desc: {
    color: "#9aa3b2",
    lineHeight: "1.7",
  },
};
