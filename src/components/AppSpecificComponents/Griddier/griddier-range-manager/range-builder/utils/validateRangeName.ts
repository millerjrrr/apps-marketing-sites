import {
  positions,
  type StackSize,
} from "../types";

export function validateRangeName(name: string): boolean {
  if (typeof name !== "string" || name.trim() === "") return false;

  const description = name.slice(name.indexOf(" ") + 1); // after first space
  const stack = name.slice(0, name.indexOf(" ")); // fallback just in case
  const position = description.slice(0, 2);

  const stackNum = Number(stack);

  const validStacks: StackSize[] = [50, 100, 150, 200];

  const isValidStack = validStacks.includes(stackNum as StackSize);
  const isValidPosition = positions.includes(position as any);

  return isValidStack && isValidPosition;
}
