import FrameComponent from "../components/FrameComponent";
import ModeawarenessButton from "../components/ModeawarenessButton";
import styles from "./Category3.module.css";

const Category3 = () => {
  return (
    <div className={styles.category1}>
      <FrameComponent
        rectangle3="pending_140:51"
        qAMargin="0"
        fourteenthLevelFrameMargin="0"
        profilMargin="0"
        propMargin="0"
      />
      <section className={styles.buttonSelectionFrame}>
        <ModeawarenessButton />
      </section>
    </div>
  );
};

export default Category3;
