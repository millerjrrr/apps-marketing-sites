import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import AppButton from "./AppButton";

const ExportRangesButton = () => {
  const gridData = useSelector((state: RootState) => state.gridData);

  const exportRanges = () => {
    try {
      if (!gridData || Object.keys(gridData).length === 0) {
        alert("⚠️ No grid data found to export.");
        return;
      }

      // 1️⃣ Convert to formatted JSON string
      const jsonString = JSON.stringify(gridData, null, 2);

      // 2️⃣ Create blob and download link
      const blob = new Blob([jsonString], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "GridDataExport.json";
      link.click();

      // 3️⃣ Clean up
      URL.revokeObjectURL(url);

      alert("✅ Grid data exported successfully!");
    } catch (err) {
      console.error("Error exporting JSON:", err);
      alert("⚠️ Failed to export JSON file.");
    }
  };

  return <AppButton onClick={exportRanges}>Export Ranges to JSON</AppButton>;
};

export default ExportRangesButton;
