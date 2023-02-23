import styles from "./layout.module.css";
import Rewards from "../../components/Rewards";

export default function RewardsPage() {
  return (
    <>
      <div className={styles.container}>
        <Rewards />
        {children}
      </div>
    </>
  );
}
