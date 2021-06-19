// Helper library written for useful postprocessing tasks with Flat Data
// Has helper functions for manipulating csv, txt, json, excel, zip, and image files
// You can test this script locally on your computer by runinng `deno run -A --unstable postprocess.ts data.json`
import { ensureDir } from 'https://deno.land/std@0.99.0/fs/ensure_dir.ts'
import { join } from 'https://deno.land/std@0.99.0/node/path.ts'
// Get the data filename as the first argument
const filename = Deno.args[0]
const data = await Deno.readTextFile(filename)
const createdAt = data[0].created_at
const newFilename = `${filename.substring(
  0,
  filename.indexOf('.json')
)}-${createdAt.replace(':', '.')}.json`

const outDir = join('data', 'osrs')

await ensureDir(outDir)

Deno.writeTextFileSync(newFilename, data[0].trends)