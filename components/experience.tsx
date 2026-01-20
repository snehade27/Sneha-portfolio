export default function Experience() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2>Experience & Achievements</h2>

        <ul style={styles.list}>
          <li>500+ Data Structures & Algorithms problems solved</li>
          <li>Certified Ethical Hacker (CEH)</li>
          <li>Salesforce Developer Training — Agentblazer Program</li>
          <li>Core Committee Member — Computer Society of India</li>
          <li>Hosted and managed department-level events</li>
        </ul>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "100px 0",
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "0 24px",
  },
  list: {
    marginTop: "30px",
    color: "#9aa3b2",
    lineHeight: "2",
    paddingLeft: "20px",
  },
};
