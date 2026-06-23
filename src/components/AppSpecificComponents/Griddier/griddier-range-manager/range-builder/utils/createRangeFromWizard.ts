const pattern =
  /^(\s*[2-9TJQKA][cdhs][2-9TJQKA][cdhs]\s*:\s*\d+(\.\d+)?)(\s*,\s*[2-9TJQKA][cdhs][2-9TJQKA][cdhs]\s*:\s*\d+(\.\d+)?)*$/;

export const isWizardRange = (str) => {
  return pattern.test(str);
};

const mapKeyToHand = (key: string): string => {
  if (key.length !== 4) throw new Error("Invalid key format");

  const rank1 = key[0];
  const suit1 = key[1];
  const rank2 = key[2];
  const suit2 = key[3];

  const validSuits = ["s", "c", "d", "h"];
  const validRanks = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "T",
    "J",
    "Q",
    "K",
    "A",
  ];

  if (!validSuits.includes(suit1) || !validSuits.includes(suit2)) {
    throw new Error("Invalid suit in key");
  }

  if (!validRanks.includes(rank1) || !validRanks.includes(rank2)) {
    throw new Error("Invalid rank in key");
  }

  // Case 1: Pair
  if (rank1 === rank2) {
    return rank1 + rank2;
  }

  // Always order ranks highest → lowest
  const rankOrder = "23456789TJQKA";
  const r1 = rankOrder.indexOf(rank1);
  const r2 = rankOrder.indexOf(rank2);

  let highRank = rank1;
  let lowRank = rank2;
  let suitedness = suit1 === suit2 ? "s" : "o";

  if (r2 > r1) {
    // swap to keep highest first
    highRank = rank2;
    lowRank = rank1;
  }

  return highRank + lowRank + suitedness;
};

export const createRangeFromWizard = (text: string) => {
  const handData = Object.fromEntries(
    text.split(",").map((entry) => {
      const [key, value] = entry.split(":").map((s) => s.trim());
      return [mapKeyToHand(key), parseFloat(value)];
    })
  );

  return handData;
};
