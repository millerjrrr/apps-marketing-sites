import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import colors from "../utils/colors";
import calculateFrequencies from "../utils/calculateFrequencies";

const SubBar: React.FC<{ freq: number; combos: number; color: string }> = ({
  freq,
  combos,
  color,
}) => {
  if (freq === 0) return null;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          backgroundColor: color,
          height: 20,
          borderRadius: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ fontSize: 12 }}>{Math.round(freq * 1000) / 10}%</span>
      </div>
      <span style={{ fontSize: 10, color: colors.CONTRAST }}>
        {combos} combos
      </span>
    </div>
  );
};

const FrequencyBar: React.FC = () => {
  const hands = useSelector((state: RootState) => state.range.hands);
  const { ALLIN, RAISE, CALL, FOLD } = colors;

  const {
    allinPercentage,
    raisePercentage,
    callPercentage,
    foldPercentage,
    allinCombos,
    raiseCombos,
    callCombos,
    foldCombos,
  } = calculateFrequencies(hands);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: 600,
        paddingBottom: 20,
      }}
    >
      <SubBar freq={allinPercentage} combos={allinCombos} color={ALLIN} />
      <SubBar freq={raisePercentage} combos={raiseCombos} color={RAISE} />
      <SubBar freq={callPercentage} combos={callCombos} color={CALL} />
      <SubBar freq={foldPercentage} combos={foldCombos} color={FOLD} />
    </div>
  );
};

export default FrequencyBar;
