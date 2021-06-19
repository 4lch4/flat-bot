// Helper library written for useful postprocessing tasks with Flat Data
// Has helper functions for manipulating csv, txt, json, excel, zip, and image files
// You can test this script locally on your computer by running `deno run -A --unstable postprocess.ts data.json`
import { readJSON, writeJSON } from 'https://deno.land/x/flat@0.0.10/mod.ts'

const filename = Deno.args[0]
const data = await readJSON(filename)
const createdAt = data[0].created_at
const newFilename = `${filename.substring(
  0,
  filename.indexOf('.json')
)}-${createdAt.replace(':', '.')}.json`

await writeJSON(newFilename, data)