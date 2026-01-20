const designSkills = [
  "UI Design",
  "UX Research",
  "Wireframing",
  "Prototyping",
  "Figma",
  "Design Systems",
  "Accessibility",
];

const devSkills = [
  "HTML & CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "REST APIs",
];

export default function Skills() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2>Design, Development & Tools</h2>

        <p style={styles.intro}>
          A balance of user-centered design and practical engineering —
          allowing concepts to move smoothly from idea to implementation.
        </p>

        <h3 style={styles.subHeading}>Design & UX</h3>
        <div style={styles.grid}>
          {designSkills.map((skill) => (
            <div className="skill-card" key={skill}>
              {skill}
            </div>
          ))}
        </div>

        <h3 style={styles.subHeading}>Full-Stack Development</h3>
        <div style={styles.grid}>
          {devSkills.map((skill) => (
            <div className="skill-card" key={skill}>
              {skill}
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
  intro: {
    marginTop: "16px",
    maxWidth: "600px",
    color: "#9aa3b2",
    lineHeight: "1.7",
  },
  subHeading: {
    marginTop: "56px",
    marginBottom: "20px",
    fontSize: "1.1rem",
    color: "#7c83ff",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },
};
