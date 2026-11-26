// Write one funny one-line office joke to /output/entry.txt.
//
// Node 22, no dependencies, deterministic, no network. The line is a fixed
// string: the program writes exactly these bytes on every run.
//
// The line (114 chars) won an 8-candidate head-to-head against the judge
// brief: the punchline is a hypocrisy reveal — a minimalism lecture from a
// man with three screens and a standing desk. No stock office phrase, one
// read, every word earning its place. Full comparison:
// u-suzy-one-line-office-joke-laugh-off-f574ac73-candidates.md.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I asked IT for a second monitor and got a lecture on minimalism from a man with three screens and a standing desk.";

// Gate mirror: the house gate accepts 1-200 characters of non-whitespace
// text. Fail loudly here rather than write a line the gate would refuse.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(`entry line is ${LINE.length} chars, outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, { encoding: "utf-8" });
