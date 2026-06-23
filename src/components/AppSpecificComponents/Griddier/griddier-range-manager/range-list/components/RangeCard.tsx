import type { StackSize } from "../../range-builder/types";
import colors from "../../range-builder/utils/colors";
import {
  setFeaturedHands,
  setHands,
} from "../../range-builder/store/rangeSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../range-builder/store";

const RangeCard: React.FC<{ name: string; stack: StackSize }> = ({
  name,
  stack,
}) => {
  const dispatch = useDispatch();
  const GridData = useSelector((state: RootState) => state.gridData);

  const OpenRangeInRangeEditor = async () => {
    const proceed = window.confirm(
      "Importing a range will overwrite your current range. Do you want to continue?"
    );
    if (!proceed) return;

    try {
      const { hands, featured } = GridData[stack + " " + name];
      dispatch(setHands({ hands, name: stack + " " + name }));
      dispatch(setFeaturedHands(featured));
    } catch (err) {
      console.error("Failed to import range: ", err);
      alert("Failed to import range. Make sure clipboard format is correct.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        width: 350,
        height: 50,
        borderStyle: "solid",
        borderRadius: 10,
        borderWidth: 2,
        marginBlock: 5,
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row",
        userSelect: "none",
      }}
      className="range-card"
      onClick={OpenRangeInRangeEditor}
    >
      <div
        style={{
          display: "flex",
          borderStyle: "solid",
          borderWidth: 2,
          borderColor: colors.CONTRAST,
          borderRadius: 25,
          width: 30,
          height: 30,
          alignItems: "center",
          justifyContent: "center",
          marginInline: 8,
        }}
      >
        <p className="range-card-text" style={{ fontSize: 15 }}>
          {" "}
          {stack}
        </p>
      </div>
      <p className="range-card-text">{name}</p>
    </div>
  );
};

export default RangeCard;
