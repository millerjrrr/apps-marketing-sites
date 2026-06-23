import { useState } from "react";
import GriddierRangeBuilder from "./range-builder/RangeBuilder";
import colors from "./range-builder/utils/colors";
import RangeList from "./range-list/RangeList";
import AppButton from "./range-builder/components/Buttons/AppButton";
import { List } from "lucide-react";
import { Provider } from "react-redux";
import { store } from "./range-builder/store";

function GriddierRangeManager() {
  const [showRangeList, setShowRangeList] = useState(false);

  return (
    <div
      className="flex min-h-screen w-full items-center justify-center p-5 py-20 text-white"
   
    >
   <Provider store={store}>

        <GriddierRangeBuilder />

        {showRangeList && <RangeList />}

<AppButton onClick={() => setShowRangeList((prev) => !prev)}>
<List size={20} />
</AppButton>

</Provider>
   
    </div>
  );
}

export default GriddierRangeManager;