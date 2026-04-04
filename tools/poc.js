import { writeFileSync } from "node:fs";

const depth = 120;
const payloadSize = 20_000_000; // 20MB

let s = "";

// Opening blocks
for (let i = 0; i < depth; i++) {
  s += "{#if true}\n";
}

// Payload
s += "A".repeat(payloadSize);

// Closing blocks
for (let i = 0; i < depth; i++) {
  s += "{/if}\n";
}

// Write file
writeFileSync("src/routes/+page.svelte", s);