import { useMemo } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({
  rectangle3,
  qAMargin,
  fourteenthLevelFrameMargin,
  profilMargin,
  propMargin,
}) => {
  const otherFunction1Style = useMemo(() => {
    return {
      margin: qAMargin,
    };
  }, [qAMargin]);

  const qA1Style = useMemo(() => {
    return {
      margin: fourteenthLevelFrameMargin,
    };
  }, [fourteenthLevelFrameMargin]);

  const auslnderbehrde1Style = useMemo(() => {
    return {
      margin: profilMargin,
    };
  }, [profilMargin]);

  const profil1Style = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  return (
    <header className={styles.instanceParent}>
      <img className={styles.frameChild} alt="" src="/rectangle-1.svg" />
      <img
        className={styles.logoIcon}
        loading="lazy"
        alt=""
        src="/logo@2x.png"
      />
      <div className={styles.secondaryFrame}>
        <div className={styles.thirdLevelFrame}>
          <img
            className={styles.thirdLevelFrameChild}
            loading="lazy"
            alt=""
            src={rectangle3}
          />
          <h3 className={styles.otherFunction} style={otherFunction1Style}>
            Other Function
          </h3>
          <div className={styles.qAArea}>
            <h3 className={styles.qa} style={qA1Style}>{`Q&A`}</h3>
            <h3 className={styles.auslnderbehrde} style={auslnderbehrde1Style}>
              Ausländerbehörde
            </h3>
          </div>
          <div className={styles.fourteenthLevelFrame}>
            <h3 className={styles.profil} style={profil1Style}>
              Profil
            </h3>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent;
