import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store";
import type { PokerHand} from "../types";
import  { sortHands } from "../types";
import colors from "../utils/colors";
import { setFeaturedHands } from "../store/rangeSlice";

const FeaturedGridCell: React.FC<{ pokerHand: PokerHand }> = ({
  pokerHand,
}) => {
  const { featured } = useSelector((state: RootState) => state.range);
  const dispatch = useDispatch();
  console.log(featured);
  const isFeatured = featured.includes(pokerHand);

  const toggleFeatured = (pokerHand: PokerHand) => {
    let newFeatured: PokerHand[];

    if (isFeatured) {
      // Remove the hand
      newFeatured = featured.filter((hand) => hand !== pokerHand);
    } else {
      // Add the hand
      newFeatured = [...featured, pokerHand];
    }

    // Sort them if needed (optional helper)
    newFeatured = sortHands(newFeatured);

    dispatch(setFeaturedHands(newFeatured));
  };

  return (
    <div
      style={{
        width: 35,
        height: 35,
        backgroundColor: isFeatured ? colors.SECONDARY : colors.PRIMARY,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        color: isFeatured ? colors.GOLD : colors.CONTRAST,
        fontSize: 12,
        cursor: "pointer",
        userSelect: "none",
      }}
      onClick={() => toggleFeatured(pokerHand)}
    >
      {pokerHand}
    </div>
  );
};

export default FeaturedGridCell;
