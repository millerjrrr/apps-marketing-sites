import React from "react";
import { useDispatch } from "react-redux";
import { setHandAction } from "../store/rangeSlice";
import type { HandActions, ValidFraction } from "../types";
import colors from "../utils/colors";

const { ALLIN, RAISE, CALL, PRIOR, FOLD } = colors;

type GridCellProps = {
  hand: string;
  handActions: HandActions;
};

const GridCell: React.FC<GridCellProps> = ({ hand, handActions }) => {
  const dispatch = useDispatch();
  const { prior = 1, allin = 0, raise = 0, call = 0 } = handActions;

  const percentMap = (value: number) => `${value * 25}%`;
  const priorHeight = percentMap(prior);
  const allinWidth = percentMap(allin);
  const raiseWidth = percentMap(raise);
  const callWidth = percentMap(call);

  const updateAction = (action: keyof HandActions) => {
    const current = { ...handActions };

    if (action === "prior") {
      // Simple cycle for prior: 0 → 1 → 2 → 3 → 4 → 0
      current.prior = (((current.prior ?? 1) + 1) % 5) as ValidFraction;
    } else {
      const otherTotal =
        (current.allin ?? 0) +
        (current.raise ?? 0) +
        (current.call ?? 0) -
        (current[action] ?? 0);

      // If first click (current[action] === 0), fill to max 4
      if (current[action] === 0) {
        current[action] = Math.min(4 - otherTotal, 4) as ValidFraction;
      } else {
        // Cycle down: x → x-1 → ... → 0 → 0 → ... (then first click logic will apply again)
        current[action] = ((current[action]! - 1 + 5) % 5) as ValidFraction;
      }

      // Ensure sum never exceeds 4
      let total =
        (current.allin ?? 0) + (current.raise ?? 0) + (current.call ?? 0);
      const reduceOrder: (keyof HandActions)[] = ["allin", "raise", "call"];
      while (total > 4) {
        for (let key of reduceOrder) {
          if (key !== action && current[key]! > 0) {
            current[key]! -= 1;
            total -= 1;
            break;
          }
        }
      }
    }

    dispatch(setHandAction({ hand, handActions: current }));
    console.log(current);
  };

  const resetCell = () => {
    dispatch(
      setHandAction({
        hand,
        handActions: { allin: 0, raise: 0, call: 0, prior: 4 },
      })
    );
  };

  return (
    <div
      style={{
        width: 35,
        height: 35,
        backgroundColor: PRIOR,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        position: "relative",
      }}
      onContextMenu={(e) => {
        e.preventDefault(); // prevent default right-click menu
        resetCell();
      }}
    >
      {/* Prior bar */}
      <div
        style={{
          width: "100%",
          height: priorHeight,
          backgroundColor: FOLD,
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{ height: "100%", width: allinWidth, backgroundColor: ALLIN }}
        />
        <div
          style={{ height: "100%", width: raiseWidth, backgroundColor: RAISE }}
        />
        <div
          style={{ height: "100%", width: callWidth, backgroundColor: CALL }}
        />
      </div>

      {/* Hand label */}
      <span
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "black",
          fontWeight: "bold",
          fontSize: "12px",
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        {hand}
      </span>

      {/* Clickable corners */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "50%",
          height: "50%",
          cursor: "pointer",
        }}
        onClick={() => updateAction("allin")}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50%",
          height: "50%",
          cursor: "pointer",
        }}
        onClick={() => updateAction("raise")}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "50%",
          height: "50%",
          cursor: "pointer",
        }}
        onClick={() => updateAction("call")}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "50%",
          height: "50%",
          cursor: "pointer",
        }}
        onClick={() => updateAction("prior")}
      />
    </div>
  );
};

export default GridCell;
