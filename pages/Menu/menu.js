import Menu from "../../components/Menu";
import styles from "./layout.module.css";

export default function MenuPage() {
  return (
    <>
      <div className={styles.container}>
        <Menu />
        {children}
      </div>
    </>
  );
}
