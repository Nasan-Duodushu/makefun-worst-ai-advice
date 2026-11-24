// Worst AI Advice: one line of the worst possible advice an AI could give,
// 140 characters at most, in the confident, tidy voice of a helpful assistant.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'For insomnia, simply stop sleeping — your body adapts within a week, and the extra hours are basically free time.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE);
