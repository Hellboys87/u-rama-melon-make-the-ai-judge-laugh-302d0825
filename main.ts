import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "Bring-your-dog day went too well — HR offered my dog my job, and he took it for less.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
