import NextPageButton4 from "./NextPageButton4";
import styles from "./ModeawarenessButton.module.css";

const ModeawarenessButton = () => {
  return (
    <div className={styles.modeawarenessButton}>
      <div className={styles.selectionFrame}>
        <div className={styles.hardSkillsFrame}>
          <div className={styles.maxSkillsLabel}>
            <h1 className={styles.whatHardSkills}>
              WHAT HARD SKILLS DO YOU BRING WITH, MAX?
            </h1>
          </div>
          <div className={styles.professionButton}>
            <div className={styles.modeawarenessSelection}>
              <div className={styles.bildschirmfoto20240215Um0} />
            </div>
            <div className={styles.modeButton}>
              <div className={styles.selectionButton}>
                <div className={styles.professionLabel}>
                  <button className={styles.button1}>
                    <div className={styles.berufsausbildung}>
                      Berufsausbildung
                    </div>
                  </button>
                  <button className={styles.button2}>
                    <div className={styles.selection14}>
                      <div className={styles.modebewusstsein}>
                        Modebewusstsein
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div className={styles.nextPageButton}>
                <button className={styles.button3}>
                  <div className={styles.selection141}>
                    <div className={styles.modebewusstsein1}>
                      Friseurberatung
                    </div>
                  </div>
                </button>
                <div className={styles.profileFrame}>
                  <button className={styles.button4}>
                    <div className={styles.selection142}>
                      <div className={styles.modebewusstsein2}>
                        Salonmanagement
                      </div>
                    </div>
                  </button>
                </div>
                <button className={styles.button5}>
                  <div className={styles.selection143}>
                    <div className={styles.modebewusstsein3}>Stylist</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NextPageButton4 />
    </div>
  );
};

export default ModeawarenessButton;
