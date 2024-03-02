import { useMemo } from "react";
import styles from "./InnerFrame.module.css";

const InnerFrame = ({ qAColor, headingTextColor, profilColor, propColor }) => {
  const otherFunctionStyle = useMemo(() => {
    return {
      color: qAColor,
    };
  }, [qAColor]);

  const qAStyle = useMemo(() => {
    return {
      color: headingTextColor,
    };
  }, [headingTextColor]);

  const auslnderbehrdeStyle = useMemo(() => {
    return {
      color: profilColor,
    };
  }, [profilColor]);

  const profilStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <header className={styles.innerFrame}>
      <img className={styles.innerFrameChild} alt="" />
      <img
        className={styles.logoIcon}
        loading="lazy"
        alt=""
        src="/logo@2x.png"
      />
      <div className={styles.textFrame}>
        <div className={styles.categoryFrame}>
          <h3 className={styles.otherFunction} style={otherFunctionStyle}>
            Other Function
          </h3>
          <div className={styles.agencyText}>
            <h3 className={styles.qa} style={qAStyle}>{`Q&A`}</h3>
            <h3 className={styles.auslnderbehrde} style={auslnderbehrdeStyle}>
              Ausländerbehörde
            </h3>
          </div>
          <div className={styles.headingText}>
            <h3 className={styles.profil} style={profilStyle}>
              Profil
            </h3>
          </div>
        </div>
      </div>
    </header>
  );
};

export default InnerFrame;
