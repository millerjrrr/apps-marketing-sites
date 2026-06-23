import { useSelector } from "react-redux";
import type { RootState } from "../store/index";
import { handsArray } from "../types";

import GridCell from "./GridCell";

export default function HandEditor() {
  const hands = useSelector((state: RootState) => state.range.hands);

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
        const handActions = hands[hand] || {
          allin: 0,
          raise: 0,
          call: 0,
          prior: 1,
        };
        return <GridCell key={hand} hand={hand} handActions={handActions} />;
      })}
    </div>
  );
}
