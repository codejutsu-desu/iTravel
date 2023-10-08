import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />

      <section>
        <h1>
          Anywhere you embark on journey
          <br />
          iTravel keeps track of your adventures.
        </h1>
        <h2>
          A world map that records your travels to various cities, ensuring you
          never lose memories of your amazing journeys and allowing you to share
          your adventures with friends, showcasing your exploration of the
          world.
        </h2>
        <Link to="/login" className="cta">
          Start tracking now
        </Link>
      </section>
    </main>
  );
}
