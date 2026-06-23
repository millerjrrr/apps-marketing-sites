import { resetRange } from "../../store/rangeSlice";
import AppButton from "./AppButton";
import { useDispatch } from "react-redux";

const ResetRangeButton = () => {
  const dispatch = useDispatch();

  const handleReset = () => {
    if (
      window.confirm(
        "Are you sure you want to reset all hands to default values?"
      )
    ) {
      dispatch(resetRange());
    }
  };

  return <AppButton onClick={handleReset}>Reset Range</AppButton>;
};

export default ResetRangeButton;
