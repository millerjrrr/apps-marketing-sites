import type { Answer } from "../types/Answer";


export const answerMap: Record<Answer, string> = {
   "0":"2oe + 2gs",
    "1":"1oe + 2gs",
    "2":"4gs",
    "3":"2gs",
    "4":"1gs",
    "5": "No bdsd"
}

export const colorMap: Record<Answer, string> = {
    "0": "#15803D", // green
    "1": "#3b9c5f", // light green
    "2": "#bba54c", // yellow
    "3": "#a39459", // light yellow
    "4": "#946464", // light red
    "5": "#531212", // dark red
};
