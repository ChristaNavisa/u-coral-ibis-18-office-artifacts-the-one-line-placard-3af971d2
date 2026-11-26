import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line museum placard for an ordinary office object, recast as an
// ancient artifact: a lanyard, the woven neck-chain of the Badge Bearers,
// worn to open every door in the temple — and it opened none.
const ENTRY =
  "Lanyard, c. 2019. Woven neck-chain of the Badge Bearers, worn to open every door in the temple. It opened none.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (ENTRY.length > 180 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-180 characters, got ${ENTRY.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
