// Helper library written for useful postprocessing tasks with Flat Data
// Has helper functions for manipulating csv, txt, json, excel, zip, and image files
// You can test this script locally on your computer by running `deno run -A --unstable postprocess.ts data.json`
// import { readJSON, writeJSON } from 'https://deno.land/x/flat@0.0.10/mod.ts'
// import {
//   readJsonSync,
//   writeJsonSync
// } from 'https://deno.land/std@0.39.0/fs/mod'

import { join } from 'https://deno.land/std@0.99.0/node/path.ts'
import { format } from 'https://deno.land/std@0.99.0/datetime/mod.ts'

function writeJson(path: string, data: object): string {
  try {
    Deno.writeTextFileSync(path, JSON.stringify(data))

    return 'Written to ' + path
  } catch (e) {
    return e.message
  }
}

const fileDate = format(new Date(), 'yyyy-MM-dd_HH.mm.ss')
const filename = Deno.args[0]
const content: string = await Deno.readTextFile(filename)
const newFilename = `${filename.substring(
  0,
  filename.indexOf('.txt')
)}-${fileDate}.txt`

const newContent = content.substring(
  content.indexOf('(') + 1,
  content.indexOf(')')
)

await Deno.writeTextFileSync(join('data', 'osrs', newFilename), newContent)

// const res = await fileContent
// fileContent.then((response: any) => {
//   console.log(response)
// })

// const createdAt = data[0].created_at

// console.log(`newFilename = ${newFilename}`)

// await removeFile(filename)
// await writeJsonSync(newFilename, data)
