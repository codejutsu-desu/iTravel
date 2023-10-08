import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/">
      <img src="/logo.PNG" alt="" className={styles.logo} />
    </Link>
  );
}

export default Logo;
