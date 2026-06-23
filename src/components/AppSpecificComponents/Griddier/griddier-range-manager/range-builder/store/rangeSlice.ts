import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {
  PokerHand,
  HandActions,
  SpotInfo,
  PositionName,
} from "../types";

import  {orderedHandsArray }from "../types";

type RangeState = {
  name: string;
  hands: Record<PokerHand, HandActions>;
  showFeatured: boolean;
  featured: PokerHand[];
  spotDescription: SpotInfo;
};

const initialHands: Record<PokerHand, HandActions> = orderedHandsArray.reduce(
  (acc, hand) => {
    acc[hand] = { allin: 0, raise: 0, call: 0, prior: 4 };
    return acc;
  },
  {} as Record<PokerHand, HandActions>
);

const initialState: RangeState = {
  name: "100 Grid Name",
  hands: initialHands,
  showFeatured: false,
  featured: ["AA", "KK", "QQ"] as PokerHand[],
  spotDescription: {
    hero: "LJ" as PositionName,
    vsAction: "",
    stacks: 100,
    raiseSize: 2,
  },
};

const rangeSlice = createSlice({
  name: "range",
  initialState,
  reducers: {
    setHandAction: (
      state,
      action: PayloadAction<{ hand: PokerHand; handActions: HandActions }>
    ) => {
      state.hands[action.payload.hand] = action.payload.handActions;
    },

    resetRange: (state) => {
      state.name = "100 Add a Grid Name";
      state.hands = orderedHandsArray.reduce((acc, hand) => {
        acc[hand] = { allin: 0, raise: 0, call: 0, prior: 4 };
        return acc;
      }, {} as Record<PokerHand, HandActions>);
    },
    setHands: (
      state,
      action: PayloadAction<{
        name: string;
        hands: Record<PokerHand, HandActions>;
      }>
    ) => {
      state.name = action.payload.name;
      state.hands = action.payload.hands;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    toggleShowFeatured: (state) => {
      state.showFeatured = !state.showFeatured;
    },
    setFeaturedHands: (state, action: PayloadAction<PokerHand[]>) => {
      state.featured = action.payload;
    },
  },
});

export const {
  setHandAction,
  resetRange,
  setHands,
  setName,
  toggleShowFeatured,
  setFeaturedHands,
} = rangeSlice.actions;
export default rangeSlice.reducer;
