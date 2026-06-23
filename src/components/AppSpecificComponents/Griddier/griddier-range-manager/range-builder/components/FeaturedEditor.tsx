import { handsArray } from "../types";

import FeaturedGridCell from "./FeaturedGridCell";

export default function FeaturedEditor() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(13, 35px)", // 13 columns
        gap: "2px",
        padding: "1rem",
      }}
    >
      {handsArray.map((hand) => {
        return <FeaturedGridCell key={hand} pokerHand={hand} />;
      })}
    </div>
  );
}
