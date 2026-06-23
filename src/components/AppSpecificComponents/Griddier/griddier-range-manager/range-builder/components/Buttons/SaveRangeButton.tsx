import type { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { validateRangeName } from "../../utils/validateRangeName";
import { addGridData } from "../../store/gridDataSlice";
import { Save } from "lucide-react";
import colors from "../../utils/colors";
import AppButton from "./AppButton";

const SaveRangeButton = () => {
  const { name, hands, featured } = useSelector(
    (state: RootState) => state.range
  );
  const GridData = useSelector((state: RootState) => state.gridData);

  const dispatch = useDispatch();

  const handleSaveRange = () => {
    if (!validateRangeName(name)) {
      alert(
        '❌ Invalid Grid Name. Grid Name must be of the type "[StackSize][Position][...]" eg. "100 CO Random Grid Name"'
      );
      return;
    }

    if (Object.keys(GridData).includes(name)) {
      const proceed = window.confirm(
        "A range with this name already exists in your DB, do you want to replace it?"
      );
      if (!proceed) return;
    }

    dispatch(
      addGridData({
        [name]: {
          hands,
          featured,
        },
      })
    );
    alert("✅ Grid data imported successfully!");
  };

  return (
    <AppButton onClick={handleSaveRange}>
      <Save size={20} color={colors.CONTRAST} />
    </AppButton>
  );
};

export default SaveRangeButton;
