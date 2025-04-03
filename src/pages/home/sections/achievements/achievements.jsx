import styles from "./Achievements.module.css";

import Wave from "../../Wave";

import { achievements, testimonials } from "../../../../database/data";

function Achievements() {
  return (
    <div className="home-section" id="achievements">
      <h2 className="hidden">Achievements</h2>
      <div className={styles.achievements}></div>
      <div className={styles.testimonials}></div>
      <Wave
        id={4}
        height={50}
        colorOld={"#0a0c10"}
        colorNew={["#24292f"]}
        waveCode={[
          "M0 151L69 151L69 229L138 229L138 381L208 381L208 383L277 383L277 96L346 96L346 178L415 178L415 492L485 492L485 391L554 391L554 496L623 496L623 147L692 147L692 461L762 461L762 359L831 359L831 206L900 206L900 271L900 601L900 601L831 601L831 601L762 601L762 601L692 601L692 601L623 601L623 601L554 601L554 601L485 601L485 601L415 601L415 601L346 601L346 601L277 601L277 601L208 601L208 601L138 601L138 601L69 601L69 601L0 601Z",
        ]}
      />
    </div>
  );
}

export default Achievements;
