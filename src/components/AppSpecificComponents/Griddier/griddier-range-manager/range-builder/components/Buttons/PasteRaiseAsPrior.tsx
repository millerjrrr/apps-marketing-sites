import { handsArray, type Hand } from "../../types";
import AppButton from "./AppButton";
import {
  setFeaturedHands,
  setHandAction,
} from "../../store/rangeSlice";
import { useDispatch } from "react-redux";

const PasteRaiseAsPrior = () => {
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
      const newFeatureHands:Hand[]= [];

      await dataLines.forEach((line) => {
        const [hand, , raiseStr] = line.split("\t");
        if (!hand || !handsArray.includes(hand)) return;

        const handActions = {
          allin: 0 as 0 | 1 | 2 | 3 | 4,
          raise: 0 as 0 | 1 | 2 | 3 | 4,
          call: 0 as 0 | 1 | 2 | 3 | 4,
          prior: Number(raiseStr) as 0 | 1 | 2 | 3 | 4,
        };

        dispatch(setHandAction({ hand: hand as any, handActions }));
        if (Number(raiseStr) > 0) newFeatureHands.push(hand);
      });
      dispatch(setFeaturedHands(newFeatureHands));
      setTimeout(() => alert("Range imported successfully!"), 1000);
    } catch (err) {
      console.error("Failed to import range: ", err);
      alert("Failed to import range. Make sure clipboard format is correct.");
    }
  };

  return <AppButton onClick={handleImportCSV}>Paste Raise As Prior</AppButton>;
};

export default PasteRaiseAsPrior;
