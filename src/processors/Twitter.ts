// Helper library written for useful postprocessing tasks with Flat Data
// Has helper functions for manipulating csv, txt, json, excel, zip, and image files
// You can test this script locally on your computer by runinng `deno run -A --unstable postprocess.ts data.json`
import * as log from 'https://deno.land/std@0.97.0/log/mod.ts'
import { readJson, writeJson } from 'https://deno.land/x/jsonfile/mod.ts'

// Get the data filename as the first argument
const filename = Deno.args[0]
const data = await readJson(filename)
const createdAt = data[0].created_at
const newFilename = `${filename.substring(
  0,
  filename.indexOf('.json')
)}-${createdAt.replace(':', '.')}.json`

log.debug(`newFilename = ${newFilename}`)

await writeJson(newFilename, data[0].trends, { spaces: 2 })