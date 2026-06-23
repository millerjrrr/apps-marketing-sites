import colors from "../range-builder/utils/colors";
import RangeCard from "./components/RangeCard";
import { useSelector } from "react-redux";
import type{ RootState } from "../range-builder/store";
import { stackSizes } from "../range-builder/types";

const RangeList = () => {
  // Generate list of RangeCards
  const GridData = useSelector((state: RootState) => state.gridData);
  const showEmptyMessage = Object.keys(GridData).length === 0;

  const CardList = showEmptyMessage ? (
    <p
      className="range-card-text"
      style={{
        width: 350,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      No ranges saved
    </p>
  ) : (
    Object.keys(GridData).map((key) => {
      const name = key.slice(key.indexOf(" ") + 1);
      const stackFromName = Number(key.slice(0, key.indexOf(" "))) as any;

      const stack = stackSizes.includes(stackFromName) ? stackFromName : 100;

      return <RangeCard key={key} name={name} stack={stack} />;
    })
  );

  return (
    <div
      style={{
        borderColor: colors.TERTIARY,
        borderStyle: "solid",
        borderWidth: 5,
        backgroundColor: colors.PRIMARY,
        borderRadius: 50,
        position: "relative",
        maxHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: "90vh",
          overflowY: "scroll",
          padding: 25,
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE + Edge
        }}
      >
        {CardList}
      </div>
      <style>
        {`
          /* Hide scrollbar for Chrome, Safari and Opera */
          div::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </div>
  );
};

export default RangeList;
