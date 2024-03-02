import FrameComponent from "../components/FrameComponent";
import FrameD from "../components/FrameD";
import styles from "./Start.module.css";

const Start = () => {
  return (
    <div className={styles.start}>
      <FrameComponent
        rectangle3="pending_140:62"
        qAMargin="unset"
        fourteenthLevelFrameMargin="unset"
        profilMargin="unset"
        propMargin="unset"
      />
      <FrameD />
    </div>
  );
};

export default Start;
