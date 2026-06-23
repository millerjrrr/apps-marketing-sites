import type { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { deleteGrid } from "../../store/gridDataSlice";
import colors from "../../utils/colors";
import { Trash2 } from "lucide-react";
import AppButton from "./AppButton";
import { resetRange } from "../../store/rangeSlice";

const DeleteRangeButton = () => {
  const { name } = useSelector((state: RootState) => state.range);
  const GridData = useSelector((state: RootState) => state.gridData);

  const dispatch = useDispatch();
  const handleDeleteRange = () => {
    const proceed = window.confirm(
      "Are you sure you want to delete this range?"
    );
    if (!proceed) return;

    if (!Object.keys(GridData).includes(name)) {
      alert("No range by this name exists");
      return;
    }

    dispatch(deleteGrid(name));
    alert("✅ Grid data imported successfully!");

    dispatch(resetRange());
  };

  return (
    <AppButton onClick={handleDeleteRange}>
      <Trash2 size={20} color={colors.CONTRAST} />
    </AppButton>
  );
};

export default DeleteRangeButton;
