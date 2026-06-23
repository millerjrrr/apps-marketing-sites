import { handsArray } from "../../types";
import AppButton from "./AppButton";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

const CopyRangeButton = () => {
  const hands = useSelector((state: RootState) => state.range.hands);

  const handleCopyCSV = () => {
    // CSV header
    const header = ["Hand", "Allin", "Raise", "Call", "Prior"];

    // Create CSV rows
    const rows = handsArray.map((hand) => {
      const handData = hands[hand] || { allin: 0, raise: 0, call: 0, prior: 1 };
      return [
        hand,
        handData.allin ?? 0,
        handData.raise ?? 0,
        handData.call ?? 0,
        handData.prior ?? 1,
      ].join("\t");
    });

    // Combine header + rows
    const csvContent = [header.join("\t"), ...rows].join("\n");

    // Copy to clipboard
    navigator.clipboard
      .writeText(csvContent)
      .then(() => {
        alert(
          "CSV copied to clipboard! You can now paste it into Google Sheets."
        );
      })
      .catch((err) => {
        console.error("Failed to copy CSV: ", err);
      });
  };

  return <AppButton onClick={handleCopyCSV}>Copy Range</AppButton>;
};

export default CopyRangeButton;
