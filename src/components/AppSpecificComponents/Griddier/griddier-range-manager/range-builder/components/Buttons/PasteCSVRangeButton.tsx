import { handsArray } from "../../types";
import AppButton from "./AppButton";
import { setHandAction } from "../../store/rangeSlice";
import { useDispatch } from "react-redux";

const PasteCSVRangeButton = () => {
  const dispatch = useDispatch();

  const handleImportCSV = async () => {
    const proceed = window.confirm(
      "Importing a range will overwrite your current range. Do you want to continue?"
    );
    if (!proceed) return;

    try {
      const text = await navigator.clipboard.readText();
      if (!text) return alert("Clipboard is empty");
      const lines = text.trim().split("\n");
      // Ignore header
      const dataLines = lines.slice(1);

      await dataLines.forEach((line) => {
        const [hand, allinStr, raiseStr, callStr, priorStr] = line.split("\t");
        if (!hand || !handsArray.includes(hand)) return;

        const handActions = {
          allin: Number(allinStr) as 0 | 1 | 2 | 3 | 4,
          raise: Number(raiseStr) as 0 | 1 | 2 | 3 | 4,
          call: Number(callStr) as 0 | 1 | 2 | 3 | 4,
          prior: Number(priorStr) as 0 | 1 | 2 | 3 | 4,
        };

        dispatch(setHandAction({ hand: hand as any, handActions }));
      });
      setTimeout(() => alert("Range imported successfully!"), 1000);
    } catch (err) {
      console.error("Failed to import range: ", err);
      alert("Failed to import range. Make sure clipboard format is correct.");
    }
  };

  return <AppButton onClick={handleImportCSV}>Paste CSV Range</AppButton>;
};

export default PasteCSVRangeButton;
