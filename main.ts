import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "To: Dad\n" +
  "I still have the draft: 'I got fired in March.' I open it every Sunday before I call you, and every Sunday I ask about your garden instead.";

const lines = ENTRY.split("\n");
const message = lines[1];
if (lines.length !== 2) throw new Error("entry must be exactly two lines");
if (!lines[0].startsWith("To: ")) throw new Error("first line must be a To: line");
if (message.length > 200) throw new Error("message line exceeds 200 characters");
if (ENTRY.length < 1 || ENTRY.length > 260) throw new Error("entry must be 1-260 characters");
if (!ENTRY.trim()) throw new Error("entry must not be only whitespace");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(ENTRY);
