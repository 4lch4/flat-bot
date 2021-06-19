// Helper library written for useful postprocessing tasks with Flat Data
// Has helper functions for manipulating csv, txt, json, excel, zip, and image files
// You can test this script locally on your computer by running `deno run -A --unstable postprocess.ts data.json`
// import { readJSON, writeJSON } from 'https://deno.land/x/flat@0.0.10/mod.ts'
import { readJsonSync, writeJsonSync } from 'https://deno.land/std@0.39.0/fs/mod.ts'

const filename = Deno.args[0]
const data = await readJsonSync(filename)
// const createdAt = data[0].created_at
const newFilename = `${filename.substring(
  0,
  filename.indexOf('.json')
)}-${new Date().toString().replace(':', '.').replace(' ', '.')}.json`

// await removeFile(filename)
await writeJsonSync(newFilename, data)
