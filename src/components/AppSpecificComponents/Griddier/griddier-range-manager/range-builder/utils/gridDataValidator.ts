import type { GridDataEntry, HandActions,  PokerHand } from "../types";
import { handsArray, } from "../types";

export const isValidGridData = (
  obj: any
): obj is Record<string, GridDataEntry> => {
  if (typeof obj !== "object" || obj === null) return false;

  return Object.entries(obj).every(([key, entry]) => {
    if (!isGridDataEntry(entry)) {
      console.warn(`❌ Invalid entry at key: ${key}`);
      return false;
    }
    return true;
  });
};

export function isGridDataEntry(entry: any): entry is GridDataEntry {
  if (typeof entry !== "object" || entry === null) return false;

  const { hands, featured } = entry;

  return (
    isHandsObject(hands) &&
    Array.isArray(featured) &&
    featured.every((h) => handsArray.includes(h))
  );
}

function isHandsObject(hands: any): hands is Record<PokerHand, HandActions> {
  if (typeof hands !== "object" || hands === null) return false;

  return Object.entries(hands).every(([hand, actions]) => {
    if (!handsArray.includes(hand as PokerHand)) {
      console.warn(`❌ Invalid hand key: ${hand}`);
      return false;
    }
    return isHandActions(actions);
  });
}

function isHandActions(obj: any): obj is HandActions {
  if (typeof obj !== "object" || obj === null) return false;

  const valid = [0, 1, 2, 3, 4];
  const { allin, raise, call, prior } = obj;

  return (
    valid.includes(allin) &&
    valid.includes(raise) &&
    valid.includes(call) &&
    valid.includes(prior)
  );
}
