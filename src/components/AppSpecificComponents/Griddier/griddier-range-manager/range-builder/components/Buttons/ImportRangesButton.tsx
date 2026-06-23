import { useDispatch } from "react-redux";
import { isValidGridData } from "../../utils/gridDataValidator";
import { overwriteGridData } from "../../store/gridDataSlice";
import AppButton from "./AppButton";

const ImportRangesButton = () => {
  const dispatch = useDispatch();

  const importRanges = async () => {
    const proceed = window.confirm(
      "Are you sure you want to import this file and overwrite the database?"
    );
    if (!proceed) return;

    try {
      // 1️⃣ Create a hidden file input
      const input = document.createElement("input");
      input.type = "file";
      input.accept = ".json";
      input.click();

      input.onchange = async (e) => {
        const file = (e.target as HTMLInputElement).files?.[0];
        if (!file) return;

        const text = await file.text();
        const parsed = JSON.parse(text);
        console.log(parsed);

        // 2️⃣ Validate structure
        if (isValidGridData(parsed)) {
          dispatch(overwriteGridData(parsed));
          alert("✅ Grid data imported successfully!");
        } else {
          alert(
            "❌ Invalid JSON structure — does not match GridDataEntry format."
          );
        }
      };
    } catch (err) {
      console.error("Error importing JSON:", err);
      alert("⚠️ Failed to import JSON file.");
    }
  };

  return (
    <AppButton onClick={importRanges}>Import Ranges in JSON format</AppButton>
  );
};

export default ImportRangesButton;
