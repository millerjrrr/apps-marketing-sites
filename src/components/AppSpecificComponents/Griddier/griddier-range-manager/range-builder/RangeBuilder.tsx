import HandEditor from "./components/HandEditor"; // <-- import the component
import FrequencyBar from "./components/FrequencyBar";
import colors from "./utils/colors";
import NameTag from "./components/NameTag";
import ImportRangesButton from "./components/Buttons/ImportRangesButton";
import ExportRangesButton from "./components/Buttons/ExportRangesButton";
import ButtonsRowContainer from "./components/Buttons/ButtonsRowContainer";
import CopyRangeButton from "./components/Buttons/CopyRangeButton";
import ResetRangeButton from "./components/Buttons/ResetRangeButton";
import PasteCSVRangeButton from "./components/Buttons/PasteCSVRangeButton";
import PartialRangeButtonsRow from "./components/Buttons/PartialRangeButtonsRow";
import SaveRangeButton from "./components/Buttons/SaveRangeButton";
import DeleteRangeButton from "./components/Buttons/DeleteRangeButton";
import { toggleShowFeatured } from "./store/rangeSlice";
import AppButton from "./components/Buttons/AppButton";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./store";
import FeaturedEditor from "./components/FeaturedEditor";
import PasteRaiseAsPrior from "./components/Buttons/PasteRaiseAsPrior";

function GriddierRangeBuilder() {
  const dispatch = useDispatch();
  const { showFeatured } = useSelector((state: RootState) => state.range);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        paddingRight: 50,
        paddingLeft: 50,
      }}
    >
      <span
        style={{
          color: colors.CONTRAST,
          fontSize: 25,
          paddingTop: 15,
          flexDirection: "row",
        }}
      >
        Griddier Range Builder
      </span>
      <NameTag />
      <span
        style={{
          color: colors.CONTRAST,
          fontSize: 25,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AppButton onClick={() => dispatch(toggleShowFeatured())}>
          {"<"}
        </AppButton>
        {!showFeatured ? <HandEditor /> : <FeaturedEditor />}
        <AppButton onClick={() => dispatch(toggleShowFeatured())}>
          {">"}
        </AppButton>
      </span>

      <FrequencyBar />
      <ButtonsRowContainer>
        <CopyRangeButton />
        <PasteCSVRangeButton />
        <ResetRangeButton />
        <PasteRaiseAsPrior />
      </ButtonsRowContainer>
      <PartialRangeButtonsRow />
      <ButtonsRowContainer>
        <ExportRangesButton />
        <ImportRangesButton />
        <SaveRangeButton />
        <DeleteRangeButton />
      </ButtonsRowContainer>
    </div>
  );
}

export default GriddierRangeBuilder;
