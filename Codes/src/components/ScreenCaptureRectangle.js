import NextPageButton3 from "./NextPageButton3";
import styles from "./ScreenCaptureRectangle.module.css";

const ScreenCaptureRectangle = () => {
  return (
    <div className={styles.screenCaptureRectangle}>
      <div className={styles.modeAwarenessButton}>
        <h1 className={styles.whatAreYour}>
          WHAT ARE YOUR OPERATIVE SKILLS, MAX?
        </h1>
      </div>
      <footer className={styles.selectionButton}>
        <div className={styles.selectionInstance}>
          <div className={styles.modeAwarenessFrame}>
            <div className={styles.rectangleContainer}>
              <div className={styles.bildschirmfoto20240215Um0Wrapper}>
                <div className={styles.bildschirmfoto20240215Um0} />
              </div>
              <div className={styles.selectionModeButtonParent}>
                <div className={styles.selectionModeButton}>
                  <div className={styles.button6Parent}>
                    <button className={styles.button6}>
                      <div className={styles.selection14}>
                        <div className={styles.modebewusstsein}>
                          Hygienestandards
                        </div>
                      </div>
                    </button>
                    <div className={styles.modeAwareButton}>
                      <button className={styles.button7}>
                        <div className={styles.selection141}>
                          <div className={styles.modebewusstsein1}>
                            Kopfhaar
                          </div>
                        </div>
                      </button>
                    </div>
                    <button className={styles.button8}>
                      <div className={styles.selection142}>
                        <div className={styles.modebewusstsein2}>Salon</div>
                      </div>
                    </button>
                  </div>
                </div>
                <div className={styles.nextPageFrame}>
                  <button className={styles.button9}>
                    <div className={styles.selection143}>
                      <div className={styles.modebewusstsein3}>
                        Kommunikation
                      </div>
                    </div>
                  </button>
                  <div className={styles.selectionFrame}>
                    <button className={styles.button10}>
                      <div className={styles.selection144}>
                        <div className={styles.modebewusstsein4}>
                          Haarschnitt
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className={styles.selectionFrame1}>
                    <button className={styles.button11}>
                      <div className={styles.selection145}>
                        <div className={styles.modebewusstsein5}>Styling</div>
                      </div>
                    </button>
                  </div>
                  <button className={styles.button12}>
                    <div className={styles.selection146}>
                      <div className={styles.modebewusstsein6}>Pflege</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.nextPageButton}>
              <div className={styles.button13Parent}>
                <button className={styles.button13}>
                  <div className={styles.selection147}>
                    <div className={styles.modebewusstsein7}>Beratung</div>
                  </div>
                </button>
                <button className={styles.button14}>
                  <div className={styles.selection148}>
                    <div className={styles.modebewusstsein8}>
                      Qualitätsstandards
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <NextPageButton3 />
      </footer>
    </div>
  );
};

export default ScreenCaptureRectangle;
